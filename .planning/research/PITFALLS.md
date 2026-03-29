# Domain Pitfalls

**Domain:** Unity Development Skill Creation via Web Tutorial Scraping
**Researched:** 2026-03-29

## Critical Pitfalls

Mistakes that cause rewrites, unusable output, or wasted effort.

### Pitfall 1: Chrome-DevTools-MCP Navigation Failures on SPA/Dynamic Sites

**What goes wrong:** The `chrome-devtools-mcp` tool navigates to a URL, reports "Successfully navigated," but the page content is blank or incomplete. This is a documented bug (GitHub issue #832). The Unity Learn site (learn.unity.com) and unity.com both use JavaScript-heavy rendering. The MCP tool may return empty `document.body.innerHTML` or screenshot a blank page even though the URL appears correct.

**Why it happens:** The Unity website uses client-side rendering (JavaScript SPA patterns). `chrome-devtools-mcp` sometimes fails to wait for dynamic content to finish loading. The tool's default navigation timeout (10 seconds, per issue #116) may be insufficient for heavy JS sites. Additionally, "No page selected" errors (issue #492) occur when navigating across multiple pages in sequence.

**Consequences:**
- Entire pages appear empty, leading to "no content found" for valid tutorial URLs
- Skill ends up with gaps because the scraper silently skipped pages
- The agent may hallucinate content to fill gaps if not explicitly instructed to report failures

**Prevention:**
1. After every `navigate_page` call, immediately verify content loaded by running `evaluate_script` with `document.title` or `document.body.innerText.length`
2. If content length is zero or suspiciously short, retry with an explicit wait (evaluate `new Promise(r => setTimeout(r, 5000))` then re-check)
3. Maintain a scraping manifest: for every target URL, record whether content was successfully extracted, its approximate word count, and a content hash
4. Never mark a page as "scraped" unless verified content was extracted
5. At end of scraping phase, compare manifest against expected page list to detect gaps

**Detection (warning signs):**
- Pages returning fewer than 100 words of content
- Multiple sequential pages all returning identical boilerplate (header/footer only)
- The extracted text contains only navigation elements and no tutorial body text

**Confidence:** HIGH -- based on documented GitHub issues #832, #492, #116

**Phase mapping:** Phase 1 (Web Scraping Infrastructure) and Phase 2 (Content Extraction)

---

### Pitfall 2: Missing Content Behind Tabs, Accordions, and "Show More" Buttons

**What goes wrong:** Unity tutorial pages frequently use expandable sections, tabbed content (e.g., "C# tab" vs "Visual Scripting tab"), accordions for code examples, and "Show More" buttons for long content. A naive scrape of the initial DOM only captures the visible default tab, missing 30-70% of the page's actual content.

**Why it happens:** Tutorial sites hide content behind interactive UI elements for better UX. The hidden content is either: (a) not in the DOM at all until the tab is clicked (lazy-loaded), or (b) in the DOM but with `display:none` and excluded by text extraction that only reads visible content.

**Consequences:**
- Code examples missing (they are often in a collapsed section)
- Only one language/approach variant captured when multiple exist
- The skill file appears complete but has systematic blind spots

**Prevention:**
1. Before extracting text, use `evaluate_script` to click all expandable elements: `document.querySelectorAll('[data-toggle], .accordion-trigger, [role="tab"]').forEach(el => el.click())`
2. After expanding, wait 1-2 seconds for lazy content to load
3. Extract content from `document.body.innerText` or use the accessibility tree which includes hidden content
4. For tabbed content, iterate through all tabs programmatically: click each tab, extract, then move to the next
5. Validate extracted content length against a visual inspection of 3-5 representative pages to establish a "expected content size" baseline

**Detection (warning signs):**
- Extracted content conspicuously lacks code examples
- Tutorial pages about scripting have no C# code blocks
- Page content is substantially shorter than what you see when viewing the page manually

**Confidence:** HIGH -- this is a universal web scraping challenge, well-documented across multiple sources

**Phase mapping:** Phase 2 (Content Extraction)

---

### Pitfall 3: Unity Version Mismatch -- Mixing APIs Across Unity 2022 LTS / Unity 6 / Unity 6.2

**What goes wrong:** The scraped Unity tutorials may reference APIs, workflows, or editor features from different Unity versions. The skill file then contains instructions mixing deprecated and current APIs, causing users to encounter compile errors or runtime failures.

**Why it happens:**
- Unity tutorials at unity.com/cn may not all be updated to the same Unity version
- Unity 6 (version 6000.x) introduced significant API changes from Unity 2022 LTS:
  - `ExecuteDefaultAction` / `ExecuteDefaultActionAtTarget` deprecated in UI Toolkit
  - Graphics format APIs deprecated in 2022.1 now produce compile errors in Unity 6
  - Render pipeline APIs changed (`SetupRenderPasses` deprecated in URP for Unity 6.2)
  - `VisualElement.transform` deprecated in Unity 6.2
- Tutorials from unity.com/cn/learn/get-started may target Unity Essentials or earlier pathway versions
- The scraping process has no mechanism to detect which Unity version a tutorial targets

**Consequences:**
- Skill advises using deprecated APIs that throw warnings or errors
- Users following the skill guidance get compile errors on modern Unity 6.x
- Contradictory guidance (old tutorial says "use X", new tutorial says "use Y")

**Prevention:**
1. During scraping, extract the Unity version tag/badge from each tutorial page (if present)
2. When synthesizing the skill, explicitly note the target Unity version for each piece of guidance
3. Cross-reference all extracted API names against the Unity 6.x scripting API docs to verify they still exist
4. For any API mentioned in the skill, check the Unity 6 upgrade guide for deprecation notices
5. The skill file should include a version disclaimer: "This guidance targets Unity 6.x. Some APIs may differ from Unity 2022 LTS."
6. Prefer documenting the latest approach and noting the old approach as a legacy fallback

**Detection (warning signs):**
- Tutorial pages that reference Unity Hub version 2.x (obsolete) vs 3.x
- Code examples using `OnGUI()` or other legacy APIs
- References to features that were renamed (e.g., "HDRP" pipeline changes, Input System vs old Input Manager)

**Confidence:** HIGH -- based on official Unity 6 upgrade guide documentation

**Phase mapping:** Phase 3 (Content Synthesis) and Phase 4 (Skill File Assembly)

---

### Pitfall 4: Skill File Exceeds Token Budget -- Unusable Due to Size

**What goes wrong:** The Unity tutorial content is vast (the "Get Started" hub links to multiple learning pathways, each with dozens of tutorials). Naively cramming all extracted content into a single SKILL.md creates a file that is thousands of lines long, consuming excessive context window tokens and degrading Claude's performance.

**Why it happens:**
- The Unity "Get Started" content links to pathways like Unity Essentials, Game Development, and others, each with 20+ tutorial pages
- Each tutorial page contains detailed instructions, code examples, and explanations
- Without aggressive summarization, the raw content easily exceeds 10,000+ lines
- Anthropic recommends SKILL.md be under 500 lines, with additional content in separate reference files

**Consequences:**
- If SKILL.md exceeds ~500 lines, Claude's ability to follow instructions degrades
- A single monolithic skill file competes with conversation history for context window space
- Individual skills should be under ~2,000 tokens according to best practices
- Users experience slow responses and degraded quality

**Prevention:**
1. Plan the skill architecture BEFORE scraping: decide on a progressive disclosure structure
2. Use the multi-file skill pattern: SKILL.md (overview + navigation, under 500 lines) + separate reference files by domain (editor-workflows.md, scripting-patterns.md, asset-pipeline.md, etc.)
3. During synthesis, aggressively compress tutorial content: extract principles and patterns, not step-by-step walkthrough prose
4. Apply the "only add what Claude doesn't already know" principle ruthlessly -- Claude already knows C# syntax, basic OOP, what a game engine is, etc.
5. Test the skill with `/context` command to verify token consumption is reasonable
6. Target: SKILL.md under 500 lines, each reference file under 300 lines, total skill directory under 3,000 lines

**Detection (warning signs):**
- SKILL.md exceeding 500 lines
- Total skill content exceeding 5,000 lines across all files
- Paragraphs explaining concepts Claude already understands (what is a GameObject, what is C#, etc.)

**Confidence:** HIGH -- based on official Anthropic skill authoring best practices documentation

**Phase mapping:** Phase 3 (Content Synthesis) and Phase 4 (Skill File Assembly)

---

### Pitfall 5: Chinese-Language Site Content Mismatch

**What goes wrong:** The project targets `unity.com/cn/learn/get-started` (Chinese Unity site). The scraped content may be in Chinese, partially translated, or a mix of Chinese and English. The resulting skill file may contain Chinese-language instructions that don't serve English-speaking Claude Code users, or the Chinese content may differ from the English version.

**Why it happens:**
- `unity.com/cn/` is the Chinese localization of Unity's website
- Some tutorial content may be machine-translated or partially translated
- Chinese and English tutorial pages may not have 1:1 content parity
- Code examples and API names are in English regardless, but surrounding explanation text may be Chinese

**Consequences:**
- Skill file contains Chinese-language content that most users cannot use
- Partially translated content is garbled or lower quality than the English original
- Content coverage differs between the Chinese and English versions

**Prevention:**
1. Verify early (in Phase 1) whether unity.com/cn content is actually in Chinese or if it redirects to English
2. If Chinese: decide whether to scrape the English version instead (unity.com/learn/get-started) or translate during synthesis
3. If translating: Claude can translate Chinese to English during synthesis, but this adds a quality risk layer
4. Consider scraping both versions and using the English version as primary, Chinese as supplementary for any unique content
5. During content extraction, detect language of each page and tag it in the manifest

**Detection (warning signs):**
- Extracted text contains Chinese characters in non-code sections
- Tutorial page titles don't match expected English names
- Page URLs contain `/cn/` but content appears to be English (redirect behavior)

**Confidence:** MEDIUM -- the PROJECT.md explicitly calls out this URL; need to verify actual site behavior

**Phase mapping:** Phase 1 (Web Scraping Infrastructure) -- must be resolved immediately

---

## Technical Debt Patterns

Mistakes that seem harmless initially but create compounding problems.

### Pattern 1: No Scraping Manifest / Progress Tracking

**What goes wrong:** The scraping process runs across multiple sessions without a persistent record of what has been scraped, what failed, and what remains. When a session is interrupted (context window full, MCP connection lost, rate limiting), there is no way to resume without re-scraping everything.

**Why it happens:**
- chrome-devtools-mcp operates within a single Claude Code session
- No built-in persistence mechanism between MCP calls
- Agent may rely on conversation context to track progress, which is lost between sessions

**Prevention:**
1. Create a `scraping-manifest.json` file at the start, listing all target URLs with status fields
2. After each successful page scrape, update the manifest with: URL, status (success/failed/partial), word count, timestamp, content hash
3. At the start of each session, read the manifest to determine what remains
4. Store extracted raw content in individual files (one per page) so partial progress is preserved

**Phase mapping:** Phase 1 (Web Scraping Infrastructure)

---

### Pattern 2: Extracting Raw HTML Instead of Structured Content

**What goes wrong:** Content is extracted as raw HTML or unstructured `innerText` dumps, losing the semantic structure (headings, code blocks, lists, emphasis). During synthesis, the agent cannot distinguish between a code example and regular text, or between a section heading and a paragraph.

**Why it happens:**
- `document.body.innerText` strips all formatting
- Raw HTML is noisy with class names, divs, and styling
- The extraction step is treated as "just get the text" without considering downstream needs

**Prevention:**
1. Extract content as Markdown, not raw text or HTML
2. Use a DOM-to-Markdown conversion approach: identify heading elements (h1-h6), code blocks (pre/code), lists (ul/ol), and convert to Markdown during extraction
3. Alternatively, use the accessibility tree which provides semantic structure
4. Preserve code blocks with language annotations (```csharp)
5. Validate that extracted Markdown renders correctly

**Phase mapping:** Phase 2 (Content Extraction)

---

### Pattern 3: Scraping Tutorial Navigation Pages Instead of Content Pages

**What goes wrong:** The scraper captures hub/index pages (which list links to tutorials) instead of navigating into each individual tutorial page to extract the actual content. The result is a skill file that contains tutorial titles and descriptions but not the actual tutorial content.

**Why it happens:**
- unity.com/learn/get-started is a hub page linking to learn.unity.com pathways
- Pathways link to units, units link to individual tutorials
- The content hierarchy is 3-4 levels deep: Hub -> Pathway -> Unit -> Tutorial
- A shallow scrape only captures the top level

**Prevention:**
1. Map the full URL tree before scraping: Hub -> all Pathways -> all Units -> all Tutorial pages
2. Only mark a page as "content" if it contains actual tutorial text (not just links to sub-pages)
3. Build the URL tree first (Phase 1), then scrape content pages (Phase 2)
4. Cross-reference: the number of content pages should be in the range of 50-200 for a comprehensive "Get Started" hub

**Phase mapping:** Phase 1 (Web Scraping Infrastructure)

---

## Integration Gotchas

Issues at the boundaries between scraping, synthesis, and skill file creation.

### Gotcha 1: Duplicate Content Across Overlapping Tutorials

**What goes wrong:** Unity Learn pathways share tutorials. The "Unity Essentials" pathway and the "Game Development" pathway may both include the same "Get Started with Unity Hub" tutorial. If scraped independently, the same content appears multiple times in the skill file, wasting tokens.

**Why it happens:** Unity Learn's pathway structure reuses tutorials across different learning paths.

**Prevention:**
1. De-duplicate by URL: maintain a set of already-scraped URLs; skip any URL already in the set regardless of which pathway references it
2. During synthesis, merge duplicate content rather than appending it
3. The scraping manifest should track the canonical URL for each piece of content

**Phase mapping:** Phase 2 (Content Extraction) and Phase 3 (Synthesis)

---

### Gotcha 2: Code Examples Without Context

**What goes wrong:** Extracted code snippets are syntactically valid but lack crucial context: which Unity version, which project type (2D vs 3D vs URP vs HDRP), what script they belong to, and what using/import statements are needed. The skill file includes code that looks complete but fails when users try to use it.

**Why it happens:**
- Tutorial pages provide context through surrounding text and progressive building
- When extracting and compressing content, the surrounding context gets stripped
- A code example that says `GetComponent<Rigidbody>()` may not mention it requires `using UnityEngine;` and a 3D project

**Prevention:**
1. When extracting code examples, also extract the surrounding 2-3 sentences for context
2. During synthesis, ensure every code pattern in the skill includes: required using statements, the class it belongs in (MonoBehaviour, ScriptableObject, Editor, etc.), and minimum Unity version if relevant
3. Test-compile representative code patterns against a Unity 6 project if possible

**Phase mapping:** Phase 3 (Content Synthesis)

---

### Gotcha 3: Skill Description Mismatch -- Claude Never Activates the Skill

**What goes wrong:** The skill is created with a vague description like "Unity development guidance" that does not match how users actually phrase Unity-related requests. Claude's skill discovery mechanism fails to activate it, so the skill is never used despite being well-written.

**Why it happens:**
- The description field (max 1024 chars) is the primary trigger for automatic skill activation
- Generic descriptions don't contain the specific keywords users actually type
- "Unity" alone is too broad; users ask about "MonoBehaviour lifecycle," "prefab instantiation," "build for Android," etc.

**Prevention:**
1. Write the description to include high-frequency user query terms: "Unity Editor workflows, C# MonoBehaviour scripting, prefabs, scenes, physics, UI Toolkit, asset pipeline, build settings, package manager"
2. Front-load the key use case in the first 250 characters (descriptions are truncated beyond that)
3. Test activation by asking Claude various Unity-related questions and checking if the skill loads
4. Include trigger phrases like "Use when the user asks about Unity game development, Unity Editor, C# scripting for Unity, or game engine workflows"

**Confidence:** HIGH -- based on official skill authoring best practices noting that proper descriptions can improve activation from 20% to 90%

**Phase mapping:** Phase 4 (Skill File Assembly)

---

## "Looks Done But Isn't" Checklist

Items that create a false sense of completion.

| Checkpoint | How to Verify | What "Done" Actually Means |
|------------|---------------|---------------------------|
| "All pages scraped" | Manifest shows success for every URL in the tree | Every content page (not hub page) has extracted content with word count > 100 |
| "Content is complete" | Visual spot-check 5 random pages against live site | All tabs expanded, code blocks present, no truncated sections |
| "Skill file written" | File exists at correct path with frontmatter | Under 500 lines, progressive disclosure structure, reference files linked |
| "Covers all tutorials" | Cross-reference skill topics against tutorial page titles | Every tutorial topic appears in either SKILL.md or a reference file |
| "Code examples are correct" | Check 10 random code patterns against Unity 6 API docs | Using statements present, correct API names, no deprecated calls |
| "Works with Claude" | Actually invoke the skill and ask Unity questions | Claude loads the skill, follows its guidance, produces correct Unity code |
| "Chinese content handled" | Check extracted content language | Content is in English (or explicitly decided to be Chinese and documented) |
| "Version-appropriate" | Grep skill for known deprecated APIs | No `OnGUI()` in new code patterns, no `SetupRenderPasses` in URP guidance |
| "Token budget met" | Run `/context` with skill loaded | Skill + reference files consume < 5% of context window |
| "Supporting files discoverable" | Check reference file links in SKILL.md | Every reference file is linked from SKILL.md (one level deep, not nested) |

---

## Pitfall-to-Phase Mapping

| Phase Topic | Likely Pitfall | Mitigation | Severity |
|-------------|---------------|------------|----------|
| Web scraping infrastructure setup | Navigation failures on SPA sites (Pitfall 1) | Verify content after every navigation; implement retry logic | Critical |
| Web scraping infrastructure setup | Chinese vs English content (Pitfall 5) | Detect language immediately; decide on source URL | Critical |
| Web scraping infrastructure setup | No progress tracking (Pattern 1) | Build manifest system before scraping begins | High |
| Web scraping infrastructure setup | Scraping hub pages not content pages (Pattern 3) | Map full URL tree first, distinguish hub vs content | High |
| Content extraction | Hidden content behind tabs/accordions (Pitfall 2) | Expand all interactive elements before extraction | Critical |
| Content extraction | Raw HTML instead of structured Markdown (Pattern 2) | Convert to Markdown during extraction, preserve code blocks | High |
| Content extraction | Duplicate content across pathways (Gotcha 1) | De-duplicate by URL during extraction | Medium |
| Content synthesis | Unity version mismatch (Pitfall 3) | Tag version, cross-reference against Unity 6 API docs | Critical |
| Content synthesis | Code examples without context (Gotcha 2) | Extract surrounding context, add using statements | High |
| Content synthesis | Over-explaining what Claude already knows | Apply "only add what Claude doesn't know" principle | Medium |
| Skill file assembly | Token budget exceeded (Pitfall 4) | Progressive disclosure, multi-file architecture, under 500 lines | Critical |
| Skill file assembly | Skill never activates (Gotcha 3) | Write specific description with trigger keywords | High |
| Skill file assembly | Deeply nested file references | Keep all references one level deep from SKILL.md | Medium |
| Quality validation | False sense of completion | Run full checklist from "Looks Done But Isn't" table | High |

---

## Sources

### Official Documentation (HIGH confidence)
- [Chrome DevTools MCP GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp) -- known issues #832, #492, #116, #669
- [Chrome DevTools MCP Blog](https://developer.chrome.com/blog/chrome-devtools-mcp) -- capabilities and architecture
- [Unity Manual: Upgrade to Unity 6.0](https://docs.unity3d.com/6000.3/Documentation/Manual/UpgradeGuideUnity6.html) -- deprecated APIs
- [Unity Manual: Upgrade to Unity 6.2](https://docs.unity3d.com/6000.2/Documentation/Manual/UpgradeGuideUnity62.html) -- additional deprecations
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) -- skill file structure and conventions
- [Skill Authoring Best Practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) -- token budgets, progressive disclosure, description authoring

### Community/Web Sources (MEDIUM confidence)
- [Web Scraping Dynamic Content Challenges](https://blog.diffbot.com/hardest-pages-to-web-scrape-with-workarounds/) -- lazy loading, tabs, accordions
- [Unity Discussions: Upgrade Issues](https://discussions.unity.com/t/solved-scripts-error-appear-after-upgrade-from-2022-lts-to-unity-6-6000-0-25f1/1548719) -- real-world version migration problems
- [Unity Learn Platform](https://learn.unity.com) -- tutorial structure and pathways
- [Unity Get Started Hub](https://unity.com/learn/get-started) -- primary scraping target

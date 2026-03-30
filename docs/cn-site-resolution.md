# CN Site Resolution

## Test Date

2026-03-30

## Sites Tested

### 1. unity.com/cn/learn/get-started (CN Site)

- **HTTP Status**: 403 (Access Denied)
- **Content**: "You don't have permission to access this URL on this server."
- **Language**: N/A (error page, no Chinese or English content)
- **Automation**: Puppeteer (headless Chrome) receives the same 403 block
- **Verdict**: Blocked. The CN site actively denies automated access.

### 2. learn.unity.com (Unity Learn Hub - English)

- **HTTP Status**: 200
- **Content**: Full English tutorial hub with pathways, courses, and tutorials
- **Word Count**: ~554 words on landing page, ~890 words on tutorial pages
- **Language**: English
- **Automation**: Puppeteer works reliably, full content extraction confirmed
- **Notes**: curl fails with TLS handshake error (SSL_ERROR_SYSCALL), but headless Chrome works fine. This indicates the site uses TLS fingerprinting or requires a real browser user-agent.
- **Working tutorial URLs discovered**:
  - `https://learn.unity.com/tutorial/get-started-with-unity-in-editor-tutorial` (890 words)
  - `https://learn.unity.com/tutorial/explore-the-unity-hub`
  - `https://learn.unity.com/tutorial/set-up-the-unity-editor`
  - `https://learn.unity.com/tutorial/publish-on-unity-play`
  - `https://learn.unity.com/pathway/junior-programmer`
  - `https://learn.unity.com/pathway/game-development`
- **Note on old URLs**: `https://learn.unity.com/tutorial/get-started-with-unity` returns 404. Unity has restructured their tutorial URLs. URL discovery must use live link extraction, not hardcoded paths.

### 3. docs.unity3d.com/Manual/ (Unity Manual)

- **HTTP Status**: 200
- **Content**: Full Unity Manual documentation
- **Word Count**: Varies by page (full HTML responses of 25-45KB)
- **Language**: English (with links to CN, JA, KR translations)
- **Automation**: Both curl and Puppeteer work reliably
- **Notes**: Some older Manual page paths (e.g., `CreatingGameplay.html`) return 404. The current version uses different URL paths. URL discovery must start from the Manual index.

### 4. docs.unity3d.com/ScriptReference/ (Scripting API)

- **HTTP Status**: 200
- **Content**: Full Unity Scripting API reference
- **Word Count**: ~2239 words for MonoBehaviour page
- **Language**: English
- **Automation**: Both curl and Puppeteer work reliably
- **Version**: Unity 6.3 LTS (current)

## Decision

**Primary sources (English):**
1. **learn.unity.com** -- Tutorial pathways and courses (requires Puppeteer; curl blocked by TLS fingerprinting)
2. **docs.unity3d.com/Manual/** -- Unity Manual reference documentation (works with both curl and Puppeteer)
3. **docs.unity3d.com/ScriptReference/** -- API reference documentation (works with both curl and Puppeteer)

**Deprioritized:**
- **unity.com/cn** -- Returns 403 Access Denied. Blocked by server-side access control. Not worth debugging since English content is canonical and complete.

**Tool choice:**
- **Puppeteer (headless Chrome)** is the required tool for all scraping. While curl works for docs.unity3d.com, it fails for learn.unity.com. Using Puppeteer consistently across all sources simplifies the pipeline and handles JavaScript-rendered content.

**Language:**
- English is the final language for all skill content. No Chinese content needed.

# Technology Stack

**Project:** Unity Development Skill for Claude Code
**Researched:** 2026-03-29
**Overall confidence:** MEDIUM-HIGH

## Context

This is not a traditional software project with runtime dependencies. The "stack" here is the set of tools, formats, and source materials needed to systematically read official Unity tutorials via Chrome DevTools MCP, synthesize them, and produce a well-structured Claude Code skill file. The output artifact is a SKILL.md-based skill (or set of skills) following the Agent Skills open standard.

---

## Recommended Stack

### Core Output Format: Agent Skills / SKILL.md

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Agent Skills Specification | 1.0 (Dec 2025) | Skill file format standard | Universal standard adopted by Claude Code, Codex CLI, VS Code, Cursor, Gemini CLI, and 20+ other platforms. Writing to this spec ensures maximum portability. |
| SKILL.md + YAML Frontmatter | Current | Skill entry point and metadata | Required by the spec. The `name` and `description` fields drive auto-discovery; the markdown body contains instructions. |
| Progressive Disclosure (references/) | Current | Large content management | Official recommendation: keep SKILL.md under 500 lines / 5000 tokens. Detailed API docs go in `references/` subdirectory, loaded on demand. Critical for a Unity skill since the domain is massive. |

**Confidence: HIGH** -- Based on official Anthropic documentation at code.claude.com/docs/en/skills and the Agent Skills specification at agentskills.io/specification.

### Content Source: Unity Official Tutorials

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Unity 6.3 LTS | 6000.3 (Dec 2025) | Target Unity version for skill content | Latest LTS release, supported through Dec 2027. All content should target this version. |
| unity.com/cn/learn/get-started | Current | Primary tutorial source | User-specified source URL. This is the Chinese-localized Unity "Get Started" hub. Note: the content is in Chinese -- translation/synthesis will be needed. |
| docs.unity3d.com/6000.3/ | Current | Authoritative reference docs | The official Unity 6.3 manual and scripting API. Use to verify and supplement tutorial content. |
| learn.unity.com | Current | Extended tutorial platform | Unity Learn hosts structured pathways (Unity Essentials, Junior Programmer, etc.) that go deeper than the get-started hub. |

**Confidence: HIGH** -- Unity 6.3 LTS confirmed as current via unity.com/releases/unity-6/support and multiple official sources.

### Web Reading Tool: Chrome DevTools MCP

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| chrome-devtools-mcp | latest (via npx) | Web page reading and navigation | Official Google MCP server for browser automation. Provides 29 tools including `navigate_page`, `take_snapshot`, `evaluate_script`. Captures full rendered DOM including dynamic/JS-generated content -- essential since Unity's tutorial pages use significant client-side rendering. |
| Node.js | v20.19+ LTS | Runtime for chrome-devtools-mcp | Required dependency. Must be a maintenance LTS version. |
| Google Chrome | Current stable | Browser instance | Required by chrome-devtools-mcp. Only officially supports Google Chrome and Chrome for Testing. |

**Confidence: HIGH** -- Based on official github.com/ChromeDevTools/chrome-devtools-mcp documentation.

### Development Environment

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Claude Code | Current | Development agent / authoring tool | We are building a skill FOR Claude Code, USING Claude Code. The agent reads web content via MCP, synthesizes it, and writes SKILL.md files. |
| Git | Current | Version control for skill artifacts | Standard. Track skill content as it evolves across phases. |

**Confidence: HIGH** -- Known tooling.

---

## Detailed Tool Configuration

### Chrome DevTools MCP Setup for Claude Code

Installation command:
```bash
claude mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest
```

For authenticated/persistent session reading (recommended for systematic tutorial crawling):
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

Key tools for this project:
| MCP Tool | Purpose in This Project |
|----------|------------------------|
| `navigate_page` | Navigate to each tutorial page URL |
| `take_snapshot` | Capture full DOM content of tutorial pages (preferred over screenshot) |
| `evaluate_script` | Extract specific content via JS selectors if needed |
| `list_pages` / `select_page` | Manage multiple open tabs during systematic reading |
| `click` | Navigate through paginated tutorials or expand collapsed sections |
| `take_screenshot` | Visual verification of page content when text extraction is ambiguous |

Limitations to plan around:
- Pages behind authentication will require `--browserUrl` configuration with pre-authenticated Chrome profile
- Rate limiting: no built-in rate limiting, but rapid navigation may trigger Unity's CDN protections
- Dynamic content: some Unity tutorial content loads lazily -- may need scroll/wait sequences
- The `--headless` flag is useful for batch processing but some pages may render differently

### Agent Skills Directory Structure

Based on the specification and the Nice-Wolf-Studio reference implementation, the recommended structure is:

```
unity-dev/
  SKILL.md                    # Main skill: overview + navigation
  references/
    editor-workflows.md       # Scene management, prefabs, UI
    scripting-patterns.md     # C# MonoBehaviour, lifecycle, events
    asset-pipeline.md         # Import, configure, optimize
    build-deployment.md       # Platform builds, player settings
    cli-tools.md              # Unity CLI, package manager, batch mode
```

Or, for maximum discoverability, a multi-skill plugin approach:

```
.claude-plugin/
  plugin.json
skills/
  unity-foundations/
    SKILL.md
    references/
      REFERENCE.md
  unity-scripting/
    SKILL.md
    references/
      REFERENCE.md
  unity-cli/
    SKILL.md
  ...
```

**Decision: Use the multi-skill plugin approach.** Rationale: The Nice-Wolf-Studio implementation (35 skills, 44,500+ lines) demonstrates that Unity's domain is too large for a single SKILL.md. Progressive disclosure works best when each skill has a focused scope with its own references. A single monolithic skill would exceed the 500-line / 5000-token recommendation.

### SKILL.md Frontmatter Convention

Per the Agent Skills specification (agentskills.io):

```yaml
---
name: unity-foundations          # Required. Lowercase, hyphens, max 64 chars
description: >                   # Required. Max 1024 chars. Front-load keywords.
  Unity GameObjects, Components, Transforms, Prefabs, Scenes, and
  ScriptableObjects. Use when creating, organizing, or managing Unity
  game objects and scene hierarchies.
---
```

Claude Code extensions (beyond the open standard):
```yaml
---
name: unity-foundations
description: Unity GameObjects, Components, Transforms, Prefabs, Scenes. Use when working with Unity scene hierarchies.
allowed-tools: Read, Grep, Glob    # Optional: pre-approved tools
paths: "**/*.cs, **/*.unity"       # Optional: auto-activate for Unity files
---
```

---

## Unity 6.3 LTS Ecosystem Context

Understanding the current Unity ecosystem is essential for writing accurate skill content.

### Current Version Landscape

| Version | Status | Support Until | Notes |
|---------|--------|---------------|-------|
| Unity 6.3 LTS | **Current LTS** | Dec 2027 | Target for this skill |
| Unity 6.0 LTS | Previous LTS | Oct 2026 | Still widely used |
| Unity 6.4-6.7 | Planned 2026 | TBD | Quarterly update cadence |
| Unity 2022 LTS | Legacy | Mar 2025 (expired) | Many existing tutorials still reference this |

### Key Unity 6 Technology Choices

| Area | Current Recommendation | Deprecated/Legacy |
|------|----------------------|-------------------|
| Render Pipeline | URP (Universal) or HDRP | Built-in Render Pipeline |
| UI System | UI Toolkit (USS/UXML) | uGUI (still supported, not deprecated) |
| Input System | New Input System (InputAction) | Legacy Input (Input.GetKey) |
| Physics | Built-in PhysX (improved in 6.x) | -- |
| Build Configuration | Build Profiles (new in Unity 6) | Build Settings window |
| Async | Awaitable (native Unity 6) | Coroutines (still valid), UniTask (3rd party) |
| Navigation | NavMesh (refactored) | Legacy NavMesh components |
| XR | XR Interaction Toolkit + OpenXR | Legacy VR/AR SDKs |
| Package Manager | UPM (Unity Package Manager) | Asset Store for packages |
| AI/ML | Unity Sentis | Barracuda (deprecated) |

### Unity Manual Top-Level Sections (docs.unity3d.com/6000.3)

These map to the content domains the skill needs to cover:

1. Unity AI
2. Animation
3. Audio
4. Unity Building Blocks
5. 2D Game Development
6. Lighting
7. Multiplayer
8. Package Management
9. Physics
10. Platform Development
11. Rendering
12. Scripting
13. UI
14. Unity Services
15. Visual Effects
16. XR

**Confidence: HIGH** -- Directly from official Unity documentation.

---

## Existing Art: What Already Exists

### Nice-Wolf-Studio/unity-claude-skills (Most Relevant)

- **35 skills**, 95 files, 44,500+ lines covering entire Unity 6.3 documentation
- Uses progressive disclosure: SKILL.md + references/ pattern
- Three tiers: Core (foundational), Domain (specific systems), Correctness (anti-patterns)
- Three content formats: standard (concepts+patterns), PATTERN (WHEN/WRONG/RIGHT/GOTCHA), DECISION (tradeoff-based)
- MIT licensed, created March 2026
- **Implication for this project**: A comprehensive Unity skill already exists. Our project's unique value must come from: (a) being sourced specifically from the Chinese tutorial hub content, (b) focusing on get-started/beginner-friendly coverage, or (c) a different organizational approach. The PROJECT.md specifies reading from unity.com/cn/learn/get-started specifically, so our scope is narrower and more focused.

### The1Studio/theone-training-skills

- Production Unity skill focused on VContainer/DI patterns and code quality standards
- More opinionated / studio-specific -- not a general reference
- Shows that focused, standards-enforcing skills have practical value

**Confidence: HIGH** -- Directly verified from GitHub repositories.

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Web reading tool | chrome-devtools-mcp | WebFetch (built-in) | WebFetch cannot handle JS-rendered content, gets 403 from many sites (confirmed: unity.com/cn/learn/get-started returns 403). Chrome DevTools MCP renders the full page in a real browser. |
| Web reading tool | chrome-devtools-mcp | Playwright MCP | Chrome DevTools MCP is the official Google implementation, better maintained, and specifically designed for MCP. Playwright MCP exists but is third-party. |
| Web reading tool | chrome-devtools-mcp | puppeteer MCP | Chrome DevTools MCP uses Puppeteer internally. Using the MCP wrapper gives structured tool access vs raw Puppeteer scripting. |
| Skill format | Multi-skill plugin | Single monolithic SKILL.md | Unity domain is too large for one file. 500-line limit would be grossly exceeded. Progressive disclosure requires splitting into focused skills. |
| Skill format | Multi-skill plugin | CLAUDE.md instructions | CLAUDE.md is for project-specific context, not portable knowledge. Skills are the correct abstraction for reusable domain expertise. |
| Content source | unity.com/cn/learn/get-started | docs.unity3d.com | Project requirement specifies the tutorial hub. Docs can supplement but are not the primary source. |
| Content source | unity.com/cn/learn/get-started | learn.unity.com | Same reasoning. The CN tutorial hub is specified. learn.unity.com can be used for gaps. |
| Unity version | 6.3 LTS | 6.0 LTS | 6.3 is newer, supported longer (Dec 2027 vs Oct 2026), and represents the latest API surface. |

---

## What NOT to Use

| Anti-Pattern | Why Avoid |
|--------------|-----------|
| WebFetch for Unity tutorial reading | Returns 403 errors on unity.com. Cannot render JS-dependent content. |
| Single SKILL.md for all Unity content | Violates the 500-line / 5000-token recommendation. Context bloat reduces Claude's effectiveness. |
| Scraping without rate limiting | May trigger CDN protections on Unity's site. Add deliberate pacing between page loads. |
| Hardcoded Unity API details without version pins | Unity APIs change between versions. Always specify Unity 6.3 / 6000.3 context. |
| Copying raw tutorial text verbatim | The skill should synthesize and restructure content for Claude's use, not reproduce tutorials. Copyright concerns also apply. |
| Training data assumptions about Unity APIs | Unity 6 changed many APIs (Build Profiles, Awaitable, Render Graph). Always verify against 6.3 docs, not training knowledge. |

---

## Installation / Setup

### Phase 0: Environment Setup

```bash
# 1. Ensure Node.js v20.19+ is installed
node --version  # Should be v20.19+

# 2. Ensure Chrome is installed (current stable)
# macOS: /Applications/Google Chrome.app should exist

# 3. Register chrome-devtools-mcp with Claude Code
claude mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest

# 4. Verify MCP registration
claude mcp list  # Should show chrome-devtools

# 5. Initialize skill project structure
mkdir -p skills/unity-foundations/references
mkdir -p skills/unity-scripting/references
mkdir -p skills/unity-cli/references
# ... additional skill directories as needed
```

### Skill Validation

```bash
# If using the agentskills reference validator
npx skills-ref validate ./skills/unity-foundations
```

---

## Content Strategy for Skill Files

### What Makes a Good Unity Skill (Learned from Existing Art)

1. **Focused scope**: One domain per skill (physics, scripting, UI -- not "all of Unity")
2. **Pattern-based content**: WHEN/WRONG/RIGHT format catches mistakes before they compile
3. **Code examples**: Concrete C# snippets, not abstract descriptions
4. **Anti-patterns**: "Don't do X" is as valuable as "Do Y"
5. **Cross-references**: Link related skills so Claude can follow dependency chains
6. **Version-aware**: Explicitly state Unity 6.3 / URP / New Input System context
7. **Progressive disclosure**: SKILL.md has the essentials; references/ has the deep cuts

### Content Extraction Approach

For each Unity tutorial page:
1. Navigate to page via chrome-devtools-mcp
2. Capture full DOM content via `take_snapshot`
3. Extract: concepts taught, code patterns shown, best practices mentioned, common mistakes warned about
4. Synthesize into skill format (not copy -- restructure for Claude's use)
5. Cross-reference with official docs (docs.unity3d.com/6000.3/) for accuracy
6. Assign to appropriate skill domain

### Chinese Content Handling

The source is unity.com/cn/learn/get-started (Chinese-localized). Plan for:
- Content will be in Chinese -- synthesis into English skill files
- Some tutorials may be localized versions of English originals
- Technical terms (API names, class names) remain in English regardless of locale
- UI labels and workflow descriptions may differ slightly from English docs

---

## Sources

### Official / Authoritative (HIGH confidence)
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) -- Skill format, frontmatter, directory structure
- [Agent Skills Specification](https://agentskills.io/specification) -- Open standard for SKILL.md format
- [Chrome DevTools MCP Repository](https://github.com/ChromeDevTools/chrome-devtools-mcp) -- Tool capabilities, installation, configuration
- [Unity 6 Releases & Support](https://unity.com/releases/unity-6/support) -- Version timeline, LTS support dates
- [Unity 6.3 User Manual](https://docs.unity3d.com/6000.3/Documentation/Manual/UnityManual.html) -- Official documentation structure
- [Unity 6.3 LTS Release Announcement](https://unity.com/blog/unity-6-3-lts-is-now-available) -- Feature overview

### Community / Reference Implementations (MEDIUM confidence)
- [Nice-Wolf-Studio/unity-claude-skills](https://github.com/Nice-Wolf-Studio/unity-claude-skills) -- 35-skill Unity plugin, architecture reference
- [The1Studio/theone-training-skills](https://github.com/The1Studio/theone-training-skills) -- Production Unity skill with code quality focus
- [Chrome DevTools MCP Blog](https://developer.chrome.com/blog/chrome-devtools-mcp) -- Official Chrome team explanation

### Search-Only (LOW confidence -- verify before relying)
- Unity's 2026 roadmap mentions CoreCLR migration and quarterly release cadence
- Chrome DevTools MCP community reports 40% debugging time reduction

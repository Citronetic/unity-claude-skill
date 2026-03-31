# Deprecated Patterns Reference

Generated from Unity 6.x upgrade guides, PITFALLS.md research, and REQUIREMENTS.md out-of-scope table.

Use this reference during synthesis (Phase 3) and skill writing (Phases 5-8) to steer away from deprecated patterns and toward current Unity 6 equivalents.

## API Deprecations (Unity 6.x)

| Deprecated | Replacement | Since | Topic |
|-----------|-------------|-------|-------|
| `ExecuteDefaultAction` | `HandleEventBubbleUp` | Unity 6.0 | ui-toolkit |
| `ExecuteDefaultActionAtTarget` | `HandleEventBubbleUp` | Unity 6.0 | ui-toolkit |
| `PreventDefault` | `StopPropagation` | Unity 6.0 | ui-toolkit |
| `AtTarget` dispatching phase | Removed; use TrickleDown/BubbleUp | Unity 6.0 | ui-toolkit |
| `VisualElement.transform` | `VisualElement.style.translate/rotate/scale` | Unity 6.2 | ui-toolkit |
| `UxmlTraits` / `UxmlFactory` | `UxmlElement` + `UxmlAttribute` attributes | Unity 6.0 | ui-toolkit |
| `SetupRenderPasses` (URP) | `RecordRenderGraph` | Unity 6.2 (URP) | rendering-3d |
| `GraphicsFormat.DepthAuto` | `GraphicsFormat.None` (depth-only) | Unity 6.0 | rendering-3d |
| `GraphicsFormat.ShadowAuto` | `GraphicsFormat.None` + `ShadowSamplingMode.CompareDepths` | Unity 6.0 | rendering-3d |
| `GraphicsFormat.VideoAuto` | Removed (obsolete) | Unity 6.0 | rendering-3d |
| `Object.FindObjectsOfType` | `Object.FindObjectsByType` | Unity 6.0 | scripting-fundamentals |
| `Object.FindObjectOfType` | `Object.FindFirstObjectByType` / `Object.FindAnyObjectByType` | Unity 6.0 | scripting-fundamentals |
| `CustomEditorForRenderPipelineAttribute` | `CustomEditor` + `SupportedOnRenderPipelineAttribute` | Unity 6.0 | rendering-3d |
| `VolumeComponentMenuForRenderPipelineAttribute` | `VolumeComponentMenu` + `SupportedOnRenderPipelineAttribute` | Unity 6.0 | rendering-3d |
| `FetchFirstCompatibleTypeUsingScriptableRenderPipelineExtension` | `GetDerivedTypesSupportedOnCurrentPipeline` | Unity 6.0 | rendering-3d |
| `LightingSettings.filteringGaussRadiusAO` (int) | `LightingSettings.filteringGaussianRadiusAO` (float) | Unity 6.0 | rendering-3d |
| `LightingSettings.filteringGaussRadiusDirect` (int) | `LightingSettings.filteringGaussianRadiusDirect` (float) | Unity 6.0 | rendering-3d |
| `LightingSettings.filteringGaussRadiusIndirect` (int) | `LightingSettings.filteringGaussianRadiusIndirect` (float) | Unity 6.0 | rendering-3d |
| Enlighten Baked GI | Progressive Lightmapper (GPU or CPU) | Unity 6.0 | rendering-3d |
| Auto Generate lighting | Manual `Lightmapping.Bake` / `BakeAsync` | Unity 6.0 | rendering-3d |
| `Rigidbody.SetDensity` | `Rigidbody.mass` | Unity 6.1 | physics |
| `_FORWARD_PLUS` shader keyword | `_CLUSTER_LIGHT_LOOP` | Unity 6.1 | rendering-3d |
| PVRTC texture format | ASTC or ETC | Unity 6.1 | mobile-platform |
| `UPM_CACHE_PATH` env var | `UPM_CACHE_ROOT` (parent directory) | Unity 6.0 | asset-pipeline |

## Anti-Patterns (Do Not Use)

These are patterns explicitly excluded from the skill. When synthesizing content, always steer toward the replacement.

| DON'T | Why Not | DO (Use Instead) | Topic |
|-------|---------|-------------------|-------|
| `OnGUI()` for game UI | Legacy immediate-mode GUI, poor performance | UI Toolkit (`UIDocument` + UXML/USS) | ui-toolkit |
| `Resources.Load()` | Not scalable, no async, loads everything at startup | Addressables (`Addressables.LoadAssetAsync`) | asset-pipeline |
| Old Input Manager (`Input.GetKey`, `Input.GetAxis`) | Legacy system, limited extensibility | New Input System (`InputAction`, `PlayerInput`) | input-system |
| `WWW` class | Deprecated since Unity 2018 | `UnityWebRequest` | scripting-patterns |
| `PlayerPrefs` for save data | Not for complex data, no encryption, platform limits | JSON serialization (`JsonUtility` or Newtonsoft) | scripting-patterns |
| UNet networking | Deprecated, removed | Netcode for GameObjects (v2 scope) | skip |
| UnityScript / Boo | Removed from Unity entirely | C# only | skip |
| Legacy Animation system | Replaced by Mecanim | Animator + AnimatorController | animation |
| Built-in Render Pipeline (for new projects) | Legacy pipeline, fewer features | Universal Render Pipeline (URP) | rendering-3d |
| Unity 4.x/5.x patterns | Actively harmful, compile errors | Unity 6.x APIs | skip |

## Version-Specific Guidance

### Unity 6.0 Key Changes
- UI Toolkit event system reorganized: `ExecuteDefaultAction` -> `HandleEventBubbleUp`
- Graphics formats `DepthAuto`, `ShadowAuto`, `VideoAuto` now produce compile errors
- `FindObjectsOfType` -> `FindObjectsByType` (with sort mode parameter)
- UxmlElement/UxmlAttribute replaces UxmlTraits/UxmlFactory for custom controls
- Enlighten Baked GI removed; use Progressive Lightmapper
- Auto-generated lighting removed; must call `Lightmapping.Bake` explicitly

### Unity 6.1 Key Changes
- `Rigidbody.SetDensity` deprecated; use `Rigidbody.mass`
- `_FORWARD_PLUS` shader keyword replaced by `_CLUSTER_LIGHT_LOOP`
- PVRTC texture compression deprecated; use ASTC or ETC
- Window menu reorganized (Package Manager, Asset Store in submenus)

### Unity 6.2 Key Changes (from PITFALLS.md)
- `VisualElement.transform` deprecated; use `style.translate/rotate/scale`
- `SetupRenderPasses` deprecated in URP; use `RecordRenderGraph`

## Usage During Synthesis

When writing synthesis files for any topic:

1. **Check this table** before documenting any API usage pattern
2. If a deprecated API appears in extracted content, replace it with the DO alternative
3. Include explicit "DON'T use X (deprecated Unity 6), DO use Y" guidance
4. Add Unity version annotation: `(Unity 6+)` or `(deprecated in Unity 6.0)`
5. Cross-reference against `synthesis/api-index.json` to verify replacement APIs exist

---

*Generated: synthesis phase 03-01*
*Sources: upgradeguideunity6.md, upgradeguideunity61.md, PITFALLS.md, REQUIREMENTS.md*

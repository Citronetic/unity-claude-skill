This version of Unity is unsupported.

Shadow cascades

Configure shadow cascades

# Introduction to shadow cascades

Shadow cascades let you improve the visual fidelity of shadows without increasing the shadow map resolution.

For example, the following illustration shows shadow rendering with different numbers of shadow cascades. The shadow resolution is 2048 in all cases.

[Image: Shadow rendering with different cascade numbers. A: 1 cascade, B: 2 cascades, C: 3 cascades, D: 4 cascades]
Shadow rendering with different cascade numbers. A: 1 (no cascades), B: 2 cascades, C: 3 cascades, D: 4 cascades.

Shadow cascades only work with directional lights.

From a technical perspective, shadow cascades mitigate a problem called [perspective aliasing](shadow-cascades-implementation-details.html#perspective-aliasing), where real-time shadows from [directional lights](Lighting.html) appear pixelated when they are near the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera).

## Additional resources

- [Configure shadow cascades](shadow-cascades-use.html)

- [Performance impact of shadow cascades](shadow-cascades-performance.html)

- [Technical implementation details](shadow-cascades-implementation-details.html)

Shadow cascades

Configure shadow cascades

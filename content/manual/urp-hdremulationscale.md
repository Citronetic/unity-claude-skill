This version of Unity is unsupported.

Add normal map and mask textures to a sprite in URP

Create shadows with Shadow Caster 2D in URP

# HDR emulation scale

All Lights in the 2D lighting system support **HDR**high dynamic range
See in [Glossary](../Glossary.html#HDR). While a typical RGBA32 color channel has the range of zero to one, a HDR channel can go beyond one.

|  |  |
| --- | --- |
| Light RGB(1,1,1) | HDR Light RGB(1,1,1) + Light RGB(2,2,2) |

However, not all platforms natively support HDR textures. HDR Emulation Scale allows those platforms to use HDR lighting by compressing the number of expressible colors in exchange for extra intensity range. Scale describes this extra intensity range. Increasing this value too high may cause undesirable banding to occur.

Light Intensity scale examples:

|  |  |
| --- | --- |
| HDR Reference | Light Intensity Scale 1 (No HDR) |
|  |  |
| Light Intensity Scale 4 | Light Intensity Scale 12 |

When choosing a value for HDR Emulation Scale, the developer should choose the combined maximum brightness for the lights in the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) as the value.

Add normal map and mask textures to a sprite in URP

Create shadows with Shadow Caster 2D in URP

This version of Unity is unsupported.

Enable GPU occlusion culling in URP

Optimizing draw calls in URP

# Adjust settings to improve performance in URP

If the performance of your Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) project seems slow, you can adjust settings to increase performance.

Based on your [analysis](analyze-your-project.html), you can adjust the following settings in the [Universal Render Pipeline (URP) Asset](universalrp-asset.html) or the [Universal Renderer asset](urp-universal-renderer.html) to improve the performance of your project.

Depending on your project or the platforms you target, some settings might not have a significant effect. There might also be other settings that have an effect on performance in your project.

| Setting | Where the setting is | What to do for better performance |
| --- | --- | --- |
| Accurate G-buffer normals | Universal Renderer > Rendering | Disable if you use the Deferred rendering path |
| Additional Lights > Cast Shadows | URP Asset > Lighting | Disable |
| Additional Lights > Cookie Atlas Format | URP Asset > Lighting | Set to Color Low |
| Additional Lights > Cookie Atlas Resolution | URP Asset > Lighting | Set to the lowest you can accept |
| Additional Lights > Per Object Limit | URP Asset > Lighting | Set to the lowest you can accept. This setting has no effect if you use the Deferred or Forward+ rendering paths. |
| Additional Lights > Shadow Atlas Resolution | URP Asset > Lighting | Set to the lowest you can accept |
| Additional Lights > Shadow Resolution | URP Asset > Lighting | Set to the lowest you can accept |
| Cascade Count | URP Asset > Shadows | Set to the lowest you can accept |
| Conservative Enclosing Sphere | URP Asset > Shadows | Enable |
| Technique | Decal Renderer Feature | Set to Screen Space, and set Normal Blend to Low or Medium |
| Fast sRGB/Linear conversion | URP Asset > Post Processing | Enable |
| Grading Mode | URP Asset > Post Processing | Set to Low Dynamic Range |
| LOD Cross Fade Dither | URP Asset > Quality | Set to Bayer Matrix |
| LUT size | URP Asset > Post Processing | Set to the lowest you can accept |
| Main Light > Cast Shadows | URP Asset > Lighting | Disable |
| Max Distance | URP Asset > Shadows | Reduce |
| Opaque Downsampling | URP Asset > Rendering | If Opaque Texture is enabled in the URP Asset, set to 4x Bilinear |
| Render Scale | URP Asset > Quality | Set to below 1.0 |
| Soft Shadows | URP Asset > Shadows | Disable, or set to Low |
| Upscaling Filter | URP Asset > Quality | Set to Bilinear or Nearest-Neighbor |

Refer to the following for more information on the settings:

- [Deferred Rendering Path in URP](rendering/deferred-rendering-path-landing.html)

- [Forward rendering paths in URP](rendering/forward-rendering-paths.html)

- [Decal Renderer Feature](renderer-feature-decal.html)

- [Universal Render Pipeline Asset](universalrp-asset.html)

- [Universal Renderer](urp-universal-renderer.html)

## Additional resources

- [Understand performance in URP](understand-performance.html)

- [Configure for better performance](configure-for-better-performance.html)

- [Graphics performance and profiling](https://docs.unity3d.com/Manual/graphics-performance-profiling.html)

- [Best practices for profiling game performance](https://unity.com/how-to/best-practices-for-profiling-game-performance?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936126570)

- [Tools for profiling and debugging](https://unity.com/how-to/profiling-and-debugging-tools?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936126570)

- [Native CPU profiling: Tips to optimize your game performance](https://resources.unity.com/games/native-cpu-profiling-tips-to-optimize-your-game-performance?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936126570)

Enable GPU occlusion culling in URP

Optimizing draw calls in URP

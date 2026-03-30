This version of Unity is unsupported.

Enable or disable Dynamic Resolution for render targets

Occlusion culling

# Excluding hidden objects with occlusion culling

Resources about preventing Unity doing rendering calculations for hidden **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject).

**Note:** If your project uses the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP) or the High Definition Render Pipeline (HDRP), you can instead [Enable GPU occlusion culling in URP](urp/gpu-culling.html) or [Enable GPU occlusion culling in HDRP](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.4/manual/gpu-culling.html).

| Page | Description |
| --- | --- |
| Occlusion cullingA process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. More infoSee in Glossary | Understand how occlusion culling checks for hidden objects, and when to use it. |
| Set up a scene for occlusion culling | Set up a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary for occlusion culling, bake occlusion culling data, and check the results. |
| Set up multiple scenes for occlusion culling | Prepare occlusion culling data differently if you load multiple scenes at a time. |
| Cull moving GameObjects | Enable or disable Dynamic Occlusion. |
| Create high-precision occlusion areas | Use the Occlusion Area component to define an area where Unity calculates culling more precisely. |
| Control occlusion in areas with Occlusion Portals | Turn occlusion on and off through an object, for example a door that opens and closes. |
| Occlusion Culling window reference | Explore the properties and settings in the Occlusion Culling window to customize how culling works. |
| Configure culling with the CullingGroup API | Integrate your own systems into Unity’s culling and level of detailThe Level Of Detail (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. More infoSee in Glossary (LOD) pipelines. |
| Troubleshooting occlusion culling | Solve common problems when using occlusion culling. |

## Additional resources

- [Graphics performance and profiling](graphics-performance-profiling.html)

- [Enable GPU occlusion culling in URP](urp/gpu-culling.html)

Enable or disable Dynamic Resolution for render targets

Occlusion culling

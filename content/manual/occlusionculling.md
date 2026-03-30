This version of Unity is unsupported.

Excluding hidden objects with occlusion culling

Set up a scene for occlusion culling

# Occlusion culling

Occlusion culling is a process which prevents Unity from performing rendering calculations for **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) that are completely hidden from view (occluded) by other GameObjects.

Every frame, **Cameras**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) perform culling operations that examine the Renderers in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) and exclude (cull) those that do not need to be drawn. By default, Cameras perform [frustum culling](UnderstandingFrustum.html), which excludes all Renderers that do not fall within the Camera’s view frustum. However, frustum culling does not check whether a Renderer is occluded by other GameObjects, and so Unity can still waste CPU and GPU time on rendering operations for Renderers that are not visible in the final frame. **Occlusion culling** stops Unity from performing these wasted operations.

[Image: Regular frustum culling renders all Renderers within the Cameras view.]
Regular frustum culling renders all Renderers within the Camera’s view.

[Image: Occlusion culling removes Renderers that are entirely obscured by nearer Renderers.]
Occlusion culling removes Renderers that are entirely obscured by nearer Renderers.

## When to use occlusion culling

To determine whether occlusion culling is likely to improve the runtime performance of your Project, consider the following:

- Preventing wasted rendering operations can save on both CPU and GPU time. Unity’s built-in occlusion culling performs runtime calculations on the CPU, which can offset the CPU time that it saves. Occlusion culling is therefore most likely to result in performance improvements when a Project is GPU-bound due to overdraw.

- Unity loads occlusion culling data into memory at runtime. You must ensure that you have sufficient memory to load this data.

- Occlusion culling works best in Scenes where small, well-defined areas are clearly separated from one another by solid GameObjects. A common example is rooms connected by corridors.

- You can use occlusion culling to occlude Dynamic GameObjects, but Dynamic GameObjects cannot occlude other GameObjects. If your Project generates Scene geometry at runtime, then Unity’s built-in occlusion culling is not suitable for your Project.

## How occlusion culling works

Occlusion culling generates data about your Scene in the Unity Editor, and then uses that data at runtime to determine what a Camera can see. The process of generating data is known as baking.

**Note:** If your project uses the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP) or the High Definition Render Pipeline (HDRP), you can instead [Enable GPU occlusion culling in URP](urp/gpu-culling.html) or [Enable GPU occlusion culling in HDRP](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.4/manual/gpu-culling.html).

When you bake occlusion culling data, Unity divides the Scene into cells and generates data that describes the geometry within cells, and the visibility between adjacent cells. Unity then merges cells where possible, to reduce the size of the generated data. To configure the baking process, you can change parameters in the [Occlusion Culling window](occlusion-culling-window.html), and use [Occlusion Areas](class-OcclusionArea.html) in your Scene.

At runtime, Unity loads this baked data into memory, and for each Camera that has its Occlusion Culling property enabled, it performs queries against the data to determine what that Camera can see. Note that when occlusion culling is enabled, Cameras perform both frustum culling and occlusion culling.

Excluding hidden objects with occlusion culling

Set up a scene for occlusion culling

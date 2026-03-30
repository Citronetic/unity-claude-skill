This version of Unity is unsupported.

Set up multiple scenes for occlusion culling

Create high-precision occlusion areas

# Cull moving GameObjects

GameObjects can be [static](StaticObjects.html), or dynamic (not static). Static **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) and dynamic GameObjects behave differently in Unity’s **occlusion culling**A process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. [More info](OcclusionCulling.html)
See in [Glossary](Glossary.html#Occlusionculling) system:

- Unity can bake static GameObjects into the occlusion culling data as a Static Occluder and/or a Static Occludee.

- Unity cannot bake dynamic GameObjects into the occlusion culling data. A dynamic GameObject can be an occludee at runtime, but it cannot be an occluder.

To determine whether a dynamic GameObject acts as a occludee, you can set the Dynamic Occlusion property on any type of Renderer component. When Dynamic Occlusion is enabled, Unity culls the Renderer when a Static Occluder blocks it from a **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera)’s view. When Dynamic Occlusion is disabled, Unity does not cull the Renderer when a Static Occluder blocks it from a Camera’s view.

Dynamic Occlusion is enabled by default. You might want to disable Dynamic Occlusion to achieve specific effects, such as drawing an outline around a character who is behind a wall.

If you are certain that Unity should never apply occlusion culling to a particular GameObject, you can disable Dynamic Occlusion to save on runtime calculations and reduce CPU usage. The per-GameObject impact of these calculations is very small, but at sufficient scale this might benefit performance.

With the Umbra occlusion system, the [GPU Resident Drawer](urp/gpu-resident-drawer.html) treats all objects as if dynamic occlusion were enabled while also providing its own GPU-based occlusion culling mechanism.

Set up multiple scenes for occlusion culling

Create high-precision occlusion areas

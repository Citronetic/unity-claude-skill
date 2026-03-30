This version of Unity is unsupported.

Use sorting groups

Various image sizes without multiple assets

# Sorting group reference

Unity uses a **Sorting Group**’s [Sorting Layer](https://docs.unity3d.com/Manual/class-TagManager.html#SortingLayers) and **Order in Layer** values to determine its priority in the rendering queue among other Sorting Groups and **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene).

| Property | Function |
| --- | --- |
| Sorting Layer | Select or add a Sorting Layer from this drop-down menu to determine the Sorting Group’s position in the render queue. Unity determines the Sorting Layer order by its place in the Sorting Layer settings; it renders Sorting Layers in the order they appear in the list. See Tags and Layers for information on setting up Sorting Layers. |
| Order in Layer | Set the render order of this Sorting Group within its Sorting Layer. Unity queues Renderers with lower values first in the render queue, so they appear before Renderers with higher values. |
| Sort At Root | Enable this option to ignore all parent Sorting Groups if this Sorting Group is nested. This allows this Sorting Group to be sorted against other Renderers and Sorting Groups at the root level. |

See [2D Sorting](../../2d-renderer-sorting.html) for more information on using Sorting Layers to sort **sprites**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../sprite/sprite-landing.html)
See in [Glossary](../../Glossary.html#Sprite), and Unity’s Renderer sorting criteria.

Use sorting groups

Various image sizes without multiple assets

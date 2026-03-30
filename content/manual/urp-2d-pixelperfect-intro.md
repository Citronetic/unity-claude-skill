This version of Unity is unsupported.

Precise pixel scaling and rotation via the Pixel Perfect Camera in URP

Prepare your sprites for the 2D Pixel Perfect Camera in URP

# Introduction to the Pixel Perfect Camera in URP

Understand how to use the **Pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](../ShadowPerformance.html)
See in [Glossary](../Glossary.html#pixel) Perfect **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) to keep your pixel art crisp and clear at different resolutions, and stable in motion.

The **2D Pixel Perfect** package contains the **Pixel Perfect Camera** component. The component calculates what Unity needs to scale the **viewport**The user’s visible area of an app on their screen.
See in [Glossary](../Glossary.html#Viewport) with resolution changes to maintain the pixel perfect visual style, so that you don’t need to calculate manually. You can use the component settings to adjust the definition of the rendered pixel art within the camera viewport, and preview any changes made in the Game view.

[Image: Pixel Perfect Camera Gizmo]
Pixel Perfect Camera Gizmo

To begin using the component, attach the **Pixel Perfect Camera** component to the main Camera **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../class-GameObject.html)
See in [Glossary](../Glossary.html#GameObject) in the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene). The component is represented by two green bounding boxes centered on the **Camera** **Gizmo**A graphic overlay associated with a GameObject in a Scene, and displayed in the Scene View. Built-in scene tools such as the move tool are Gizmos, and you can create custom Gizmos using textures or scripting. Some Gizmos are only drawn when the GameObject is selected, while other Gizmos are drawn by the Editor regardless of which GameObjects are selected. [More info](../GizmosMenu.html#GizmosIcons)
See in [Glossary](../Glossary.html#Gizmo) in the **Scene view**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](../UsingTheSceneView.html)
See in [Glossary](../Glossary.html#SceneView). The solid green bounding box shows the visible area in Game view, while the dotted bounding box shows the [Reference Resolution](2d-pixelperfect-ref.html#reference-resolution).

Precise pixel scaling and rotation via the Pixel Perfect Camera in URP

Prepare your sprites for the 2D Pixel Perfect Camera in URP

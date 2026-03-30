This version of Unity is unsupported.

Light limits in URP

Improve the visual fidelity of lightmaps

# View and control a light from its perspective in URP

The Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) includes the Light Placement Tool which you can use to view a **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) from a light source’s perspective. You can use this tool to move and modify any type of light source.

This tool does not affect any Cameras in your Scene. The **Scene View**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](../UsingTheSceneView.html)
See in [Glossary](../Glossary.html#SceneView) **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) returns to its original position when you disable the Light Placement Tool.

[Image: Light Placement Tool interface in URP showing a scene from a light sources perspective.]
Light Placement Tool interface in URP showing a scene from a light source’s perspective.

## Use the Light Placement Tool

To use the Light Placement Tool :
1. Select a Light **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../class-GameObject.html)
See in [Glossary](../Glossary.html#GameObject) in the **inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../UsingTheInspector.html)
See in [Glossary](../Glossary.html#Inspector) window.
2. In the Scene View **Toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](../Toolbar.html)
See in [Glossary](../Glossary.html#Toolbar), select the Light Placement Tool icon. [Image: Light Placement Tool icon]. The Scene View Camera automatically changes position to look through the selected Light.
4. Use the Camera controls (pan, orbit, zoom) to adjust the Light’s position.
5. Use the Light’s **gizmos**A graphic overlay associated with a GameObject in a Scene, and displayed in the Scene View. Built-in scene tools such as the move tool are Gizmos, and you can create custom Gizmos using textures or scripting. Some Gizmos are only drawn when the GameObject is selected, while other Gizmos are drawn by the Editor regardless of which GameObjects are selected. [More info](../GizmosMenu.html#GizmosIcons)
See in [Glossary](../Glossary.html#Gizmo) to adjust its properties.

To exit the Light Placement Tool use one of the following methods:
* Press “**Escape**”.
* Select the Light Placement Tool icon.
* Select another GameObject.

The Scene View Camera automatically returns to its previous position.

## Additional resources

- [Light components](../lighting-light-components.html)

Light limits in URP

Improve the visual fidelity of lightmaps

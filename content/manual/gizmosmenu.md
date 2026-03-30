This version of Unity is unsupported.

Gizmos and handles

Programming with gizmos and handles

# Gizmos menu

The [Scene view](UsingTheSceneView.html)An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](UsingTheSceneView.html)
See in [Glossary](Glossary.html#SceneView) and the [Game view](GameView.html) both have a **Gizmos**A graphic overlay associated with a GameObject in a Scene, and displayed in the Scene View. Built-in scene tools such as the move tool are Gizmos, and you can create custom Gizmos using textures or scripting. Some Gizmos are only drawn when the GameObject is selected, while other Gizmos are drawn by the Editor regardless of which GameObjects are selected. [More info](GizmosMenu.html#GizmosIcons)
See in [Glossary](Glossary.html#Gizmo) menu. Click the **Gizmos** button in the **toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](Toolbar.html)
See in [Glossary](Glossary.html#Toolbar) of the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) view or the Game view to access the **Gizmos** menu.

[Image: The Gizmos button in the Scene view]
The **Gizmos** button in the Scene view

[Image: The Gizmos button in the Game view]
The **Gizmos** button in the Game view

## General options

| Property | Function |
| --- | --- |
| 3D Icons | The 3D Icons checkbox controls whether component icons (such as those for Lights and Cameras) are drawn by the Editor in 3D in the Scene view.When the 3D Icons checkbox is ticked, component icons are scaled by the Editor according to their distance from the Camera, and obscured by GameObjects in the Scene. Use the slider to control their apparent overall size. When the 3D Icons checkbox is not ticked, component icons are drawn at a fixed size, and are always drawn on top of any GameObjects in the Scene view.See Gizmos and Icons, below, for images and further information. |
| Fade Gizmos | Fade out and stop rendering gizmos that are small on screen. |
| Selection Outline | Check Selection Outline to display selected GameObjects with a colored outline, and their children with a different colored outline. By default, Unity highlights the selected GameObject in orange, and child GameObjects in blue.NOTE: This option is only available in the Scene view Gizmos menu; you cannot enable it in the Game view Gizmos menu. See Selection Outline and Selection Wire, below, for images and further information. |
| Selection Wire | Check Selection Wire to show the selected GameObjects with their wireframe Mesh visible. To change the colour of the Selection Wire, go to Edit > Preferences (macOS: Unity > Settings) in the main menu, select Colors, and alter the Selected Wireframe setting.This option is only available in the Scene view Gizmos menu; you cannot enable it in the Game view Gizmos menu.See Selection Outline and Selection Wire, below, for images and further information. |
| Display Weights | When enabled, Unity draws a line from the Light Probe used for the active selection to the positions on the tetrahedra used for interpolation. This is a way to debug probe interpolation and placement problems. |
| Display Occlusion | When enabled, Unity displays occlusion data for Light Probes if the Lighting Mode is set to ShadowmaskA shadowmask texture uses the same UV layout and resolution as its corresponding lightmap texture. More infoSee in Glossary. |
| Highlight Invalid Cells | Enable to highlight tetrahedrons that Unity can’t use for indirect lighting. For example, if the Light Probes are very close together. |
| Recently Changed | Controls the visibility of the icons and gizmos for components and scripts that you modified recently.This section appears the first time you change one or more items, and updates after subsequent changes.For more information, refer to Built-in components, scripts, and recently changed items, below. |
| Scripts | Controls the visibility of the icons and gizmos for scripts in the Scene.This section appears only when your Scene uses scripts that meet specific criteria.For more information, refer to Built-in components, scripts, and recently changed items below. |
| Built-in Components | Controls the visibility of the icons and gizmos for all component types that have an icon or gizmo.For more information, refer to Built-in components, scripts, and recently changed items below. |

## Light Probe Visualization options

Select which [Light Probes](LightProbes.html)Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe) to display in the Scene view. The default value is **Only Probes Used By Selection**.

| Property | Function |
| --- | --- |
| Only Probes Used By Selection | Display only Light Probes that affect the current selection. |
| All Probes No Cells | Display all Light Probes. |
| All Probes With Cells | Display all Light Probes, and the tetrahedrons that Unity uses for interpolation of Light Probe data. |
| None | Display no Light Probes. |

## Gizmos and Icons

### Gizmos

**Gizmos** are graphics associated with GameObjects in the Scene. Some Gizmos are only drawn when the **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) is selected, while other Gizmos are drawn by the Editor regardless of which GameObjects are selected. They are usually wireframes, drawn with code rather than bitmap graphics, and can be interactive. The ****Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera)** Gizmo and **Light direction** Gizmo (shown below) are both examples of built-in Gizmos; you can also create your own Gizmos using script. See documentation on [Understanding Frustum](UnderstandingFrustum.html) for more information about the Camera.

Some Gizmos are passive graphical overlays, shown for reference (such as the **Light direction** Gizmo, which shows the direction of the light). Other Gizmos are interactive, such as the [AudioSource](class-AudioSource.html) **spherical range** Gizmo, which you can click and drag to adjust the maximum range of the AudioSource.

The **Move**, **Scale**, **Rotate** and **Transform** tools are also interactive Gizmos. See documentation on [Positioning GameObjects](PositioningGameObjects.html) to learn more about these tools.

[Image: The Camera Gizmo and a Light Gizmo. These Gizmos are only visible when they are selected.]
The Camera Gizmo and a Light Gizmo. These Gizmos are only visible when they are selected.

See the Script Reference page for the [OnDrawGizmos](../ScriptReference/MonoBehaviour.OnDrawGizmos.html) function for further information about implementing custom Gizmos in your **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts).

### Icons

You can display **icons** in the Game view or Scene view as flat, billboard-style overlays. These help indicate a GameObject’s position while you work on your game. The **Camera** icon and **Light** icon are examples of built-in icons. You can also assign custom icons to GameObjects or individual scripts. For more information, refer to [Assigning Icons](InspectorAssignIcons.html).

[Image: The built-in icons for a Camera and a Light]
The built-in icons for a Camera and a Light

[Image: Left: icons in 3D mode. Right: icons in 2D mode.]
**Left**: icons in 3D mode. **Right**: icons in 2D mode.

## Selection Outline and Selection Wire

### Selection Outline

When **Selection Outline** is enabled, an outline appears around selected GameObjects and their child GameObjects. By default, Unity outlines selected GameObjects in orange, and child GameObjects in blue. You can change these colors in the Unity preferences (see [Selection Colors](#SelectionColors), below).

[Image: Selecting a GameObject (the far left box) outlines it in orange, and outlines its child GameObjects (the middle and right boxes) in blue.]
Selecting a GameObject (the far left box) outlines it in orange, and outlines its child GameObjects (the middle and right boxes) in blue.

When you select a GameObject, Unity outlines all of its child GameObjects (and their child GameObjects, and so on), but does not outline parent GameObjects (or their parent GameObjects, and so on).

[Image: Selecting the middle box highlights it in orange, and highlights its child GameObject (the far right box) in blue, but does not highlight its parent GameObject (the far left box).]
Selecting the middle box highlights it in orange, and highlights its child GameObject (the far right box) in blue, but does not highlight its parent GameObject (the far left box).

If selected GameObjects extend beyond the edges of the Scene view, the selection outline runs along the edge of the window:

[Image: The selection outline along the edge of the window, when the GameObject you selected extends beyond the Scene view]
The selection outline along the edge of the window, when the GameObject you selected extends beyond the Scene view

### Selection Wire

When **Selection Wire** is enabled, then when you select a GameObject in the Scene view or Hierarchy window, the wireframe **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) for that GameObject is made visible in the Scene view:

[Image: The wireframe visible on a mesh]
The wireframe visible on a mesh

### Selection colors

You can set custom colors for selection wireframes.

1. Go to **Unity** > **Preferences** (macOS) or **Edit** > **Preferences** (Windows) to open the [Preferences](Preferences.html) editor.

2. On the colors tab, change one or more of the following colors:

- **Selected Children Outline**: outline color for selected GameObjects’ children.

- **Selected Outline**: outline color for selected GameObjects.

- **Wireframe Selected**: outline color for selected GameObjects’ wireframes.

## Built-in components, scripts, and recently changed items

Use the list in the **Gizmos** menu to control the visibility of icons and gizmos for various components. The list is divided into sections:

[Image: The Gizmos menu, displaying items with custom icons and some recently modified items]
The Gizmos menu, displaying items with custom icons and some recently modified items

### Recently Changed

The **Recently Changed** section controls the visibility of the icons and gizmos for items that you’ve modified recently. It appears the first time you change one or more items. Unity updates the list after subsequent changes.

### Scripts

The **Scripts** section controls the visibility of the icons and gizmos for scripts that:

- Have an icon assigned to them (see documentation on [Assigning Icons](InspectorAssignIcons.html)).

- Implement the [OnDrawGizmos](../ScriptReference/MonoBehaviour.OnDrawGizmos.html) function.

- Implement the [OnDrawGizmosSelected](../ScriptReference/MonoBehaviour.OnDrawGizmosSelected.html) function.

This section appears when your Scene contains one or more scripts that meet the above criteria.

### Built-in Components

The **Built-in Components** section controls the visibility of the icons and gizmos for all component types that have an icon or gizmo.

Built-in component types that do not have an icon or gizmo shown in the Scene view (for example, Rigidbody) are not listed here.

### Toggling icon visibility

The **icon** column shows or hides the icons for each component type. Full-color icons are displayed in the main Scene view window, faded icons are not.

[Image: The Light icon is faded, indicating that the Editor does not display light icons in the Scene view. The Camera icon is full-color, indicating that the Editor does display camera icons in the Scene view.]
The **Light** icon is faded, indicating that the Editor does not display light icons in the Scene view. The **Camera** icon is full-color, indicating that the Editor does display camera icons in the Scene view.

To toggle an icon’s visibility in the Scene view, click any icon in the **icon** column.

**Note:** If an item in the list has a gizmo but no icon, the **icon** column for that item is empty.

### Changing script icons

Scripts with custom icons show a small drop-down menu arrow in the **icon** column. To change a custom icon, click the arrow to open the [Select Icon](InspectorAssignIcons.html) menu.

[Image: The Select Icon menu for script]
The Select Icon menu for script

### Toggling gizmo visibility

To control whether the Editor draws gizmo graphics for a particular component type (for example, a **Collider’s** wireframe gizmo or a **Camera’s** [view frustum](UnderstandingFrustum.html) gizmo) or script, use the checkboxes in the **Gizmo** column.

- When a checkbox is checked, the Editor draws gizmos for that component type.

- When a checkbox is cleared, the Editor does not draw gizmos for that component type.

**Note:** If an item in the list has an icon but no gizmo, the **Gizmo** column for that item is empty.

To toggle gizmo visibility for an entire section (all **Built-in Components**, all **Scripts**, and so on), use the checkboxes next to the section names.

The **Built-in Components** checkbox toggles gizmo visibility for every type of component listed in that section

When the checkbox is toggled on, gizmo visibility is toggled on for one or more item types in the section.

---

- Selection outline for child GameObjects added in [2018.3](https://docs.unity3d.com/2018.3/Documentation/Manual/30_search.html?q=newin20183) NewIn20183

- Gizmo menu option to toggle Gizmo visibility for all components in a section added in [2019.1](https://docs.unity3d.com/2019.1/Documentation/Manual/30_search.html?q=newin20191) NewIn20191

Gizmos and handles

Programming with gizmos and handles

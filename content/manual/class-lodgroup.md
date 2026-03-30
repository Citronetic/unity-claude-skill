This version of Unity is unsupported.

Make LOD Group transitions smooth

2D images for low level of detail (LOD)

# LOD Group component reference

[Switch to Scripting](../ScriptReference/LODGroup.html)

The **LOD Group** component manages [level of detail](LevelOfDetail.html)The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](LevelOfDetail.html)
See in [Glossary](Glossary.html#levelofdetail) (LOD) for **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject).

[Image: LOD Group inspector]
LOD Group inspector

[Image: A] Controls for [transitioning between LOD levels](lod/lod-transitions-lod-group.html)

[Image: B] [LOD Group selection bar](#LODGroup) for switching between LOD levels and previewing LOD rendering

[Image: C] Information about the [Lod Bias](class-QualitySettings.html#LODBias) Quality setting. This message appears if the **Lod Bias** property is set to anything other than 1.

[Image: D] [Fade Transition Width](lod/lod-transitions-lod-group.html#width) setting for the selected LOD level. This property only appears if you disable the **Animate Cross-fading** property: that is, when you choose to set a transition zone by width instead of time.

[Image: E] **Mesh** [Renderers](#renderers) set for the selected LOD level

In addition there are two buttons at the bottom of the component:

- Click **Recalculate Bounds** to recalculate the **bounding volume**A closed shape representing the edges and faces of a collider or trigger.
See in [Glossary](Glossary.html#Boundingvolume) of all LOD Mesh GameObjects after a new LOD level is added.

- Click **Recalculate **Lightmap**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap) Scale** to update the [Scale in Lightmap](class-MeshRenderer.html#lightmapping) property on all LOD **Mesh Renderers**A mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. [More info](class-MeshRenderer.html)
See in [Glossary](Glossary.html#MeshRenderer), based on the changes you made to the LOD level boundaries.

## LOD Group selection bar

The LOD Group selection bar represents the different LOD levels as colored boxes.

The percentage that appears in each LOD level box represents the threshold at which that level becomes active, based on the ratio of the GameObject’s screen space height to the total screen height. For example, if the threshold for LOD 1 is set to 50%, then LOD 1 becomes active when the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) pulls back far enough that the GameObject’s height fills half of the view.

[Image: LOD Group selection bar]
LOD Group selection bar

[Image: A] The playhead for [the LOD preview](#preview). You can scrub the camera icon back and forth to test the LOD levels and their transitions. At the bottom of the playhead you can see the current percentage.

[Image: B] To select a level, click on the level box. For each LOD level you select, you can [pick the Renderer to use](#renderers) or [customize the transition zone](lod/lod-transitions-lod-group.html#width).

[Image: C] To add and remove LOD levels from the selection bar, right-click the LOD level box and then choose **Insert Before** or **Delete** from the context menu.

[Image: D] Level adjustment control. To change the percentage value for the LOD level, drag the left border of the LOD level box’s boundary.

**Note**: If the [Lod Bias](class-QualitySettings.html#LODBias) property is not set to 1, the Camera position might not match the position where each LOD level actually transitions from the next. In this case, a warning message appears below the selection bar.

[Image: Lod Bias warning]
Lod Bias warning

## Previewing the LOD transitions

The **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) view displays a preview of the transitions between LOD levels when you move the camera icon on the LOD Group selection bar. The camera icon acts like a playhead which you can use to scrub back and forth to control the exact position to preview along the LOD Group selection bar. The preview shows what the Camera will render at each LOD level.

[Image: Control transition previews on the LOD Group selection bar]
Control transition previews on the LOD Group selection bar

The LOD preview playhead shows the exact position as a percentage along the LOD Group selection bar from 100% on the left to 0% on the right. The percentage represents the ratio of the GameObject’s screen space height to the total screen height.

As you move through the levels, the **Scene view**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](UsingTheSceneView.html)
See in [Glossary](Glossary.html#SceneView) displays the bounding box of the Tree Asset and the overlay indicates which LOD is active:

[Image: Overlays displaying the active LOD levels]
Overlays displaying the active LOD levels

**Note:** Unity only displays the LOD label when a single GameObject is selected. It is not displayed when multiple GameObjects are selected.

## Renderers for LOD Meshes

When you select an LOD level box on the **LOD Group** selection bar, a **Renderers** panel appears.

[Image: Renderers panel with the Billboard Renderer for LOD 3]
Renderers panel with the Billboard Renderer for LOD 3

The ‘Renderers’ are actually GameObjects that hold the Mesh for that LOD level. Usually this is a child of the GameObject that has the **LODGroup** component.

To set a renderer Mesh for the current LOD level, click the **Add** box and choose the GameObject for that LOD level from the object picker.

You can choose any GameObject for the renderer, but if you choose a GameObject that isn’t already a child, Unity prompts you to parent it to the **LODGroup** GameObject.

LODGroup

Make LOD Group transitions smooth

2D images for low level of detail (LOD)

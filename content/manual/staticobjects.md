This version of Unity is unsupported.

Programming with the Quaternion class

Deactivate GameObjects

# Static GameObjects

If a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) does not move at runtime, it is known as a **static GameObject**. If a GameObject moves at runtime, it is known as a **dynamic GameObject**.

Many systems in Unity can precompute information about static GameObjects in the Editor. Because the GameObjects do not move, the results of these calculations are still valid at runtime. This means that Unity can save on runtime calculations, and potentially improve performance.

## The Static Editor Flags property

[Image: The Static Editor Flags checkbox and drop-down menu, as seen when viewing a GameObject in the Inspector]
The Static Editor Flags checkbox and drop-down menu, as seen when viewing a GameObject in the Inspector

The **Static Editor Flags** property lists a number of Unity systems which can include a static GameObject in their precomputations. Use the drop-down to define which systems include the GameObject in their precomputations. Setting Static Editor Flags at runtime has no effect on these systems.

Only include a GameObject in the precomputations for systems that need to know about that GameObject. Including a GameObject in the precomputations for a system that does not need to know about that GameObject can result in wasted calculations, unnecessarily large data files, or unexpected behavior.

The **Static Editor Flags** property is located in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) for a GameObject, in the extreme top-right. It includes a checkbox, which sets the value to **Everything** or **Nothing**, and a dropdown menu that lets you choose which values to include.

To set the Static Editor Flags property in code, use the [GameObjectUtility.SetStaticEditorFlags](../ScriptReference/GameObjectUtility.SetStaticEditorFlags.html) API and the [GameObject.isStatic](../ScriptReference/GameObject-isStatic.html). To get the status of the Static Editor Flags property in code, use the [GameObjectUtility.GetStaticEditorFlags](../ScriptReference/GameObjectUtility.GetStaticEditorFlags.html) API.

The following values are available:

| Property | Description |
| --- | --- |
| Nothing | Do not include the GameObject in precomputations for any systems. |
| Everything | Include the GameObject in precomputations for all systems below. |
| Contribute GI | When you enable this property, Unity includes the target Mesh RendererA mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. More infoSee in Glossary in global illuminationA group of techniques that model both direct and indirect lighting to provide realistic lighting results.See in Glossary calculations. These calculations take place while precomputing lighting data at bake time. The ContributeGI property exposes the ReceiveGI property. The ContributeGI property only takes effect if you enable a global illumination setting such as Baked Global Illumination or Enlighten Realtime Global Illumination for the target SceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. For additional context, refer to this tutorial for setting up the Built-in Render Pipeline and lighting in Unity. |
| Occluder Static | Mark the GameObject as a Static Occluder in the occlusion culling system. For more information, refer to the Occlusion Culling system. |
| Occludee Static | Mark the GameObject as a Static Occludee in the occlusion culling system. For more information, refer to the Occlusion Culling system. |
| Batching Static | Combine the GameObject’s MeshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary with other eligible Meshes, to potentially reduce runtime rendering costs. For more information, refer to the documentation on Static BatchingA technique Unity uses to draw GameObjects on the screen that combines static (non-moving) GameObjects into big Meshes, and renders them in a faster way. More infoSee in Glossary. |
| Navigation Static | Include the GameObject when precomputing navigation data. This workflow is deprecated and you cannot set Navigation Static here. However, you can still set this option in code with StaticEditorFlags.NavigationStatic. Instead of Navigation Static flags, use the NavMesh Modifier component together with NavMesh Surfaces. |
| Off Mesh Link Generation | Attempt to generate an OffMesh Link that starts from this GameObject when precomputing navigation data. This workflow is deprecated and you cannot set Off Mesh Link Generation from this menu. However, you can still set this option in code with StaticEditorFlags.OffMeshLinkGeneration. Instead of Off Mesh Link Generation flags, use the NavMesh Modifier component together with NavMesh Surfaces. |
| Reflection Probe | Include this GameObject when precomputing data for Reflection Probes whose Type property is set to Baked. For more information, refer to Reflection ProbesA rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. More infoSee in Glossary. |

## Additional resources

- [GameObjectUtility.SetStaticEditorFlags](../ScriptReference/GameObjectUtility.SetStaticEditorFlags.html)

- [GameObjectUtility.GetStaticEditorFlags](../ScriptReference/GameObjectUtility.GetStaticEditorFlags.html)

- [StaticEditorFlags.NavigationStatic](../ScriptReference/StaticEditorFlags.NavigationStatic.html)

- [StaticEditorFlags.OffMeshLinkGeneration](../ScriptReference/StaticEditorFlags.OffMeshLinkGeneration.html)

- [StaticEditorFlags](../ScriptReference/StaticEditorFlags.html)

- [Draw call batching](DrawCallBatching.html)

- [Occlusion Culling](OcclusionCulling.html)A process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. [More info](OcclusionCulling.html)
See in [Glossary](Glossary.html#Occlusionculling)

- [NavMesh Modifier component](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/NavMeshModifier.html)

- [NavMesh Surface component](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/NavMeshSurface.html)

- [Reflection Probes](ReflectionProbes.html)

Programming with the Quaternion class

Deactivate GameObjects

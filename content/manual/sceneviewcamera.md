This version of Unity is unsupported.

Scene view navigation

Control a camera in first person

# Scene view Camera

The Camera settings menu contains options for configuring the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) Camera. These adjustments do not affect the settings on **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) with Camera components.

To open the Scene Camera settings menu, click the Camera icon in the View options overlay in the **Scene view**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](UsingTheSceneView.html)
See in [Glossary](Glossary.html#SceneView).

You can also configure the Scene Camera in script with the [SceneView.CameraSetting](../ScriptReference/SceneView.CameraSettings.html) API.

**Tip**: To reset the properties to their default values, click the cog icon in the top right corner of the Scene Camera settings menu and select **Reset**.

[Image: The Camera settings menu in context of the Scene view toolbar]
The Camera settings menu in context of the Scene view toolbar

| Property | Description |
| --- | --- |
| Field of View | Change the height of the Scene Camera’s view angle. |
| Dynamic Clipping | Enable to have the Editor calculate the Camera’s near and far clipping planesThe maximum draw distance for a camera. Geometry beyond the plane defined by this value is not rendered. The plane is perpendicular to the camera’s forward (Z) direction.See in Glossary relative to the viewportThe user’s visible area of an app on their screen.See in Glossary size of the Scene. |
| Clipping PlanesA plane that limits how far or close a camera can see from its current position. A camera’s viewable range is between the far and near clipping planes. See far clipping plane and near clipping plane. More infoSee in Glossary | Set the distances from the Camera where Unity starts and stops rendering GameObjects in the Scene. These distances apply to both perspective and orthographic (isometric) projection modes. The Near and Far properties are modifiable only when Dynamic Clipping is disabled. |
|  | Near: Set the closest point to the Camera that the Editor renders GameObjects. |
|  | Far: Set the furthest point from the Camera that the Editor renders GameObjects. |
| Occlusion CullingA process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. More infoSee in Glossary | Enable occlusion culling in the Scene view. This prevents the Editor from rendering GameObjects that the Camera cannot see because they are hidden behind other GameObjects. |
| Camera Easing | Make the Camera ease in and out of motion in the Scene view. This makes the Camera ease into motion when it starts moving instead of starting at full speed, and ease out when it stops. You can set the duration in the API. |
| Camera Acceleration | Enable acceleration when moving the camera. When enabled, the camera initially moves at a speed based on the speed value, and continuously increases speed until movement stops. When disabled, the camera accelerates to a constant speed based on the Camera Speed. |
| Camera Speed | Set the current speed the Scene camera uses in the Scene view. In Flythrough modeA Scene view navigation mode that allows you to fly around the scene in first-person, similar to how you would navigate in many games. More infoSee in Glossary, you can change the speed of the Camera while moving. To do this, use the mouse scroll wheel or drag two fingers on a trackpad. |
|  | Min: Set the minimum speed of the Camera in the Scene view. Valid values are between 0.01 and 98. |
|  | Max: Set the maximum speed of the Camera in the Scene view. Valid values are between 0.02 and 99. |

## Additional resources

- [Cameras overlay](cameras-overlay.html)

- [Control a camera in first person](control-camera.html)

- [Cameras](CamerasOverview.html)A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera)

- [Cinemachine](https://docs.unity3d.com/Packages/com.unity.cinemachine@latest/)

- [Timeline](https://docs.unity3d.com/Packages/com.unity.timeline@latest/)

Scene view navigation

Control a camera in first person

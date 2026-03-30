This version of Unity is unsupported.

Prepare your sprites for the 2D Pixel Perfect Camera in URP

Pixel Perfect Camera component reference for URP

# Make Cinemachine compatible with the 2D Pixel Perfect camera in URP

Add the **Cinemachine **Pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](../ShadowPerformance.html)
See in [Glossary](../Glossary.html#pixel) Perfect** to the Cinemachine Virtual Cameras to use both the **Pixel Perfect **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera)** and [Cinemachine](https://unity.com/unity/features/editor/art-and-design/cinemachine?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938942338) together. Both systems modify the Camera’s orthographic size, so using these two systems together in a single **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) would cause them to fight for control over the Camera and produce unwanted results. The **Cinemachine Pixel Perfect** extension solves this incompatibility.

**Cinemachine Pixel Perfect** is an [extension](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.2/manual/CinemachineVirtualCameraExtensions.html) for the **Cinemachine Virtual Camera** that alters the orthographic size of the virtual camera. The extension detects the presence of the Pixel Perfect Camera component, and uses the component settings to calculate for the correct orthographic size of the virtual camera that best retains the **Sprites**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../sprite/sprite-landing.html)
See in [Glossary](../Glossary.html#Sprite) in a pixel-perfect resolution.

To add this extension to your virtual cameras, use the **Add Extension** dropdown menu on the Cinemachine Virtual Camera **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../UsingTheInspector.html)
See in [Glossary](../Glossary.html#Inspector) window. Add this extension to each virtual camera in your Project.

For each virtual camera attached with this extension, the Pixel Perfect Camera component then calculates a pixel-perfect orthographic size that best matches the original size of the virtual camera during **Play Mode** or when **Run In Edit Mode** is enabled. This is done to match the original framing of each virtual camera as close as possible when the pixel-perfect calculations are implemented.

When the [Cinemachine Brain](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.3/manual/CinemachineBrainProperties.html) component [blends](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.3/manual/CinemachineBlending.html)Transition from one animation to another smoothly and seamlessly, such as blending a character’s walking and running animations according to the character’s speed.
See in [Glossary](../Glossary.html#blend) between multiple virtual cameras, the rendered image is temporarily not pixel-perfect during the transition between cameras. The image becomes pixel-perfect once the view fully transitions to a single virtual camera.

The following are the current limitations of the extension:

- When a virtual camera with the Pixel Perfect extension is set to follow a [Target Group](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.3/manual/CinemachineTargetGroup.html), there may be visible choppiness when the virtual camera is positioned with the [Framing Transposer](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.9/manual/CinemachineBodyFramingTransposer.html) component.

- If the **Upscale **Render Texture**A special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. [More info](../class-RenderTexture.html)
See in [Glossary](../Glossary.html#RenderTexture)** option is enabled on the Pixel Perfect Camera, there are less possible pixel-perfect resolutions that match the original orthographic size of the virtual cameras. This may cause the framing of the virtual cameras to be off by quite a large margin after the pixel-perfect calculations.

Prepare your sprites for the 2D Pixel Perfect Camera in URP

Pixel Perfect Camera component reference for URP

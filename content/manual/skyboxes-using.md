This version of Unity is unsupported.

Sky

Configure a skybox with a Skybox Shader

# Create a skybox

To create a new **skybox**A special type of Material used to represent skies. Usually six-sided. [More info](sky-landing.html)
See in [Glossary](Glossary.html#Skybox) material:

1. From the main menu, select **Assets > Create > Material**.

2. In the new material’s ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window, search for `skybox` in the ****Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader)** dropdown, then select a type of skybox shader.

3. Configure the properties of the material to set up the skybox.

The available properties depend on the type of skybox shader you selected.

**Note**: Each skybox shader has unique prerequisite textures that differ in type, number, and format. For details on the required Textures for a specific skybox shader, refer to its documentation. You can find the list of skybox shaders and their respective documentation on the [Skybox shaders](skybox-shaders.html) page.

## Drawing a skybox in your scene

Once you have created a skybox material, you can apply it to your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene)’s background. To draw the skybox in your scene:

1. From the main menu, select **Window** > **Rendering** > **Lighting**.

2. In the **Lighting** window, select the **Environment** tab.

3. Drag your skybox material to the **Skybox Material** property.

This draws the skybox in the background of every **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) in your scene. To draw the skybox for a specific camera only, refer to [Rendering a skybox for a specific Camera](#DrawingForCamera).

## Drawing a skybox for a particular camera

To draw a skybox for a particular camera, use the [Skybox component](sky-landing.html). When attached to a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) with a camera, the Skybox component overrides the global skybox for that camera. To add and configure the Skybox component:

1. Select a camera in your scene and open the **Inspector** window.

2. Select **Add Component**, then add a new **Skybox** component.

3. Drag your skybox material to the **Custom Skybox** property.

## Best practices for skyboxes

### Synchronizing light sources

If your skybox contains a visible sun, moon, or other light source, align a **Directional Light** in your scene to match the light’s direction in the skybox. This creates the illusion that the light in the skybox is casting shadows. For scenes with multiple directional lights, specify the one to use:

1. From the main menu, select **Window** > **Rendering** > **Lighting**.

2. Select the **Environment** tab.

3. Drag the appropriate directional light to the **Sun Source** property.

### Blending fog with the skybox

To create a seamless blend between fog and the skybox, match the fog color to the skybox hues. To blend fog with the skybox:

1. From the main menu, select **Window** > **Rendering** > **Lighting**.

2. Select the **Environment** tab.

3. Under **Other Settings**, activate the **Fog** checkbox.

4. Adjust the **Color** property to complement your skybox.

Use the eyedropper tool for precise color selection from the scene.

Sky

Configure a skybox with a Skybox Shader

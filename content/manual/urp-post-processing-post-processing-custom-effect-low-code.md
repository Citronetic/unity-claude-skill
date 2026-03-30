This version of Unity is unsupported.

Custom post-processing in URP

Create a custom post-processing effect with Volume support in URP

# Create a low-code custom post-processing effect in URP

The example on this page shows how to use the Full Screen Render Pass Renderer Feature to create a grayscale custom **post-processing**A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](../../PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](../../Glossary.html#post-processing) effect.

For more information on the Full Screen Render Pass Renderer Feature, refer to the [Full Screen Pass Renderer Feature reference](../renderer-features/renderer-feature-full-screen-pass.html).

## Prerequisites

This example requires the following:

- A Unity project with the URP package installed.

- The **Scriptable Render Pipeline Settings** property refers to a URP asset (**Project Settings** > **Graphics** > **Scriptable Render Pipeline Settings**).

## Create a Fullscreen Shader Graph

You must create a Fullscreen **Shader**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader) Graph to create a custom post-processing effect.

1. Create a new Shader Graph in your Project. To do this right-click in the Project window and select **Create** > **Shader Graph** > **URP** > **Fullscreen Shader Graph**.

2. Add a **URP Sample Buffer** node. To do this right-click in the Shader Graph window, and select **Create Node**. Then locate and select **URP Sample Buffer**.

3. In the **URP Sample Buffer** node’s **Source Buffer** dropdown menu, select **BlitSource**.

4. Add a **Vector 3** node.

5. Assign the **Vector 3** node the following values:

- **X** = 0.2126

- **Y** = 0.7152

- **Z** = 0.0722

6. Add a **Dot Product** node.

7. Connect the nodes as shown below.

[Image: Grayscale Fullscreen Shader Graph with all nodes connected.]
Grayscale Fullscreen Shader Graph with all nodes connected.

| Node | Connection |
| --- | --- |
| URP Sample Buffer | Output to Dot Product A |
| Vector 3 | Out to Dot Product B |
| Dot Product | Out to Fragment Base Color |

8. Save your Shader Graph.

9. Create a new Material in your Project. To do this right-click in the Project window and select **Create** > **Material**.

10. Apply the Shader Graph shader to the Material. To do this, open the Material in the Inspector and select **Shader** > **Shader Graphs**, then select the Shader Graph you created in the previous steps.

## Use the Material in a Full Screen Pass Renderer Feature

Once you’ve created a compatible Shader Graph and Material, you can use the Material with a Full Screen Pass Renderer Feature to create a custom post-processing effect.

1. Select your project’s Universal Renderer.

If you created your project using the **Universal 3D** template, you can find the Universal Renderers in the following project folder: **Assets** > **Settings**.

2. In the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../UsingTheInspector.html)
See in [Glossary](../../Glossary.html#Inspector), click **Add Renderer Feature** and select **Full Screen Pass Renderer Feature**. For more information on adding Renderer Features refer to [How to add a Renderer Feature to a Renderer](./../urp-renderer-feature.html).

3. Set the **Pass Material** field to the Material you created with the Fullscreen Shader Graph.

4. Set **Injection Point** to **After Rendering Post Processing**.

5. Set **Requirements** to **Color**.

You should now notice the effect in both **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene) view and Game view.

[Image: Example scene with a grayscale custom post-processing effect.]
Example scene with a grayscale custom post-processing effect.

## Additional resources

- [Custom rendering and post-processing in URP](../customizing-urp.html)

Custom post-processing in URP

Create a custom post-processing effect with Volume support in URP

This version of Unity is unsupported.

Adding pre-built effects via Renderer Features in URP

Example of creating a custom rendering effect using a Render Objects Renderer Feature in URP

# Add a Renderer Feature to a URP Renderer

URP draws objects in the **DrawOpaqueObjects** and **DrawTransparentObjects** passes. You might need to draw objects at a different point in the frame rendering, or interpret and write rendering data (like depth and stencil) in alternate ways. The Render Objects Renderer Feature lets you do such customizations by letting you draw objects on a certain layer, at a certain time, with specific overrides.

For examples of how to use Renderer Features, refer to the [Renderer Features samples in URP Package Samples](package-sample-urp-package-samples.html#renderer-features).

To add a Renderer Feature to a Renderer:

1. In the **Project** window, select a Renderer.

[Image: Select a Renderer.]
Select a Renderer.

The **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../UsingTheInspector.html)
See in [Glossary](../Glossary.html#Inspector) window shows the Renderer properties.

[Image: Inspector window shows the Renderer properties.]
Inspector window shows the Renderer properties.

2. In the Inspector window, select **Add Renderer Feature**. In the list, select a Renderer Feature.

[Image: Select Add Renderer Feature, then select a Renderer Feature.]
Select **Add Renderer Feature**, then select a Renderer Feature.

Unity adds the selected Renderer Feature to the Renderer.

[Image: New Renderer Feature added.]
New Renderer Feature added.

Unity shows Renderer Features as child items of the Renderer in the **Project Window**A window that shows the contents of your `Assets` folder (Project tab) [More info](../ProjectView.html)
See in [Glossary](../Glossary.html#Projectwindow):

[Image: Renderer Feature as child item of the Renderer in the Project Window]
Renderer Feature as child item of the Renderer in the Project Window

## Additional resources

- [Drawing objects with a Render Objects Renderer Feature](renderer-features/how-to-custom-effect-render-objects.html)

- [Decal Renderer Feature](renderer-feature-decal-landing.html)

- [Screen Space Ambient Occlusion (SSAO) Renderer Feature](post-processing-ssao.html)

- [Screen Space Shadows Renderer Feature](renderer-feature-screen-space-shadows.html)

Adding pre-built effects via Renderer Features in URP

Example of creating a custom rendering effect using a Render Objects Renderer Feature in URP

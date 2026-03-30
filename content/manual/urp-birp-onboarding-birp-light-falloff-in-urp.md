This version of Unity is unsupported.

Upgrade custom shaders for URP compatibility

Convert quality settings from the Built-In Render Pipeline to URP

# Change how lights fade to match the Built-In Render Pipeline

After converting the necessary **project settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](../../comp-ManagerGroup.html)
See in [Glossary](../../Glossary.html#ProjectSettings) and materials from the Built-In **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline) to URP, the overall look of the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene) might still not match the look of the original project.

One reason for this is that the light falloff functions in the Built-In Render Pipeline and URP are different. URP implements inverse square light falloff, while the Built-In Render Pipeline uses quadratic falloff. Changes in quality or light component settings might not be enough to achieve the same look in URP.

To change the light falloff function in URP and make it look similar to the Built-In Render Pipeline falloff, refer to [Change the light falloff function in URP](../lighting/custom-lighting-change-light-falloff.html).

## Additional resources

- [Custom lighting in URP](../lighting/custom-lighting-landing.html)

Upgrade custom shaders for URP compatibility

Convert quality settings from the Built-In Render Pipeline to URP

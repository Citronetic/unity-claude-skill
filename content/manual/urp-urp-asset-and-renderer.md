This version of Unity is unsupported.

Graphics quality settings in URP

Display advanced properties in a URP Asset

# Universal Render Pipeline asset

Any Unity project that uses the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) must have a URP Asset to configure the settings. When you create a project using the URP template, Unity creates the URP Assets in the **Settings** project folder and assigns them in **Project Settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](../comp-ManagerGroup.html)
See in [Glossary](../Glossary.html#ProjectSettings). If you are migrating an existing project to URP, you need to [create a URP Asset and assign the asset in the Graphics settings](InstallURPIntoAProject.html).

The URP Asset controls several graphical features and quality settings for the Universal Render Pipeline. It is a scriptable object that inherits from ‘RenderPipelineAsset’. When you assign the asset in the Graphics settings, Unity switches from the built-in render pipeline to the URP. You can then adjust the corresponding settings directly in the URP, instead of looking for them elsewhere.

You can have multiple URP assets and switch between them. For example, you can have one with Shadows on and one with Shadows off. If you switch between the assets to understand the effects, you don’t have to manually toggle the corresponding settings for shadows every time. You cannot, however, switch between HDRP/SRP and URP assets, as the render pipelines are incompatible.

## Additional resources

- [URP Asset reference](universalrp-asset.html)

Graphics quality settings in URP

Display advanced properties in a URP Asset

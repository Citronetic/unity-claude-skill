This version of Unity is unsupported.

Set the render queue for a material in the Built-In Render Pipeline

Custom rendering in the Built-In Render Pipeline

# Set how a camera sorts materials in the Built-In Render Pipeline

How you change the sorting behavior within a render queue depends on the index of the render queue:

- For queues with an index up to and including 2500 (Geometry + 500), you can change the opaque sort mode for a **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) by using the [Camera.opaqueSortMode](../ScriptReference/Camera-opaqueSortMode.html) API.

- For queues with an index of 2501 or above, you can change the default transparent sort mode by using the [Rendering.GraphicsSettings-transparencySortMode](../ScriptReference/Rendering.GraphicsSettings-transparencySortMode.html) API. You can change the transparent sort mode for a Camera by using the [Camera.transparencySortMode](../ScriptReference/Camera-transparencySortMode.html) API.

Set the render queue for a material in the Built-In Render Pipeline

Custom rendering in the Built-In Render Pipeline

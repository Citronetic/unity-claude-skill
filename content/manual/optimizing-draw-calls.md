This version of Unity is unsupported.

Optimize rendering lots of objects

Choose a method for optimizing draw calls

# Introduction to optimizing draw calls

Optimizing draw calls speeds up rendering, by reducing how often the CPU sends information to the GPU.

By default, each **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) needs its own draw call. A draw call has the following steps:

- Update the render state. The CPU uses the graphics API to prepare and send everything the GPU needs to draw the mesh. For example **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) code, textures, and buffers. This is the most CPU-intensive step.

- Submit a draw call. The CPU uses the graphics API to tell the GPU what to draw.

If you optimize draw calls, Unity groups data and meshes that use the same render state. As a result, Unity updates the render state less often, and submits multiple objects in single draw calls.

Optimizing draw calls provides the following benefits:

- Improve frame times, or increase the number of **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) you can render per frame.

- Reduce the amount of electricity your application needs. For battery-powered devices, this reduces the heat the device produces and the rate at which batteries run out.

## Types of draw call optimization

Draw call optimization methods in Unity work in one of the following ways:

- Drawing multiple copies of a mesh in one draw call, using the hardware capabilities of the GPU. This is GPU instancing.

- Using another technique to reduce render state updates, such as large GPU buffers. This is how the Scriptable **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (SRP) Batcher works.

- Combining meshes that use the same render state and drawing them together. This is batching.

For more information, refer to [Choose a method for optimizing draw calls](optimizing-draw-calls-choose-method.html).

## Additional resources

- [Optimize shaders](SL-ShaderPerformance.html)

- [Optimize for mobile](iphone-iOS-Optimization.html)

- [Optimize for untethered XR devices](xr-untethered-device-optimization.html)

Optimize rendering lots of objects

Choose a method for optimizing draw calls

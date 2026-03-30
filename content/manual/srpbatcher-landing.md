This version of Unity is unsupported.

Optimizing draw calls in URP

Scriptable Render Pipeline Batcher in URP

# Scriptable Render Pipeline (SRP) Batcher in URP

Resources for using the Scriptable **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (SRP) Batcher to reduce the number of render state changes between draw calls.

| Page | Description |
| --- | --- |
| Introduction to the SRP Batcher | Understand how the SRP Batcher reduces render state changes between draw calls. |
| Check whether a GameObject is compatible with the SRP Batcher | Find out if Unity can include a GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary and a shaderA program that runs on the GPU. More infoSee in Glossary in the SRP Batcher. |
| Enable the SRP Batcher | Enable the SRP Batcher in the URP Asset. |
| Troubleshoot the SRP Batcher | Use the Frame Debugger to solve common issues with the SRP Batcher, such as a low number of draw calls in batches. |
| Remove SRP Batcher compatibility for GameObjects | Make a shader or renderer incompatible with the SRP Batcher, for example if you want to use GPU instancing. |

## Additional resources

- [Choose a method for optimizing draw calls](optimizing-draw-calls-choose-method.html)

- [GPU instancing](GPUInstancing.html)

Optimizing draw calls in URP

Scriptable Render Pipeline Batcher in URP

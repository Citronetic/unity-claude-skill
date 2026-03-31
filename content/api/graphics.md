This version of Unity is unsupported.



# Graphics





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Raw interface to Unity's drawing functions.





This is the high-level shortcut into the optimized mesh drawing functionality of Unity.





### Static Properties



| Property | Description |
| --- | --- |
| activeColorBuffer | Currently active color buffer (Read Only). |
| activeColorGamut | Returns the currently active color gamut. |
| activeDepthBuffer | Currently active depth/stencil buffer (Read Only). |
| activeTier | The GraphicsTier for the current device. |
| minOpenGLESVersion | The minimum OpenGL ES version. The value is specified in PlayerSettings. |
| preserveFramebufferAlpha | True when rendering over native UI is enabled in Player Settings (readonly). |





### Static Methods



| Method | Description |
| --- | --- |
| Blit | Uses a shader to copy the pixel data from a texture into a render target. |
| BlitMultiTap | Copies source texture into destination, for multi-tap shader. |
| ClearRandomWriteTargets | Unset random write targets for Shader Model 4.5 level pixel shaders. |
| ConvertTexture | Copies the pixel data from one texture, converts the data into a different format, and copies it into another texture. |
| CopyBuffer | Copies the contents of one GraphicsBuffer into another. |
| CopyTexture | Copies pixel data from one texture to another. |
| CreateAsyncGraphicsFence | Shortcut for calling Graphics.CreateGraphicsFence with GraphicsFenceType.AsyncQueueSynchronisation as the first parameter. |
| CreateGraphicsFence | Creates a GraphicsFence. |
| DrawMesh | Draw a mesh. |
| DrawMeshInstanced | Draws the same mesh multiple times using GPU instancing. |
| DrawMeshInstancedIndirect | This function is now obsolete. Use Graphics.RenderMeshIndirect instead. Draws the same mesh multiple times using GPU instancing. |
| DrawMeshInstancedProcedural | This function is now obsolete. Use Graphics.RenderMeshPrimitives instead. Draws the same mesh multiple times using GPU instancing.
This is similar to Graphics.DrawMeshInstancedIndirect, except that when the instance count is known from script, it can be supplied directly using this method, rather than via a ComputeBuffer. |
| DrawMeshNow | Draw a mesh immediately. |
| DrawProcedural | This function is now obsolete. For non-indexed rendering, use Graphics.RenderPrimitives instead.
For indexed rendering, use Graphics.RenderPrimitivesIndexed. Draws procedural geometry on the GPU. |
| DrawProceduralIndirect | Draws procedural geometry on the GPU. |
| DrawProceduralIndirectNow | Draws procedural geometry on the GPU. |
| DrawProceduralNow | Draws procedural geometry on the GPU. |
| DrawTexture | Draw a texture in screen coordinates. |
| ExecuteCommandBuffer | Execute a command buffer. |
| ExecuteCommandBufferAsync | Executes a command buffer on an async compute queue with the queue selected based on the ComputeQueueType parameter passed. |
| RenderMesh | Renders a mesh with given rendering parameters. |
| RenderMeshIndirect | Renders multiple instances of a mesh using GPU instancing and rendering command arguments from argsBuffer. |
| RenderMeshInstanced | Renders multiple instances of a mesh using GPU instancing. |
| RenderMeshPrimitives | Renders multiple instances of a Mesh using GPU instancing and a custom shader. |
| RenderPrimitives | Renders non-indexed primitives with GPU instancing and a custom shader. |
| RenderPrimitivesIndexed | Renders indexed primitives with GPU instancing and a custom shader. |
| RenderPrimitivesIndexedIndirect | Renders indexed primitives with GPU instancing and a custom shader with rendering command arguments from commandBuffer. |
| RenderPrimitivesIndirect | Renders primitives with GPU instancing and a custom shader using rendering command arguments from argsBuffer. |
| SetRandomWriteTarget | Set random write target for Shader Model 4.5 level pixel shaders. |
| SetRenderTarget | Sets current render target. |
| WaitOnAsyncGraphicsFence | Instructs the GPU to pause processing of the queue until it passes through the GraphicsFence fence. |


            

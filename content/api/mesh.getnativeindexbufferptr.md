This version of Unity is unsupported.



# [Mesh](Mesh.html).GetNativeIndexBufferPtr




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




                [Switch to Manual](../Manual/class-Mesh.html)










## Declaration

public IntPtr GetNativeIndexBufferPtr();






### Returns



**IntPtr**
        Pointer to the underlying graphics API index buffer.





### Description



Retrieves a native (underlying graphics API) pointer to the index buffer.





Use this function to retrieve a pointer/handle corresponding to the Mesh index buffer,
as it is represented in the native graphics API. This can be used to enable
Mesh manipulation from [native code plugins](../Manual/native-plugin-interface.html).

Index buffer data is either 16 or 32 bit per index, depending on [indexFormat](Mesh-indexFormat.html). The layout of the index buffer
otherwise depends on the [MeshTopology](MeshTopology.html) that is used (see [SetIndices](Mesh.SetIndices.html)). The most common case is Meshes composed
of triangle lists, which have index buffers with three indices per triangle.

The type of data returned depends on the underlying graphics API:



          - ID3D11Buffer on D3D11

          - ID3D12Resource on D3D12

          - id<MTLBuffer> on Metal

          - buffer "name" (as GLuint) on OpenGL/ES

          - internal representation on Vulkan, that should be accessed via IUnityGraphicsVulkan interface





For most use cases (when writing Mesh data from native code), you need to mark the Mesh as "dynamic"
(see [MarkDynamic](Mesh.MarkDynamic.html)) before getting the native buffer pointer. Generally this switches the buffers to be CPU-writable.

Note that calling this function when using multi-threaded rendering will synchronize with the rendering thread (a slow operation), so best practice is to set up necessary buffer pointers only at initialization time.

Additional resources: [Native code plugins](../Manual/native-plugin-interface.html), [GetNativeVertexBufferPtr](Mesh.GetNativeVertexBufferPtr.html), [SetIndices](Mesh.SetIndices.html).


            

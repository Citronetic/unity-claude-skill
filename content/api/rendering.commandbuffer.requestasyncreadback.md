This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).RequestAsyncReadback




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















## Declaration

public void RequestAsyncReadback([ComputeBuffer](ComputeBuffer.html) src,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([GraphicsBuffer](GraphicsBuffer.html) src,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([ComputeBuffer](ComputeBuffer.html) src,
int size,
int offset,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([GraphicsBuffer](GraphicsBuffer.html) src,
int size,
int offset,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([Texture](Texture.html) src,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([Texture](Texture.html) src,
int mipIndex,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([Texture](Texture.html) src,
int mipIndex,
[TextureFormat](TextureFormat.html) dstFormat,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([Texture](Texture.html) src,
int mipIndex,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) dstFormat,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([Texture](Texture.html) src,
int mipIndex,
int x,
int width,
int y,
int height,
int z,
int depth,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([Texture](Texture.html) src,
int mipIndex,
int x,
int width,
int y,
int height,
int z,
int depth,
[TextureFormat](TextureFormat.html) dstFormat,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadback([Texture](Texture.html) src,
int mipIndex,
int x,
int width,
int y,
int height,
int z,
int depth,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) dstFormat,
Action<AsyncGPUReadbackRequest> callback);






### Parameters



| Parameter | Description |
| --- | --- |
| src | The resource to read the data from. |
| size | Size in bytes of the data to be retrieved from the ComputeBuffer or GraphicsBuffer. |
| offset | Offset in bytes in the ComputeBuffer or GraphicsBuffer. |
| mipIndex | The index of the mipmap to be fetched. |
| dstFormat | The target TextureFormat of the data. Conversion will happen automatically if format is different from the format stored on GPU. |
| x | Starting X coordinate in pixels of the Texture data to be fetched. |
| y | Starting Y coordinate in pixels of the Texture data to be fetched. |
| z | Start Z coordinate in pixels for the Texture3D being fetched. Index of Start layer for TextureCube, Texture2DArray and TextureCubeArray being fetched. |
| depth | Depth in pixels for Texture3D being fetched. Number of layers for TextureCube, TextureArray and TextureCubeArray. |
| width | Width in pixels of the Texture data to be fetched. |
| height | Height in pixels of the Texture data to be fetched. |
| callback | A delegate System.Action called once the request is fullfilled. The done request is passed as parameter to the System.Action. |





### Description



Adds an asynchonous GPU readback request command to the command buffer.





Additional resources: [AsyncGPUReadback.Request](Rendering.AsyncGPUReadback.Request.html).


            

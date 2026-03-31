This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).RequestAsyncReadbackIntoNativeSlice




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

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[Texture](Texture.html) src,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[Texture](Texture.html) src,
int mipIndex,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[Texture](Texture.html) src,
int mipIndex,
[TextureFormat](TextureFormat.html) dstFormat,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[Texture](Texture.html) src,
int mipIndex,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) dstFormat,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[Texture](Texture.html) src,
int mipIndex,
int x,
int width,
int y,
int height,
int z,
int depth,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[Texture](Texture.html) src,
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

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[Texture](Texture.html) src,
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
| output | Reference to a NativeSlice to write the data into. |
| src | The resource to read the data from. |
| mipIndex | The index of the mipmap to fetch. |
| dstFormat | The target TextureFormat of the data. If the target format is different from the format stored on the GPU, the conversion is automatic. |
| x | The starting x-coordinate, in pixels, of the Texture data to fetch. |
| y | The starting y-coordinate, in pixels, of the Texture data to fetch. |
| z | The starting z-coordinate, in pixels, of the Texture3D to fetch. For TextureCube, Texture2DArray, and TextureCubeArray, this is the index of the start layer. |
| width | The width, in pixels, of the Texture data to fetch. |
| height | The height, in pixels, of the Texture data to fetch. |
| depth | The depth, in pixels of the Texture3D to fetch. For TextureCube, Texture2DArray, and TextureCubeArray, this is the number of layers to retrieve. |
| callback | A delegate System.Action to call after Unity completes the request. When Unity calls the delegate, it passes the completed request as a parameter to the System.Action. |





### Description



Adds an asynchonous GPU readback request command to the command buffer.





Additional resources: [AsyncGPUReadback.RequestIntoNativeSlice](Rendering.AsyncGPUReadback.RequestIntoNativeSlice.html).




---








## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[ComputeBuffer](ComputeBuffer.html) src,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[ComputeBuffer](ComputeBuffer.html) src,
int size,
int offset,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[GraphicsBuffer](GraphicsBuffer.html) src,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public void RequestAsyncReadbackIntoNativeSlice(ref NativeSlice<T> output,
[GraphicsBuffer](GraphicsBuffer.html) src,
int size,
int offset,
Action<AsyncGPUReadbackRequest> callback);






### Parameters



| Parameter | Description |
| --- | --- |
| output | Reference to a NativeSlice to write the data into. |
| src | The resource to read the data from. |
| size | The size, in bytes, of the data to retrieve from the ComputeBuffer or GraphicsBuffer. |
| offset | The offset in bytes in the ComputeBuffer or GraphicsBuffer. |
| callback | A delegate System.Action to call after Unity completes the request. When Unity calls the delegate, it passes the completed request as a parameter to the System.Action. |





### Description



Adds an asynchonous GPU readback request command to the command buffer.





Additional resources: [AsyncGPUReadback.RequestIntoNativeSlice](Rendering.AsyncGPUReadback.RequestIntoNativeSlice.html).


            

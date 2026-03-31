This version of Unity is unsupported.



# [AsyncGPUReadback](Rendering.AsyncGPUReadback.html).RequestIntoNativeArrayAsync




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

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[Texture](Texture.html) src,
int mipIndex);






## Declaration

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[Texture](Texture.html) src,
int mipIndex,
[TextureFormat](TextureFormat.html) dstFormat);






## Declaration

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[Texture](Texture.html) src,
int mipIndex,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) dstFormat);






## Declaration

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[Texture](Texture.html) src,
int mipIndex,
int x,
int width,
int y,
int height,
int z,
int depth,
[TextureFormat](TextureFormat.html) dstFormat);






## Declaration

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[Texture](Texture.html) src,
int mipIndex,
int x,
int width,
int y,
int height,
int z,
int depth,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) dstFormat);






### Parameters



| Parameter | Description |
| --- | --- |
| output | Reference to the NativeArray to write the data into. The NativeArray or underlying memory cannot be Disposed until the request is complete. |
| src | The Texture resource to read the data from. |
| mipIndex | The index of the mipmap to fetch. |
| dstFormat | The target TextureFormat of the data. Conversion happens automatically if this format is different from the format stored on the GPU. |
| x | The starting x-coordinate, in pixels, of the Texture data to fetch. |
| width | The width, in pixels, of the Texture data to fetch. |
| y | The starting y-coordinate, in pixels, of the Texture data to fetch. |
| height | The height, in pixels, of the Texture data to fetch. |
| z | The starting z-coordinate, in pixels, of the Texture3D to fetch. For TextureCube, Texture2DArray, and TextureCubeArray, this is the index of the start layer. |
| depth | The depth, in pixels of the Texture3D to fetch. For TextureCube, Texture2DArray, and TextureCubeArray, this is the number of layers to retrieve. |





### Description



Retrieves data asynchronously from a GPU Texture resource.





See [AsyncGPUReadback.RequestIntoNativeArray](Rendering.AsyncGPUReadback.RequestIntoNativeArray.html).




---








## Declaration

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[ComputeBuffer](ComputeBuffer.html) src);






## Declaration

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[ComputeBuffer](ComputeBuffer.html) src,
int size,
int offset);






## Declaration

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[GraphicsBuffer](GraphicsBuffer.html) src);






## Declaration

public static Awaitable<AsyncGPUReadbackRequest> RequestIntoNativeArrayAsync(ref NativeArray<T> output,
[GraphicsBuffer](GraphicsBuffer.html) src,
int size,
int offset);






### Parameters



| Parameter | Description |
| --- | --- |
| output | Reference to the NativeArray to write the data into. The NativeArray or underlying memory cannot be Disposed until the request is complete. |
| src | The GraphicsBuffer to read the data from. |
| size | The size, in bytes, of the data to retrieve from the GraphicsBuffer. |
| offset | Offset in bytes in the GraphicsBuffer. |





### Description



Retrieves data asynchronously from a GPU Graphics Buffer resource.





See [AsyncGPUReadback.RequestIntoNativeArray](Rendering.AsyncGPUReadback.RequestIntoNativeArray.html).


            

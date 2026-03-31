This version of Unity is unsupported.



# [AsyncGPUReadback](Rendering.AsyncGPUReadback.html).RequestIntoNativeArray




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

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
[Texture](Texture.html) src,
int mipIndex,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
[Texture](Texture.html) src,
int mipIndex,
[TextureFormat](TextureFormat.html) dstFormat,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
[Texture](Texture.html) src,
int mipIndex,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) dstFormat,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
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

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
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
| callback | An optional delegate System.Action to call after Unity completes the request. When Unity calls the delegate, it passes the completed request as a parameter to the System.Action. |





### Returns



**AsyncGPUReadbackRequest**
        Returns an [AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) that you can use to determine when the data is available. Otherwise, returns a request with an error.





### Description



Retrieves data asynchronously from a GPU Texture resource.





If the return value is a request with an error, calling [AsyncGPUReadbackRequest.hasError](Rendering.AsyncGPUReadbackRequest-hasError.html) returns true.

For texture data, the extents are checked against the size of the source texture. If graphics [QualitySettings](QualitySettings.html) are set low enough to generate reduced size textures, then the reduced size must be requested. Use QualitySettings.masterTextureLimit to adjust the width and height (and x,y if required), by bit shifting right.

For texture data, use the [SystemInfo.IsFormatSupported](SystemInfo.IsFormatSupported.html) method with the [GraphicsFormatUsage.ReadPixels](Experimental.Rendering.GraphicsFormatUsage.ReadPixels.html) flag to query if the format is supported.




---








## Declaration

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
[ComputeBuffer](ComputeBuffer.html) src,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
[ComputeBuffer](ComputeBuffer.html) src,
int size,
int offset,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
[GraphicsBuffer](GraphicsBuffer.html) src,
Action<AsyncGPUReadbackRequest> callback);






## Declaration

public static [Rendering.AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) RequestIntoNativeArray(ref NativeArray<T> output,
[GraphicsBuffer](GraphicsBuffer.html) src,
int size,
int offset,
Action<AsyncGPUReadbackRequest> callback);






### Parameters



| Parameter | Description |
| --- | --- |
| output | Reference to the NativeArray to write the data into. The NativeArray or underlying memory cannot be Disposed until the request is complete. |
| src | The GraphicsBuffer to read the data from. |
| size | The size, in bytes, of the data to retrieve from the GraphicsBuffer. |
| offset | Offset in bytes in the GraphicsBuffer. |
| callback | An optional delegate System.Action to call after Unity completes the request. When Unity calls the delegate, it passes the completed request as a parameter to the System.Action. |





### Returns



**AsyncGPUReadbackRequest**
        Returns an [AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html) that you can use to determine when the data is available. Otherwise, returns a request with an error.





### Description



Retrieves data asynchronously from a GPU Graphics Buffer resource.





If the return value is a request with an error, calling [AsyncGPUReadbackRequest.hasError](Rendering.AsyncGPUReadbackRequest-hasError.html) returns true.

For texture data, the extents are checked against the size of the source texture. If graphics [QualitySettings](QualitySettings.html) are set low enough to generate reduced size textures, then the reduced size must be requested. Use QualitySettings.masterTextureLimit to adjust the width and height (and x,y if required), by bit shifting right.

For texture data, use the [SystemInfo.IsFormatSupported](SystemInfo.IsFormatSupported.html) method with the [GraphicsFormatUsage.ReadPixels](Experimental.Rendering.GraphicsFormatUsage.ReadPixels.html) flag to query if the format is supported.


            

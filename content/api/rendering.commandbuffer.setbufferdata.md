This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetBufferData




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

public void SetBufferData([ComputeBuffer](ComputeBuffer.html) buffer,
Array data);






## Declaration

public void SetBufferData([ComputeBuffer](ComputeBuffer.html) buffer,
List<T> data);






## Declaration

public void SetBufferData([ComputeBuffer](ComputeBuffer.html) buffer,
NativeArray<T> data);






## Declaration

public void SetBufferData([GraphicsBuffer](GraphicsBuffer.html) buffer,
Array data);






## Declaration

public void SetBufferData([GraphicsBuffer](GraphicsBuffer.html) buffer,
List<T> data);






## Declaration

public void SetBufferData([GraphicsBuffer](GraphicsBuffer.html) buffer,
NativeArray<T> data);






### Parameters



| Parameter | Description |
| --- | --- |
| buffer | The destination buffer. |
| data | Array of values to fill the buffer. |





### Description



Adds a command to set the buffer with values from an array.





The input data must follow the data layout rules of the graphics API in use. See [Compute Shaders](../Manual/class-ComputeShader.html) for cross-platform compatibility information.

Note: Because only [blittable](https://docs.microsoft.com/en-us/dotnet/framework/interop/blittable-and-non-blittable-types) data types can be copied from the array to the buffer, the array must only contain elements of a blittable type. If you attempt to use non-blittable types, an exception will be raised.




---








## Declaration

public void SetBufferData([ComputeBuffer](ComputeBuffer.html) buffer,
Array data,
int managedBufferStartIndex,
int graphicsBufferStartIndex,
int count);






## Declaration

public void SetBufferData([ComputeBuffer](ComputeBuffer.html) buffer,
NativeArray<T> data,
int nativeBufferStartIndex,
int graphicsBufferStartIndex,
int count);






## Declaration

public void SetBufferData([ComputeBuffer](ComputeBuffer.html) buffer,
List<T> data,
int managedBufferStartIndex,
int graphicsBufferStartIndex,
int count);






## Declaration

public void SetBufferData([GraphicsBuffer](GraphicsBuffer.html) buffer,
Array data,
int managedBufferStartIndex,
int graphicsBufferStartIndex,
int count);






## Declaration

public void SetBufferData([GraphicsBuffer](GraphicsBuffer.html) buffer,
NativeArray<T> data,
int nativeBufferStartIndex,
int graphicsBufferStartIndex,
int count);






## Declaration

public void SetBufferData([GraphicsBuffer](GraphicsBuffer.html) buffer,
List<T> data,
int managedBufferStartIndex,
int graphicsBufferStartIndex,
int count);






### Parameters



| Parameter | Description |
| --- | --- |
| buffer | The destination buffer. |
| data | Array of values to fill the buffer. |
| managedBufferStartIndex | The first element index in data to copy to the compute buffer. |
| graphicsBufferStartIndex | The first element index in compute buffer to receive the data. |
| count | The number of elements to copy. |
| nativeBufferStartIndex | The first element index in data to copy to the compute buffer. |





### Description



Adds a command to process a partial copy of data values from an array into the buffer.





The input data must follow the data layout rules of the graphics API in use. See [Compute Shaders](../Manual/class-ComputeShader.html) for cross-platform compatibility information.

Note: Because only [blittable](https://docs.microsoft.com/en-us/dotnet/framework/interop/blittable-and-non-blittable-types) data types can be copied from the array to the buffer, the array must only contain elements of a blittable type. If you attempt to use non-blittable types, an exception will be raised.


            

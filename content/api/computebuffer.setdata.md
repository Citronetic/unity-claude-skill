This version of Unity is unsupported.



# [ComputeBuffer](ComputeBuffer.html).SetData




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

public void SetData(Array data);






## Declaration

public void SetData(List<T> data);






## Declaration

public void SetData(NativeArray<T> data);






### Parameters



| Parameter | Description |
| --- | --- |
| data | Array of values to fill the buffer. |





### Description



Set the buffer with values from an array.





The input data must follow the data layout rules of the graphics API in use. See [Compute Shaders](../Manual/class-ComputeShader.html) for cross-platform compatibility information.

Note: Because only [blittable](https://docs.microsoft.com/en-us/dotnet/framework/interop/blittable-and-non-blittable-types) data types can be copied from the array to the buffer, the array must only contain elements of a blittable type. If you attempt to use non-blittable types, an exception will be raised.

Additional resources: [GetData](ComputeBuffer.GetData.html), [count](ComputeBuffer-count.html), [stride](ComputeBuffer-stride.html).




---








## Declaration

public void SetData(Array data,
int managedBufferStartIndex,
int computeBufferStartIndex,
int count);






## Declaration

public void SetData(List<T> data,
int managedBufferStartIndex,
int computeBufferStartIndex,
int count);






## Declaration

public void SetData(NativeArray<T> data,
int nativeBufferStartIndex,
int computeBufferStartIndex,
int count);






### Parameters



| Parameter | Description |
| --- | --- |
| data | Array of values to fill the buffer. |
| managedBufferStartIndex | The first element index in data to copy to the compute buffer. |
| computeBufferStartIndex | The first element index in compute buffer to receive the data. |
| count | The number of elements to copy. |





### Description



Partial copy of data values from an array into the buffer.





The input data must follow the data layout rules of the graphics API in use. See [Compute Shaders](../Manual/class-ComputeShader.html) for cross-platform compatibility information.

Note: Because only [blittable](https://docs.microsoft.com/en-us/dotnet/framework/interop/blittable-and-non-blittable-types) data types can be copied from the array to the buffer, the array must only contain elements of a blittable type. If you attempt to use non-blittable types, an exception will be raised.

Additional resources: [GetData](ComputeBuffer.GetData.html), [count](ComputeBuffer-count.html), [stride](ComputeBuffer-stride.html).


            

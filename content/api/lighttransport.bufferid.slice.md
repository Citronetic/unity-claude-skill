This version of Unity is unsupported.



# [BufferID](LightTransport.BufferID.html).Slice




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

public BufferSlice<T> Slice(ulong offset);






### Parameters



| Parameter | Description |
| --- | --- |
| offset | The offset to use for the slice, measured in elements of the specified type. |





### Returns



**BufferSlice<T>**
        A typed slice aliasing the BufferID.





### Description



Constructs a typed slice from the BufferID.





Creates a BufferSlice that provides a typed view into the buffer starting at the specified offset. This is a convenience method equivalent to constructing a BufferSlice manually.

The offset is measured in elements of type T, not in bytes. This method provides type safety and helps prevent common offset calculation errors.

Additional resources: BufferSlice for detailed slice operations and examples.


              


```
// Create a large buffer for mixed data
BufferID sharedBuffer = context.CreateBuffer(1000, sizeof(float));// Create slices using the convenience method
var firstSection = sharedBuffer.Slice<float>(0);     // Elements 0-299
var secondSection = sharedBuffer.Slice<Vector3>(300); // Elements 300-399 as Vector3s// Equivalent to manual BufferSlice construction
var manualSlice = new BufferSlice<float>(sharedBuffer, 0);
Debug.Assert(firstSection.Id.Value == manualSlice.Id.Value);
Debug.Assert(firstSection.Offset == manualSlice.Offset);
```


            

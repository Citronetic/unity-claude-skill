This version of Unity is unsupported.



# BufferSlice<T0> Constructor




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

public BufferSlice<T0>([LightTransport.BufferID](LightTransport.BufferID.html) id,
ulong offset);






### Parameters



| Parameter | Description |
| --- | --- |
| id | ID of the buffer. |
| offset | Offset from the beginning of the buffer, measured in elements of type T. |





### Description



Construct a new BufferSlice struct by defining an offset from the beginning of a buffer. The buffer is defined by the BufferID.





Creates a typed view into a buffer starting at the specified element offset. The offset is measured in elements of the type T, not in bytes.

**Important:** The offset must not exceed the buffer's capacity, and there must be sufficient space for the intended operations. Buffer bounds checking is implementation-dependent.


              


```
// Create a buffer for 1000 Vector3 elements
BufferID buffer = context.CreateBuffer(1000, 12); // 12 bytes per Vector3// Create slices for different portions
var firstHalf = new BufferSlice<Vector3>(buffer, 0);   // Elements 0-499
var secondHalf = new BufferSlice<Vector3>(buffer, 500); // Elements 500-999// Use slices independently
context.WriteBuffer(firstHalf, firstHalfData);
context.WriteBuffer(secondHalf, secondHalfData);
```


            

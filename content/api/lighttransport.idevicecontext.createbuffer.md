This version of Unity is unsupported.



# [IDeviceContext](LightTransport.IDeviceContext.html).CreateBuffer




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

public [LightTransport.BufferID](LightTransport.BufferID.html) CreateBuffer(ulong count,
ulong stride);






### Parameters



| Parameter | Description |
| --- | --- |
| count | Number of elements in the buffer. |
| stride | Size of each element in bytes. |





### Returns



**BufferID**
        Unique identifier for the newly created buffer.





### Description



Allocates a new buffer on the device with the specified element count and stride.





Creates a buffer that can store the specified number of elements, each with the given stride (size in bytes). The actual memory allocation may occur in CPU memory, GPU memory, or unified memory depending on the hardware platform and implementation.

The returned [BufferID](LightTransport.BufferID.html) can be used to create typed BufferSlice objects for reading and writing data.

**Note:** Buffers must be destroyed using DestroyBuffer to avoid memory leaks.


              


```
// Create a buffer for 1000 integers
BufferID bufferId = context.CreateBuffer(1000, sizeof(int));
var intSlice = new BufferSlice<int>(bufferId, 0);// Create a buffer for 500 Vector3 structures
BufferID vectorBuffer = context.CreateBuffer(500, 12); // size is 3 floats * 4 bytes
var vectorSlice = new BufferSlice<Vector3>(vectorBuffer, 0);
```


            

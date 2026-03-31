This version of Unity is unsupported.



# BufferID Constructor




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

public BufferID(ulong value);






### Parameters



| Parameter | Description |
| --- | --- |
| value | The value to construct the BufferID. |





### Description



Create a new BufferID.





Creates a BufferID from a raw value. This constructor can be used to create BufferIDs from handles or pointers.

The value is implementation-specific and can represent:



          - Memory pointers in CPU implementations.

          - GPU buffer handles in GPU implementations.

          - Indices into internal buffer tables or other implementation-defined identifiers.





**Note:** This is an advanced feature that permits unsafe code for advanced use cases. BufferIDs should typically be obtained through [IDeviceContext.CreateBuffer](LightTransport.IDeviceContext.CreateBuffer.html) rather than constructing them manually.


            

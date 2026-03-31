This version of Unity is unsupported.



# [RadeonRaysContext](LightTransport.RadeonRaysContext.html).DestroyBuffer




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

public void DestroyBuffer([LightTransport.BufferID](LightTransport.BufferID.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | ID of the buffer to destroy. |





### Description



Destroy the buffer with the given ID.


              


```
using UnityEngine.LightTransport;IDeviceContext ctx = new RadeonRaysContext();
ctx.Initialize();
const int sizeInBytes = 4;
var bufferID = ctx.CreateBuffer(sizeInBytes);
ctx.DestroyBuffer(bufferID);
ctx.Dispose();
```





How to destroy a buffer.


            

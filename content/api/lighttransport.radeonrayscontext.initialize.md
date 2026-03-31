This version of Unity is unsupported.



# [RadeonRaysContext](LightTransport.RadeonRaysContext.html).Initialize




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

public bool Initialize();






### Returns



**bool**
        True if the device context was initialized successfully.





### Description



Initialize the device context.





[RadeonRaysContext](LightTransport.RadeonRaysContext.html) implements the [IDeviceContext](LightTransport.IDeviceContext.html) interface. It uses the RadeonRays SDK for intersection testing and the OpenCL 1.2 API for compute.
When initializing the context, Unity compiles the compute kernels.


              


```
using UnityEngine.LightTransport;using var ctx = new RadeonRaysContext();
ctx.Initialize();
```





How to initialize the context.


            

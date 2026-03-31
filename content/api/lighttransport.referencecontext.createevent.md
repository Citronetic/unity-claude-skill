This version of Unity is unsupported.



# [ReferenceContext](LightTransport.ReferenceContext.html).CreateEvent




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

public [LightTransport.EventID](LightTransport.EventID.html) CreateEvent();






### Returns



**EventID**
        ID of newly created event.





### Description



Creates a new event.





The event may be passed to [IDeviceContext.ReadBuffer](LightTransport.IDeviceContext.ReadBuffer.html) and [IDeviceContext.WriteBuffer](LightTransport.IDeviceContext.WriteBuffer.html) to track when the corresponding read or write finishes. Once the event is no longer needed, it should be destroyed using [IDeviceContext.DestroyEvent](LightTransport.IDeviceContext.DestroyEvent.html).


            

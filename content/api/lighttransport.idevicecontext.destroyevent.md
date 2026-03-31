This version of Unity is unsupported.



# [IDeviceContext](LightTransport.IDeviceContext.html).DestroyEvent




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

public void DestroyEvent([LightTransport.EventID](LightTransport.EventID.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | ID of the event to destroy. |





### Description



Destroy the event with the given ID. You should call this to free temporary resources associated with an event. Attempting to use the event after it has been destroyed, for example using [IDeviceContext.Wait](LightTransport.IDeviceContext.Wait.html) or [IDeviceContext.IsCompleted](LightTransport.IDeviceContext.IsCompleted.html) will result in undefined behavior.


            

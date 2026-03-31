This version of Unity is unsupported.



# [IDeviceContext](LightTransport.IDeviceContext.html).IsCompleted




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

public bool IsCompleted([LightTransport.EventID](LightTransport.EventID.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | ID of the event to query. |





### Returns



**bool**
        True if the asynchronous operation has completed.





### Description



Returns true if the asynchronous operation completed.





This method returns immediately and does not wait for the operation to complete. Use Flush to force the device implementation to start processing commands. Use [IDeviceContext.Wait](LightTransport.IDeviceContext.Wait.html) to busy-wait for a specific event.


            

This version of Unity is unsupported.



# [XRStats](XR.XRStats.html).TryGetFramePresentCount




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

public static bool TryGetFramePresentCount(out int framePresentCount);






### Parameters



| Parameter | Description |
| --- | --- |
| framePresentCount | Outputs the number of times the current frame has been presented. |





### Returns



**bool**
        True if the frame present count is available, false otherwise.





### Description



Retrieves the number of times the current frame has been drawn to the device as reported by the XR SDK.





If performance degrades, some SDKs may choose to draw the current frame multiple times with or without some kind of adaptation to compensate. The frame present count can tell if the SDK has presented the same frame to the viewer multiple times.

Statistics are not always available and can vary based on hardware, SDK, and even frame to frame. As such it is important to check the return value of this method before using the statistic value from the out parameter.


            

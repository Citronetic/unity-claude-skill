This version of Unity is unsupported.



# [XRStats](XR.XRStats.html).TryGetDroppedFrameCount




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

public static bool TryGetDroppedFrameCount(out int droppedFrameCount);






### Parameters



| Parameter | Description |
| --- | --- |
| droppedFrameCount | Outputs the number of frames dropped since the last update. |





### Returns



**bool**
        True if the dropped frame count is available, false otherwise.





### Description



Retrieves the number of dropped frames reported by the XR SDK.





The number of dropped frames can be useful to games or applications that wish to dynamically scale content or settings in order to maximize frame rate. It is important for XR applications to run at a consistent, high frame rate. If an application is drawing too much or making too many calculations, it may be unable to maintain a high frame rate and "drop" frames. When the SDK reports that frames are being dropped, the game or application can adjust settings, disable objects, or perform other actions to reduce overhead.

Statistics are not always available and can vary based on hardware, SDK, and even frame to frame. As such it is important to check the return value of this method before using the statistic value from the out parameter.


            

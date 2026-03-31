This version of Unity is unsupported.



# [VFXManager](VFX.VFXManager.html).IsCameraBufferNeeded




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

public static [VFX.VFXCameraBufferTypes](VFX.VFXCameraBufferTypes.html) IsCameraBufferNeeded([Camera](Camera.html) cam);






### Parameters



| Parameter | Description |
| --- | --- |
| cam | The Camera for which to query needed buffers. |





### Returns



**VFXCameraBufferTypes**
        A list of all needed buffer flags.





### Description



Queries which buffers the VFX Manager needs for the given Camera.





Use this call to make your custom SRP support screen space effects in VFX Graph.


            

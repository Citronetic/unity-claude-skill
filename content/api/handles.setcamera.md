This version of Unity is unsupported.



# [Handles](Handles.html).SetCamera




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

public static void SetCamera([Camera](Camera.html) camera);






## Declaration

public static void SetCamera([Rect](Rect.html) position,
[Camera](Camera.html) camera);






### Description



Set the current camera so all Handles and Gizmos are draw with its settings.





Sets [Camera.current](Camera-current.html) to be `camera` and sets its pixelRect.. This does not draw the camera, only sets it to be "active". To draw it use [DrawCamera](Handles.DrawCamera.html).


            

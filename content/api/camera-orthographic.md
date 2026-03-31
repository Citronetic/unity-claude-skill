This version of Unity is unsupported.



# [Camera](Camera.html).orthographic




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public bool orthographic;






### Description



Is the camera orthographic (*true*) or perspective (*false*)?





When ortho is *true*, camera's viewing volume is defined by [orthographicSize](Camera-orthographicSize.html).

When orthographic is *false*, camera's viewing volume is defined by [fieldOfView](Camera-fieldOfView.html).

NOTE: Deferred rendering is not supported when using Orthographic projection. If the camera's projection mode is set to Orthographic, the camera will always use Forward rendering.

Additional resources: [camera component](../Manual/class-Camera.html), [transparencySortMode](Camera-transparencySortMode.html).


            

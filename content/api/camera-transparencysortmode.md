This version of Unity is unsupported.



# [Camera](Camera.html).transparencySortMode




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







                    public [TransparencySortMode](TransparencySortMode.html) transparencySortMode;






### Description



Transparent object sorting mode.





By default, perspective Cameras sort objects based on distance from Camera position
to the object pivot; and orthographic Cameras sort based on distance along the view direction.

If you're making a 2D game with a perspective Camera, you might want to use [TransparencySortMode.Orthographic](TransparencySortMode.Orthographic.html)
sort mode so that objects are sorted based on distance along the Camera's view.

Additional resources: [TransparencySortMode](TransparencySortMode.html) enum, [opaqueSortMode](Camera-opaqueSortMode.html).


            

This version of Unity is unsupported.



# [ModelImporterClipAnimation](ModelImporterClipAnimation.html).loopTime




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












                    public bool loopTime;






### Description



Controls whether Unity blends the first and last frames to create smooth time-based looping.





This property specifically handles the temporal aspect of looping by ensuring smooth transitions between the end and beginning of the animation clip.

When enabled, Unity analyzes the first and last frames of the animation and applies blending to eliminate discontinuities in the animation curves over time. This prevents jarring jumps when the animation loops.

This differs from [ModelImporterClipAnimation.loop](ModelImporterClipAnimation-loop.html) which simply determines whether the clip repeats, and [ModelImporterClipAnimation.loopPose](ModelImporterClipAnimation-loopPose.html) which handles pose blending for spatial continuity.

Typically used in combination with `loop = true` for cyclical animations where temporal smoothness is important, such as walk cycles or ambient animations.


            

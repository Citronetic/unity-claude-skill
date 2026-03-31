This version of Unity is unsupported.



# [AnimationMode](AnimationMode.html).StopAnimationMode




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

public static void StopAnimationMode();






## Declaration

public static void StopAnimationMode([AnimationModeDriver](AnimationModeDriver.html) driver);






### Parameters



| Parameter | Description |
| --- | --- |
| driver | An AnimationModeDriver object must be specified if one was specified when the Animation mode was started (StartAnimationMode.) |





### Description



Stops the Animation mode and reverts any properties that were animated while in Animation mode.





When in Animation mode, property animations are stored by calling the AnimationMode.SampleClip or [AnimationMode.AddPropertyModification](AnimationMode.AddPropertyModification.html) methods. This method, [StopAnimationMode](AnimationMode.StopAnimationMode.html), reverts these property animations.


            

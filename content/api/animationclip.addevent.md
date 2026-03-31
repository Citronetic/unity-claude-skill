This version of Unity is unsupported.



# [AnimationClip](AnimationClip.html).AddEvent




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




                [Switch to Manual](../Manual/class-AnimationClip.html)










## Declaration

public void AddEvent([AnimationEvent](AnimationEvent.html) evt);






### Parameters



| Parameter | Description |
| --- | --- |
| evt | AnimationEvent to add. |





### Description



Adds an animation event to the clip.





Note that events added with AddEvent persist until play mode
is exited or the is player quit. If you want to add an event to a clip persistently,
use [AnimationUtility.SetAnimationEvents](AnimationUtility.SetAnimationEvents.html) from the Unity editor.

Additional resources: [AnimationEvent](AnimationEvent.html), [AnimationUtility](AnimationUtility.html) classes.


            

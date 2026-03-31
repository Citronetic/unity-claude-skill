This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).Play




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

public void Play([VFX.VFXEventAttribute](VFX.VFXEventAttribute.html) eventAttribute);






## Declaration

public void Play();






### Parameters



| Parameter | Description |
| --- | --- |
| eventAttribute | Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VisualEffect.CreateVFXEventAttribute. |





### Description



Use this method to send a play event to every Spawn system.





This call is equivalent to [VisualEffect.SendEvent](VFX.VisualEffect.SendEvent.html)("OnPlay");


            

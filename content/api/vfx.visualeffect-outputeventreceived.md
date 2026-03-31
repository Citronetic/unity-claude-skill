This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).outputEventReceived




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












                    public Action<VFXOutputEventArgs> outputEventReceived;






### Description



Output event are reported trough this callback.





If you need to store the [VFXEventAttribute](VFX.VFXEventAttribute.html) in the VisualEffect.OutputEventArgs, use the copy constructor of [VFXEventAttribute](VFX.VFXEventAttribute.html) or retrieve the value immediately. This is necessary because Unity recycles the [VFXEventAttribute](VFX.VFXEventAttribute.html).


            

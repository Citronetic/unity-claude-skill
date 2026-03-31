This version of Unity is unsupported.



# [VFXManager](VFX.VFXManager.html).fixedTimeStep




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












                    public static float fixedTimeStep;






### Description



The fixed interval in which the frame rate updates. The tick rate is in seconds.





At run-time, [Time.timeScale](Time-timeScale.html) affects the `fixedDeltaTime` and `deltaTime` intervals. These values are less than or equal to [VFXManager.maxDeltaTime](VFX.VFXManager-maxDeltaTime.html).

The `fixedDeltaTime` interval can be an integer multiple of [VFXManager.fixedTimeStep](VFX.VFXManager-fixedTimeStep.html).


            

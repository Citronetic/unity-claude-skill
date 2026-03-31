This version of Unity is unsupported.



# [JointAngularLimitHandle](IMGUI.Controls.JointAngularLimitHandle.html).xMin




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












                    public float xMin;






### Description



Returns or specifies the minimum angular motion about the x-axis.





The value returned by this property depends on the current value of the [xMotion](IMGUI.Controls.JointAngularLimitHandle-xMotion.html) property. If it is [ConfigurableJointMotion.Locked](ConfigurableJointMotion.Locked.html), then it will always return 0. If it is [ConfigurableJointMotion.Free](ConfigurableJointMotion.Free.html), then it will always return the lower limit of [xRange](IMGUI.Controls.JointAngularLimitHandle-xRange.html). If it is [ConfigurableJointMotion.Limited](ConfigurableJointMotion.Limited.html), then it will be clamped between the lower limit of [xRange](IMGUI.Controls.JointAngularLimitHandle-xRange.html) and the current value of [xMax](IMGUI.Controls.JointAngularLimitHandle-xMax.html).

Additional resources: [xMax](IMGUI.Controls.JointAngularLimitHandle-xMax.html), [xMotion](IMGUI.Controls.JointAngularLimitHandle-xMotion.html), [xRange](IMGUI.Controls.JointAngularLimitHandle-xRange.html).


            

This version of Unity is unsupported.



# [JointAngularLimitHandle](IMGUI.Controls.JointAngularLimitHandle.html).yMax




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












                    public float yMax;






### Description



Returns or specifies the maximum angular motion about the y-axis.





The value returned by this property depends on the current value of the [yMotion](IMGUI.Controls.JointAngularLimitHandle-yMotion.html) property. If it is [ConfigurableJointMotion.Locked](ConfigurableJointMotion.Locked.html), then it will always return 0. If it is [ConfigurableJointMotion.Free](ConfigurableJointMotion.Free.html), then it will always return the upper limit of [yRange](IMGUI.Controls.JointAngularLimitHandle-yRange.html). If it is [ConfigurableJointMotion.Limited](ConfigurableJointMotion.Limited.html), then it will be clamped between the upper limit of [yRange](IMGUI.Controls.JointAngularLimitHandle-yRange.html) and the current value of [yMin](IMGUI.Controls.JointAngularLimitHandle-yMin.html).

Additional resources: [yMin](IMGUI.Controls.JointAngularLimitHandle-yMin.html), [yMotion](IMGUI.Controls.JointAngularLimitHandle-yMotion.html), [yRange](IMGUI.Controls.JointAngularLimitHandle-yRange.html).


            

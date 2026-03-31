This version of Unity is unsupported.



# JointBreakAction2D





enumeration


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



















### Description



Options for selecting which action to take when a [Joint2D](Joint2D.html) breaks.





Additional resources: [Joint2D.breakAction](Joint2D-breakAction.html), [Joint2D.breakForce](Joint2D-breakForce.html) or [Joint2D.breakTorque](Joint2D-breakTorque.html).





### Properties



| Property | Description |
| --- | --- |
| Ignore | When the Joint2D breaks, no action will be taken and Joint2D.OnJointBreak2D will not be called. |
| CallbackOnly | When the Joint2D breaks, call Joint2D.OnJointBreak2D but take no other action. |
| Disable | When the Joint2D breaks, call Joint2D.OnJointBreak2D and then disable the component. |
| Destroy | When the Joint2D breaks, call Joint2D.OnJointBreak2D and then destroy the component. |


            

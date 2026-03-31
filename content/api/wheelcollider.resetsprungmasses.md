This version of Unity is unsupported.



# [WheelCollider](WheelCollider.html).ResetSprungMasses




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




                [Switch to Manual](../Manual/class-WheelCollider.html)










## Declaration

public void ResetSprungMasses();






### Description



Reset the sprung masses of the vehicle.





Recomputes the sprung masses of all wheels of the vehicle this wheel belongs to. In addition, it clears the internal explicit sprung mass distribution flag if that was raised before by calling [WheelCollider.sprungMass](WheelCollider-sprungMass.html). Note that because this function works with the vehicle itself but not just one wheel, it's enough to call it once for a vehicle, invoked with any wheel.


            

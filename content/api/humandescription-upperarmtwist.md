This version of Unity is unsupported.



# [HumanDescription](HumanDescription.html).upperArmTwist




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












                    public float upperArmTwist;






### Description



Defines how the upper arm's roll/twisting is distributed between the shoulder and elbow joints.





When the upper arm needs to twist or roll based on IK, `upperArmTwist` (a weighted range of 0..1) determines how much rotation is applied to the shoulder and elbow. When `upperArmTwist` is set to 0, the twist applies entirely to the shoulder. When set to 1, the twist applies entirely to the elbow. The default value of 0.5 evenly distributes the twist between both the shoulder and the elbow.

Additional resources: [HumanDescription.lowerArmTwist](HumanDescription-lowerArmTwist.html), [HumanDescription.lowerLegTwist](HumanDescription-lowerLegTwist.html), [HumanDescription.upperLegTwist](HumanDescription-upperLegTwist.html).


            

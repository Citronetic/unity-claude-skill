This version of Unity is unsupported.



# [JointLimits](JointLimits.html).bounciness




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












                    public float bounciness;






### Description



Determines the size of the bounce when the joint hits it's limit. Also known as restitution.





Additional resources: [bounceMinVelocity](JointLimits-bounceMinVelocity.html).

The **size** of the new velocity after the bounce will be determined as:

`newVelocity = currentVelocity * bounciness`.

When opening an old project using the deprecated `maxBounce` and `minBounce` the new `bounciness` will be chosen as the maximum `maxBounce` and `minBounce`.


            

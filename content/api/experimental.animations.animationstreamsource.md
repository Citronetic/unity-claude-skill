This version of Unity is unsupported.



# AnimationStreamSource





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



Describes how an [AnimationStream](Animations.AnimationStream.html) is initialized





On every frame, the values in the [AnimationStream](Animations.AnimationStream.html) must be reinitialized. [AnimationStreamSource](Experimental.Animations.AnimationStreamSource.html) describes which values should be used: the default values as stored in the [Animator](Animator.html), or the result of previous inputs.





### Properties



| Property | Description |
| --- | --- |
| DefaultValues | AnimationStream will be initialized with the default values from the Animator. |
| PreviousInputs | AnimationStream will be initialized with the values from the previous AnimationPlayableOutput connected to the same Animator. |


            

This version of Unity is unsupported.



# [PlayableBinding](Playables.PlayableBinding.html).outputTargetType




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












                    public Type outputTargetType;






### Description



The type of target required by the [PlayableOutput](Playables.PlayableOutput.html) for this PlayableBinding.





For example, the [AnimationPlayableBinding.Create](Animations.AnimationPlayableBinding.Create.html) method returns a PlayableBinding where the outputTargetType is typeof(Animator). If the binding represents a [ScriptPlayableOutput](Playables.ScriptPlayableOutput.html), the outputTargetType corresponds with the type parameter passed in [ScriptPlayableOutput.Create](Playables.ScriptPlayableOutput.Create.html).


            

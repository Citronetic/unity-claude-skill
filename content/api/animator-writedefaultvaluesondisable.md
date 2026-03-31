This version of Unity is unsupported.



# [Animator](Animator.html).writeDefaultValuesOnDisable




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




                [Switch to Manual](../Manual/class-Animator.html)







                    public bool writeDefaultValuesOnDisable;






### Description



Specifies whether playable graph values are reset or preserved when the [Animator](Animator.html) is disabled.





Set this property to true to reset the playable graph to its default values when the [Animator](Animator.html) is disabled.

Set to this property to false (default value) to preserve the current state and values of the playable graph, and to call the [Animator.WriteDefaultValues](Animator.WriteDefaultValues.html) method when the [Animator](Animator.html) is disabled.

Setting this property to false also preserves animated values when a GameObject is disabled. For example, if a GameObject has animated values from x=0 to x=3, when the GameObject is disabled, it preserves the animated value x=3.

This property is serializable. You can save it in a Prefab.


            

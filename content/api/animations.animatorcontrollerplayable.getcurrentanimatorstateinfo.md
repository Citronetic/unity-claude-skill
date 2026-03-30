This version of Unity is unsupported.



# [AnimatorControllerPlayable](Animations.AnimatorControllerPlayable.html).GetCurrentAnimatorStateInfo




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















## Declaration

public [AnimatorStateInfo](AnimatorStateInfo.html) GetCurrentAnimatorStateInfo(int layerIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| layerIndex | The layer index. |





### Returns



**AnimatorStateInfo**
        An [AnimatorStateInfo](AnimatorStateInfo.html) with the information on the current state.





### Description



Returns an [AnimatorStateInfo](AnimatorStateInfo.html) with the information on the current state.





Fetches the data from the current state in the AnimatorController. Use this to get details from the state, including accessing the state’s speed, length, name and other variables. For gathering information from the clips that the states hold, see [AnimatorControllerPlayable.GetCurrentAnimatorClipInfo](Animations.AnimatorControllerPlayable.GetCurrentAnimatorClipInfo.html).


            

This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AnimationPlayableOutputExtensions](Experimental.Animations.AnimationPlayableOutputExtensions.html).SetAnimationStreamSource




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

public static void SetAnimationStreamSource([Animations.AnimationPlayableOutput](Animations.AnimationPlayableOutput.html) output,
[Experimental.Animations.AnimationStreamSource](Experimental.Animations.AnimationStreamSource.html) streamSource);






### Parameters



| Parameter | Description |
| --- | --- |
| output | The AnimationPlayableOutput instance that calls this method. |
| streamSource | The AnimationStreamSource to apply on this output. |





### Description



Sets the stream source for the specified [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html).





When setting the [AnimationStreamSource](Experimental.Animations.AnimationStreamSource.html) of the output to [AnimationStreamSource.DefaultValues](Experimental.Animations.AnimationStreamSource.DefaultValues.html), the [AnimationStream](Animations.AnimationStream.html) of this output initalizes every frame with the default values of the [Animator](Animator.html).

When setting the [AnimationStreamSource](Experimental.Animations.AnimationStreamSource.html) of the output to [AnimationStreamSource.PreviousInputs](Experimental.Animations.AnimationStreamSource.PreviousInputs.html), the [AnimationStream](Animations.AnimationStream.html) of this output initalizes every frame with the result of any previously evaluated outputs on the same [Animator](Animator.html).

If you use the graph connected to an [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html) to post-process the result of other Animation graphs connected to the same [Animator](Animator.html), you should use [AnimationStreamSource.PreviousInputs](Experimental.Animations.AnimationStreamSource.PreviousInputs.html). For example, if you use the [AnimationStream](Animations.AnimationStream.html) to build an Inverse Kinematics constraint to post-process the built-in [AnimatorController](Animations.AnimatorController.html), your [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html) should be set to [AnimationStreamSource.PreviousInputs](Experimental.Animations.AnimationStreamSource.PreviousInputs.html).

In order to start the [AnimationStream](Animations.AnimationStream.html) from a blank slate, you should use [AnimationStreamSource.DefaultValues](Experimental.Animations.AnimationStreamSource.DefaultValues.html).
For example, to build a custom animation source starting from the default pose, the [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html) should be set to [AnimationStreamSource.DefaultValues](Experimental.Animations.AnimationStreamSource.DefaultValues.html).

Additional resources: [AnimationStreamSource](Experimental.Animations.AnimationStreamSource.html).


            

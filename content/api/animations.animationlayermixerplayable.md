This version of Unity is unsupported.



# AnimationLayerMixerPlayable





struct in
          UnityEngine.Animations



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


                  Leave feedback





Implements interfaces:[IPlayable](Playables.IPlayable.html)




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



An implementation of [IPlayable](Playables.IPlayable.html) that controls an animation layer mixer.





NOTE: You can use [PlayableExtensions](Playables.PlayableExtensions.html) methods with AnimationLayerMixerPlayable objects.





### Static Properties



| Property | Description |
| --- | --- |
| Null | Returns an invalid AnimationLayerMixerPlayable. |





### Public Methods



| Method | Description |
| --- | --- |
| IsLayerAdditive | Returns true if the layer is additive, false otherwise. |
| SetLayerAdditive | Specifies whether a layer is additive or not. Additive layers blend with previous layers. |
| SetLayerMaskFromAvatarMask | Sets the mask for the current layer. |





### Static Methods



| Method | Description |
| --- | --- |
| Create | Creates an AnimationLayerMixerPlayable in the PlayableGraph. |


            

This version of Unity is unsupported.



# AnimationStream





struct in
          UnityEngine.Animations



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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



The stream of animation data passed from one [Playable](Playables.Playable.html) to another.





The AnimationStream structure is passed through the animation [Playable](Playables.Playable.html) structures, like [AnimationClipPlayable](Animations.AnimationClipPlayable.html) and [AnimationMixerPlayable](Animations.AnimationMixerPlayable.html). They can be modified when used with an [IAnimationJobPlayable](Animations.IAnimationJobPlayable.html), like the [AnimationScriptPlayable](Animations.AnimationScriptPlayable.html).

The Playables implementing [IAnimationJobPlayable](Animations.IAnimationJobPlayable.html) take a custom C# job, which must implement [IAnimationJob](Animations.IAnimationJob.html), and the AnimationStream is then passed to its callbacks during the animation processing pass.

Additional resources: [IAnimationJob](Animations.IAnimationJob.html), [AnimationScriptPlayable](Animations.AnimationScriptPlayable.html), [TransformStreamHandle](Animations.TransformStreamHandle.html), [PropertyStreamHandle](Animations.PropertyStreamHandle.html), [TransformSceneHandle](Animations.TransformSceneHandle.html), and [PropertySceneHandle](Animations.PropertySceneHandle.html).





### Properties



| Property | Description |
| --- | --- |
| angularVelocity | Gets or sets the avatar angular velocity for the evaluated frame. |
| deltaTime | Gets the delta time for the evaluated frame. (Read Only) |
| inputStreamCount | Gets the number of input streams. (Read Only) |
| isHumanStream | Returns true if the stream is from a humanoid avatar; false otherwise. (Read Only) |
| isValid | Returns true if the stream is valid; false otherwise. (Read Only) |
| rootMotionPosition | Gets the root motion position for the evaluated frame. (Read Only) |
| rootMotionRotation | Gets the root motion rotation for the evaluated frame. (Read Only) |
| velocity | Gets or sets the avatar velocity for the evaluated frame. |





### Public Methods



| Method | Description |
| --- | --- |
| AsHuman | Gets the same stream, but as an AnimationHumanStream. |
| CopyAnimationStreamMotion | Deep copies motion from a source animation stream to the current animation stream. |
| GetInputStream | Gets the AnimationStream of the playable input at index. |
| GetInputWeight | Gets the weight of the Playable connected at a specific input index. |


            

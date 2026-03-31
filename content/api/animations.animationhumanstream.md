This version of Unity is unsupported.



# AnimationHumanStream





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



The humanoid stream of animation data passed from one [Playable](Playables.Playable.html) to another.





The AnimationHumanStream structure is passed through the animation [Playable](Playables.Playable.html) structures, like [AnimationClipPlayable](Animations.AnimationClipPlayable.html) and [AnimationMixerPlayable](Animations.AnimationMixerPlayable.html). They can be modified when used with an [IAnimationJobPlayable](Animations.IAnimationJobPlayable.html), like the [AnimationScriptPlayable](Animations.AnimationScriptPlayable.html).

The Playables implementing [IAnimationJobPlayable](Animations.IAnimationJobPlayable.html) take a custom C# job, which must implement [IAnimationJob](Animations.IAnimationJob.html), and the AnimationHumanStream is then passed to its callbacks during the animation processing pass.

Additional resources: [AnimationStream](Animations.AnimationStream.html), [AnimationStream.isHumanStream](Animations.AnimationStream-isHumanStream.html), and AnimationStream.AsHuman().





### Properties



| Property | Description |
| --- | --- |
| bodyLocalPosition | The position of the body center of mass relative to the root. |
| bodyLocalRotation | The rotation of the body center of mass relative to the root. |
| bodyPosition | The position of the body center of mass in world space. |
| bodyRotation | The rotation of the body center of mass in world space. |
| humanScale | The scale of the Avatar. (Read Only) |
| isValid | Returns true if the stream is valid; false otherwise. (Read Only) |
| leftFootHeight | The left foot height from the floor. (Read Only) |
| leftFootVelocity | The left foot velocity from the last evaluated frame. (Read Only) |
| rightFootHeight | The right foot height from the floor. (Read Only) |
| rightFootVelocity | The right foot velocity from the last evaluated frame. (Read Only) |





### Public Methods



| Method | Description |
| --- | --- |
| GetGoalLocalPosition | Returns the position of this IK goal relative to the root. |
| GetGoalLocalRotation | Returns the rotation of this IK goal relative to the root. |
| GetGoalPosition | Returns the position of this IK goal in world space. |
| GetGoalPositionFromPose | Returns the position of this IK goal in world space computed from the stream current pose. |
| GetGoalRotation | Returns the rotation of this IK goal in world space. |
| GetGoalRotationFromPose | Returns the rotation of this IK goal in world space computed from the stream current pose. |
| GetGoalWeightPosition | Returns the position weight of the IK goal. |
| GetGoalWeightRotation | Returns the rotation weight of the IK goal. |
| GetHintPosition | Returns the position of this IK Hint in world space. |
| GetHintWeightPosition | Returns the position weight of the IK Hint. |
| GetMuscle | Returns the muscle value. |
| ResetToStancePose | Reset the current pose to the stance pose (T Pose). |
| SetGoalLocalPosition | Sets the position of this IK goal relative to the root. |
| SetGoalLocalRotation | Sets the rotation of this IK goal relative to the root. |
| SetGoalPosition | Sets the position of this IK goal in world space. |
| SetGoalRotation | Sets the rotation of this IK goal in world space. |
| SetGoalWeightPosition | Sets the position weight of the IK goal. |
| SetGoalWeightRotation | Sets the rotation weight of the IK goal. |
| SetHintPosition | Sets the position of this IK hint in world space. |
| SetHintWeightPosition | Sets the position weight of the IK Hint. |
| SetLookAtBodyWeight | Sets the LookAt body weight. |
| SetLookAtClampWeight | Sets the LookAt clamp weight. |
| SetLookAtEyesWeight | Sets the LookAt eyes weight. |
| SetLookAtHeadWeight | Sets the LookAt head weight. |
| SetLookAtPosition | Sets the look at position in world space. |
| SetMuscle | Sets the muscle value. |
| SolveIK | Execute the IK solver. |


            

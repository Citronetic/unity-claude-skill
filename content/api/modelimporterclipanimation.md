This version of Unity is unsupported.



# ModelImporterClipAnimation





class in
          UnityEditor


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



Animation clips to split animation into.





### Properties



| Property | Description |
| --- | --- |
| additiveReferencePoseFrame | The additive reference pose frame. |
| curves | Additionnal curves that will be that will be added during the import process. |
| cycleOffset | Offset to the cycle of a looping animation, if a different time in it is desired to be the start. |
| events | AnimationEvents that will be added during the import process. |
| firstFrame | First frame of the clip. |
| hasAdditiveReferencePose | Enable to defines an additive reference pose. |
| heightFromFeet | Keeps the feet aligned with the root transform position. |
| heightOffset | Offset to the vertical root position. |
| keepOriginalOrientation | Keeps the vertical position as it is authored in the source file. |
| keepOriginalPositionXZ | Keeps the vertical position as it is authored in the source file. |
| keepOriginalPositionY | Keeps the vertical position as it is authored in the source file. |
| lastFrame | Last frame of the clip. |
| lockRootHeightY | Enable to make vertical root motion be baked into the movement of the bones. Disable to make vertical root motion be stored as root motion. |
| lockRootPositionXZ | Enable to make horizontal root motion be baked into the movement of the bones. Disable to make horizontal root motion be stored as root motion. |
| lockRootRotation | Enable to make root rotation be baked into the movement of the bones. Disable to make root rotation be stored as root motion. |
| loop | Determines whether the animation clip should loop continuously. |
| loopPose | Enable to make the motion loop seamlessly. |
| loopTime | Controls whether Unity blends the first and last frames to create smooth time-based looping. |
| maskNeedsUpdating | Returns true when the source AvatarMask has changed. This only happens when  ModelImporterClipAnimation.maskType is set to ClipAnimationMaskType.CopyFromOther
To force a reload of the mask, simply set  ModelImporterClipAnimation.maskSource to the desired AvatarMask. |
| maskSource | The AvatarMask used to mask transforms during the import process. |
| maskType | Define mask type. |
| mirror | Mirror left and right in this clip. |
| name | Clip name. |
| rotationOffset | Offset in degrees to the root rotation. |
| takeName | Take name. |
| wrapMode | The wrap mode of the animation. |





### Public Methods



| Method | Description |
| --- | --- |
| ConfigureClipFromMask | Copy the mask settings from an AvatarMask to the clip configuration. |
| ConfigureMaskFromClip | Copy the current masking settings from the clip to an AvatarMask. |


            

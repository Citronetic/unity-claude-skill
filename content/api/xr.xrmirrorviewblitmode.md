This version of Unity is unsupported.



# XRMirrorViewBlitMode





struct in
          UnityEngine.XR



/



Implemented in:[UnityEngine.XRModule](UnityEngine.XRModule.html)


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



Engine reserved blit modes. Blit mode capabilities should be queried from [XRDisplaySubsystemDescriptor.GetAvailableMirrorBlitModeCount](XR.XRDisplaySubsystemDescriptor.GetAvailableMirrorBlitModeCount.html) and [XRDisplaySubsystemDescriptor.GetMirrorBlitModeByIndex](XR.XRDisplaySubsystemDescriptor.GetMirrorBlitModeByIndex.html).





### Static Properties



| Property | Description |
| --- | --- |
| Default | Mirror view pass should blit platform default image to the mirror target. |
| Distort | Mirror view pass should blit after distortion pass image to the mirror target. |
| LeftEye | Mirror view pass should blit left eye image to the mirror target. |
| MotionVectors | Mirror view pass should blit left eye image and right eye image in a side-by-side fashion to the mirror target, displaying motion vectors. |
| None | Mirror view pass should not be performed. |
| RightEye | Mirror view pass should blit right eye image to the mirror target. |
| SideBySide | Mirror view pass should blit left eye image and right eye image in a side-by-side fashion to the mirror target. |
| SideBySideOcclusionMesh | Mirror view pass should blit similar to side-by-side mode, but also showing not rendered pixels saved by the occlusion mesh. |


            

This version of Unity is unsupported.



# LODFadeMode





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



The LOD (level of detail) fade modes. Modes other than [LODFadeMode.None](LODFadeMode.None.html) will result in Unity calculating a blend factor for blending/interpolating between two neighbouring LODs and pass it to your shader.





### Properties



| Property | Description |
| --- | --- |
| None | Indicates the LOD fading is turned off. |
| CrossFade | Perform cross-fade style blending between the current LOD and the next LOD if the distance to camera falls in the range specified by the LOD.fadeTransitionWidth of each LOD. |
| SpeedTree | By specifying this mode, your LODGroup will perform a SpeedTree-style LOD fading scheme:For all the mesh LODs other than the last (most crude) mesh LOD, the fade factor is calculated as the percentage of the object's current screen height, compared to the whole range of the LOD. It is 1, if the camera is right at the position where the previous LOD switches out and 0, if the next LOD is just about to switch in.For the last mesh LOD and the billboard LOD, the cross-fade mode is used. |


            

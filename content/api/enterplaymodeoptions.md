This version of Unity is unsupported.



# EnterPlayModeOptions





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



Determines the flags for the Enter Play Mode Options in the Unity Editor.





### Properties



| Property | Description |
| --- | --- |
| None | This makes Unity reload the .NET Application Domain and entire Scene when entering Play Mode. |
| DisableDomainReload | When Domain Reload is disabled, scripts are not reloaded when entering Play Mode. This makes it quicker to switch to Play Mode, because there's no need to destroy, create and reload the .NET Application Domain. |
| DisableSceneReload | When Scene Reload is disabled, Unity resets the Scene state and emulates all of the required post-processor calls when entering Play Mode, instead of reloading the whole Scene. This makes it quicker to switch to Play Mode, because there's no need to destroy, create and awaken all the Scene objects, and serialize and deserialize the Scene from disk. |


            

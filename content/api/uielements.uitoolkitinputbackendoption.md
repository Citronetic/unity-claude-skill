This version of Unity is unsupported.



# UIToolkitInputBackendOption





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



Input backend options for UI Toolkit events at runtime.





### Properties



| Property | Description |
| --- | --- |
| Default | The initial configuration on UI Toolkit start up. This is equal to
 InputSystemCompatibleBackend.
 This option will use the Input System package is available, and the old Input Manager if not. |
| InputSystemCompatibleBackend | The new Input System compatible backend allows the Input System package to send its input to UI Toolkit
 directly, removing the need for an UnityEngine.EventSystems.EventSystem in the user scene.
 This option will use the Input System package is available, and the old Input Manager if not. |
| LegacyBackend | The legacy backend relies on the Input Manager UnityEngine.Input class only and is not
 compatible with the Input System package. This option will always try to use the old Input Manager.
 If the Input Manager is not enabled as an active input handler, UI Toolkit runtime events will not work. |


            

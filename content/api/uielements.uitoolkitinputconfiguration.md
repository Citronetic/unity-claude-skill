This version of Unity is unsupported.



# UIToolkitInputConfiguration





class in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Global configuration options for UI Toolkit input.





### Static Methods



| Method | Description |
| --- | --- |
| SetRuntimeInputBackend | Use this method to activate one of the two input backends available for UIToolkit events at runtime.
 The new Input System compatible backend allows the Input System package to send its input to UI Toolkit
 directly, removing the need for an UnityEngine.EventSystems.EventSystem in the user scene,
 and will automatically fall back to Input Manager input if the Input System package input isn't enabled in
 the Player Settings active input handling.
 Alternatively, use the legacy backend to always rely on Input Manager input only. In that case,
 if the Input Manager is not enabled as an active input handler, UI Toolkit runtime events will not work. |


            

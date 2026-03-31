This version of Unity is unsupported.



# DeviceSimulatorPlugin





class in
          UnityEditor.DeviceSimulation


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



Extend this class to create a Device Simulator plug-in.





Extend this class to create a Device Simulator plug-in. A plug-in lets you control custom simulation parameters from a UI inside the Control Panel of a Device Simulator window. Unity creates, destroys, and serializes a plug-in together with the Device Simulator window the plug-in is active in.





### Properties



| Property | Description |
| --- | --- |
| deviceSimulator | Device Simulator in which this plug-in is instantiated. |
| title | Title for the plug-in UI. |





### Public Methods



| Method | Description |
| --- | --- |
| OnCreate | Called when Unity creates the Device Simulator window. |
| OnCreateUI | The VisualElement that this method returns is embedded in the Device Simulator window. If the method returns null, plug-in UI is not embedded. |
| OnDestroy | Called when Device Simulator window is destroyed. |


            

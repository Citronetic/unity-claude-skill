This version of Unity is unsupported.



# [PanelInputConfiguration](UIElements.PanelInputConfiguration.html).autoCreatePanelComponents




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












                    public bool autoCreatePanelComponents;






### Description



When enabled, automatically creates child GameObjects with raycaster and event handler components
 attached to uGUI's EventSystem.





If this option is enabled, for each panel that uses the screen space overlay render mode, one child
 GameObject is created with a PanelRaycaster and PanelEventHandler components associated to it.


 If the defaultEventCameraIsMainCamera option is enabled, Unity automatically adds one
 WorldDocumentRaycaster to handle inputs for world-space UI.
 When created automatically, the WorldDocumentRaycaster's Event Camera is not assigned.
 Instead, it automatically detects and uses the Main Camera in the Scene as the source for input.
 Otherwise, for each Camera in the eventCameras list, a distinct WorldDocumentRaycaster
 component is created and its Event Camera property is assigned to that Camera.


 If this option is disabled, UI Toolkit events are disabled unless you manually add
 raycaster and event handler components to the scene manually and initialize them accordingly.


 This property has no effect in the following situations:



          - If there is no active EventSystem.

          - If the panelInputRedirection option is set to not interact with the EventSystem.




            

This version of Unity is unsupported.



# [PanelInputConfiguration](UIElements.PanelInputConfiguration.html).defaultEventCameraIsMainCamera




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












                    public bool defaultEventCameraIsMainCamera;






### Description



This option is enabled by default, automatically selecting the Main Camera (if available) as the Event Camera
 to transform screen positions into world-space rays.





If the Main Camera changes, the Event Camera is updated automatically with the new Camera.


 If no Main Camera is active, screen-based events are disabled until a Main Camera becomes active again.


If World Space input is disabled, this property has no effect.


            

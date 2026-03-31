This version of Unity is unsupported.



# [PanelInputConfiguration](UIElements.PanelInputConfiguration.html).eventCameras




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












                    public Camera[] eventCameras;






### Description



The list of Event Cameras used to transform screen positions into world-space rays.





If multiple Event Cameras are specified, the Event Cameras are processed sequentially
 until one of the cameras produces a ray that hits a Collider.


If no Event Camera is specified, screen-based events are disabled.

If World Space input is disabled, this property has no effect.


            

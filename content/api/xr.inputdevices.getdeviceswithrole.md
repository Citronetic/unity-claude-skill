This version of Unity is unsupported.


                  **Method group is Obsolete**





# [InputDevices](XR.InputDevices.html).GetDevicesWithRole




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













                        **Obsolete**
                        This API has been marked as deprecated and will be removed in future versions. Please use InputDevices.GetDevicesWithCharacteristics instead.




## Declaration

public static void GetDevicesWithRole([XR.InputDeviceRole](XR.InputDeviceRole.html) role,
List<InputDevice> inputDevices);






### Parameters



| Parameter | Description |
| --- | --- |
| role | InputDeviceRole that is defined for the devices returned. |
| inputDevices | A List of type InputDevices to receive the available input devices. |





### Description



Gets a list of active input devices available to the XR Input Subsystem that match the specified role.


            

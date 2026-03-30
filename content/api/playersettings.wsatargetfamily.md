This version of Unity is unsupported.



# WSATargetFamily





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




                [Switch to Manual](../Manual/class-PlayerSettings.html)














### Description



Options for the set of Universal Windows Platform device families your application can directly support.





A device family identifies the APIs, system characteristics, and behaviors across a class of devices. It also determines the set of devices on which users can install your application from the Microsoft Store. By default, your application targets the Universal device family. To do this, Microsoft Visual Studio sets Windows.Universal for TargetDeviceFamily.
 For more information, see [Microsoft’s Device families overview](https://docs.microsoft.com/en-ca/uwp/extension-sdks/device-families-overview).
**Important:** Unity writes target families to the package manifest when it builds Universal Windows Platform for the first time. Building into an existing Universal Windows Platform build folder does not update the package manifest and does not apply any changes.





### Properties



| Property | Description |
| --- | --- |
| Desktop | Targets a device family that includes Desktop PCs, laptops, and tablet devices. |
| Mobile | Targets a device family that includes smartphone devices. |
| Xbox | Targets a device family that includes Xbox consoles. |
| Holographic | Targets a device family that includes HoloLens devices. |
| Team | Targets a device family that includes the Surface Hub. |
| IoT | Targets a device family that includes Internet-of-Things (IoT) devices. |
| IoTHeadless | Targets a device family that includes Internet-of-Things (IoT) devices without any UI. |


            

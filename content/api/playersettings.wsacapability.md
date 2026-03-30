This version of Unity is unsupported.



# WSACapability





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



Options for Universal Windows Platform application capabilities.





A Universal Windows Platform application must specify capabilities for the system resources and features it expects to use, such as access to the camera. Unity exposes a subset of these capabilities through Player Settings and automatically adds any set values to the generated package manifest file. For capability values that this Unity does not expose, you can add them by editing the package manifest file.
For information on Universal Windows Platform capabilities, see [Microsoft's documentation](https://docs.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations).

**Important:** Unity writes application capabilities to the package manifest when it builds Universal Windows Platform for the first time. Building into an existing Universal Windows Platform build folder does not update the package manifest and does not apply any changes.





### Properties



| Property | Description |
| --- | --- |
| EnterpriseAuthentication | Allows your application to use Windows domain credentials to log into remote resources. |
| InternetClient | Allows your application to receive incoming data from the internet. |
| InternetClientServer | Allows your application to both send and receive internet data. |
| MusicLibrary | Allows your application to access files within the user's music library. |
| PicturesLibrary | Allows your application to access files within the user's pictures library. |
| PrivateNetworkClientServer | Allows your application to send and receive data on the local area network. |
| RemovableStorage | Allows your application to access files on removable storage, such as a USB drive or external hard drive. |
| SharedUserCertificates | Allows your application to add and access software and hardware-based certificates in the shared user data store. |
| VideosLibrary | Allows your application to access files with the user's video library. |
| WebCam | Allows your application to access the video feed of built-in and external webcams. |
| Proximity | Allows your application to initiate connections between multiple devices in close proximity to communicate with one another. |
| Microphone | Allows your application to access the audio feed of microphones connected to the device. |
| Location | Allows your application to access the device's location functionality if one is available. |
| HumanInterfaceDevice | Allows your application to interact with connected Human Interface Devices (HIDs). |
| AllJoyn | Allows your application AllJoyn-enabled applications and devices on a network to discover and interact with each other. |
| BlockedChatMessages | Allows your application to access SMS and MMS messages that the Spam Filter blocks. |
| Chat | Allows your application to read and delete text messages, and store messages in the system data store. |
| CodeGeneration | Allows your application to access specific APIs that provide just-in-time compilation. |
| Objects3D | Allows your application to access files within the Windows 3D Object folder. |
| PhoneCall | Allows your application to access all of the phone lines on the device and perform various functions. |
| UserAccountInformation | Allows your application to access the end user's name and picture. |
| VoipCall | Allows your application to access voice over internet protocol (VoIP) calling APIs in the Windows.ApplicationModel.Calls namespace. |
| Bluetooth | Allows your application to communicate with Bluetooth devices paired with the device. |
| SpatialPerception | Allows your application to access spatial mapping data through a mixed reality device. |
| InputInjectionBrokered | Allows your application to inject various forms of input such as HID, touch, pen, keyboard, or mouse into the system programmatically. |
| Appointments | Allows your application to access the end user's appointment store. |
| BackgroundMediaPlayback | Allows your application to continue media playback while the application is in the background. |
| Contacts | Allows your application limited access  to an aggregated view of contacts from various contacts |
| LowLevelDevices | Allows your application to access custom devices that meet Microsoft-set requirements. |
| OfflineMapsManagement | Allows your application to access offline maps. |
| PhoneCallHistoryPublic | Allows your application to read cellular and some voice over internet protocol (VoIP) call history information on the device. |
| PointOfService | Allows your application to access APIs in the Windows.Devices.PointOfService namespace. |
| RecordedCallsFolder | Allows your application to access the recorded calls folder. |
| RemoteSystem | Allows your application to access a list of devices associated with the user's Microsoft account. |
| SystemManagement | Allows your application to use basic system administration privileges. This includes shutting down or rebooting the device and accessing the locale and time zone. |
| UserDataTasks | Allows your application to access the current state of the task settings. |
| UserNotificationListener | Allows your application to access the current state of the notification settings. |
| GazeInput | Allows your application to detect where the user is looking when their device is connected to a compatible eye-tracking device. |


            

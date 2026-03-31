This version of Unity is unsupported.



# [EditorUserBuildSettings](EditorUserBuildSettings.html).windowsDevicePortalPassword




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












                    public static string windowsDevicePortalPassword;






### Description



Specifies the Windows DevicePortal password for the device to deploy and launch the UWP app on when using Build and Run.





This parameter is only necessary if WDP authentication is enabled on the target device, otherwise it can left empty. This string is not saved with the other settings and must be re-entered after the editor is closed.

**Note:** This is *not* the Windows logon password but a separate credential specific to DevicePortal. Please refer to the [Microsoft DevicePortal documentation](https://docs.microsoft.com/en-us/windows/uwp/debug-test-perf/device-portal) for more details.


            

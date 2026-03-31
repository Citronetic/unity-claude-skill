This version of Unity is unsupported.



# Permission





struct in
          UnityEngine.Android



/



Implemented in:[UnityEngine.AndroidJNIModule](UnityEngine.AndroidJNIModule.html)


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



Structure describing a permission that requires user authorization.





### Static Properties



| Property | Description |
| --- | --- |
| Camera | Used when requesting permission or checking if permission has been granted to use the camera. |
| CoarseLocation | Used when requesting permission or checking if permission has been granted to use the users location with coarse granularity. |
| ExternalStorageRead | Used when requesting permission or checking if permission has been granted to read from external storage such as a SD card. |
| ExternalStorageWrite | Used when requesting permission or checking if permission has been granted to write to external storage such as a SD card. |
| FineLocation | Used when requesting permission or checking if permission has been granted to use the users location with high precision. |
| Microphone | Used when requesting permission or checking if permission has been granted to use the microphone. |





### Static Methods



| Method | Description |
| --- | --- |
| HasUserAuthorizedPermission | Check if the user has granted access to a device resource or information that requires authorization. |
| RequestUserPermission | Request the user to grant access to a device resource or information that requires authorization. |
| RequestUserPermissions | Request the user to grant access to multiple device resources or information that requires authorization. |
| ShouldShowRequestPermissionRationale | Check whether to display the UI explaining the reason for permission before requesting it. |


            

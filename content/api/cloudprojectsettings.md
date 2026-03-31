This version of Unity is unsupported.



# CloudProjectSettings





class in
          UnityEditor


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



Use this class to retrieve information about the currently selected project and the current Unity ID that is logged in.





### Static Properties



| Property | Description |
| --- | --- |
| coppaCompliance | The current COPPA compliance state. |
| organizationId | The Organization ID, formatted in lowercase with no symbols. |
| organizationKey | The Organization key used to access the dashboard. |
| organizationName | The name of the Organization. |
| projectBound | Returns true if the project has been bound. |
| projectId | The Project ID, or GUID. |
| projectName | The name of the project. |
| userId | The user ID is derived from the user name without the domain (removing all characters starting with '@'), formatted in lowercase with no symbols. |
| userName | The user name is the email used for the user's Unity account. |





### Static Methods



| Method | Description |
| --- | --- |
| GetServiceTokenAsync | Get the service authentication token used for the Service Gateway apis. |
| ShowLogin | This method shows the Unity login popup. |


            

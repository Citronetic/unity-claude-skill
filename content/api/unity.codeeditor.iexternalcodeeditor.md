This version of Unity is unsupported.



# IExternalCodeEditor





interface in
          Unity.CodeEditor


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



Defines the responsibilities of handling external script editor integration into UnityEditor.





### Properties



| Property | Description |
| --- | --- |
| Installations | Provide the editor with a list of known and supported editors that this instance supports. |





### Public Methods



| Method | Description |
| --- | --- |
| Initialize | Callback to the IExternalCodeEditor when it has been chosen from the PreferenceWindow. |
| OnGUI | Unity calls this method when it populates "Preferences/External Tools" in order to allow the code editor to generate necessary GUI. For example, when creating an an argument field for modifying the arguments sent to the code editor. |
| OpenProject | The external code editor needs to handle the request to open a file. |
| SyncAll | Unity calls this function during initialization in order to sync the Project. This is different from SyncIfNeeded in that it does not get a list of changes. |
| SyncIfNeeded | When you change Assets in Unity, this method for the current chosen instance of IExternalCodeEditor parses the new and changed Assets. |
| TryGetInstallationForPath | Unity stores the path of the chosen editor. An instance of IExternalCodeEditor can take responsibility for this path, by returning true when this method is being called. The out variable installation need to be constructed with the path and the name that should be shown in the "External Tools" code editor list. |


            

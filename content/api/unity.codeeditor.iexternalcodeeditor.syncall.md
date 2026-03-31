This version of Unity is unsupported.



# [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html).SyncAll




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















## Declaration

public void SyncAll();






### Description



Unity calls this function during initialization in order to sync the Project. This is different from [SyncIfNeeded](Unity.CodeEditor.IExternalCodeEditor.SyncIfNeeded.html) in that it does not get a list of changes.





Another workflow where this is used is from the menu "Assets/Open C# Project", which will make a call to this function before a call to [OpenProject](Unity.CodeEditor.IExternalCodeEditor.OpenProject.html) is made.


            

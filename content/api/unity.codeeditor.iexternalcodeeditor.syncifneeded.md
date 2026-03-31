This version of Unity is unsupported.



# [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html).SyncIfNeeded




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

public void SyncIfNeeded(string[] addedFiles,
string[] deletedFiles,
string[] movedFiles,
string[] movedFromFiles,
string[] importedFiles);






### Parameters



| Parameter | Description |
| --- | --- |
| addedFiles | Added files through Unity's UI. |
| movedFiles | Files that was added but has been moved. |
| movedFromFiles | Same list as movedFiles, but contains the location of where these was moved from. |
| importedFiles | Imported files, which were not added through Unity's UI. |





### Description



When you change Assets in Unity, this method for the current chosen instance of [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html) parses the new and changed Assets.


            

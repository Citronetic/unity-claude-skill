This version of Unity is unsupported.



# [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html).TryGetInstallationForPath




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

public bool TryGetInstallationForPath(string editorPath,
out [Unity.CodeEditor.CodeEditor.Installation](Unity.CodeEditor.CodeEditor.Installation.html) installation);






### Parameters



| Parameter | Description |
| --- | --- |
| editorPath | The absolute path of the chosen code editor. |
| installation | To store the resulting Installation. If return value is false, this result is ignored. |





### Returns



**bool**
        Whether this [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html) can support the **editorPath** implementation.





### Description



Unity stores the path of the chosen editor. An instance of [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html) can take responsibility for this path, by returning true when this method is being called. The `out` variable **installation** need to be constructed with the path and the name that should be shown in the "External Tools" code editor list.





For supported code editor paths, this function sets the output variable **installation** to an instance of [Installation](Unity.CodeEditor.CodeEditor.Installation.html) which describes the name that appears in the Editor Preference > Editor Tool section.


            

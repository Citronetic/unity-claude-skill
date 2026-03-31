This version of Unity is unsupported.



# [CodeEditor](Unity.CodeEditor.CodeEditor.html).GetCodeEditorForPath




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

public [Unity.CodeEditor.IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html) GetCodeEditorForPath(string editorPath);






### Parameters



| Parameter | Description |
| --- | --- |
| editorPath | The absolute path to an executable. |





### Returns



**IExternalCodeEditor**
        Returns an [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html) representing the package responsible for the editor path.





### Description



Each registered code editor package has an instance of [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html). This method invokes [IExternalCodeEditor.TryGetInstallationForPath](Unity.CodeEditor.IExternalCodeEditor.TryGetInstallationForPath.html) on that instance. It returns the first instance that returns a valid installation.


            

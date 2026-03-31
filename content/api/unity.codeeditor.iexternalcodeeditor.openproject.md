This version of Unity is unsupported.



# [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html).OpenProject




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

public bool OpenProject(string filePath,
int line,
int column);






### Parameters



| Parameter | Description |
| --- | --- |
| line | Line number to open the file on. |
| column | Column to move cursor to on the specific line. |





### Returns



**bool**
        Whether the request went successfully.





### Description



The external code editor needs to handle the request to open a file.





The interface defines a default argument for this method, filePath empty string, line -1, column -1. This requests is a special case where the IDE is requested to open the project, but no specific file, and can be handled differently across integrations.


            

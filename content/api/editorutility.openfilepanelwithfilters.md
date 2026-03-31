This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).OpenFilePanelWithFilters




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

public static string OpenFilePanelWithFilters(string title,
string directory,
string[] filters);






### Parameters



| Parameter | Description |
| --- | --- |
| title | The text to display in the title bar of the dialog window. |
| directory | The default file directory that this dialog opens. This parameter is relative to the project directory. For example, "Assets" displays the Assets directory when this dialog opens. |
| filters | File extensions in form: new string[] { "Image files", "png,jpg,jpeg", "All files", "*" }. |





### Returns



**string**
        The fully qualified path name.





### Description



Displays the "open file" dialog and returns the selected path name.


            

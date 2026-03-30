This version of Unity is unsupported.



# [AndroidProjectFilesModifierContext](Android.AndroidProjectFilesModifierContext.html).AddFileToCopy




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



















### Parameters



| Parameter | Description |
| --- | --- |
| source | The path to a source file. This can be an absolute or relative path. If it's relative, the root of the path is the Unity project's root. |
| destination | The path to place the file copy. This is relative to the Gradle project root. |





### Description



Declare a file to copy into the Gradle project.





If another file with the same destination has already been added, Unity throws an exception.


            

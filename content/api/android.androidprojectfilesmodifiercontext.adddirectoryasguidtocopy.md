This version of Unity is unsupported.



# [AndroidProjectFilesModifierContext](Android.AndroidProjectFilesModifierContext.html).AddDirectoryAsGuidToCopy




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
| guid | The GUID of a directory in your Unity project. |
| destination | The path to place the directory copy. This is relative to the Gradle project root. |
| includePattern | A Regex filter to include files. Default value is 'null' |
| excludePattern | A Regex filter to exclude files. Default value is '\.meta$' |





### Description



Declare a directory to copy into the Gradle project.





If any files in the directory copy have the same destination as a file that has already been added, Unity throws an exception.


            

This version of Unity is unsupported.



# File





class in
          UnityEngine.Windows



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Provides static methods for file operations.





The UnityEngine.Windows.File class is available only for the Universal Windows Platform. It was recommended during the times in which the System.IO.File class was not available for the Universal Windows Platform. Now, the System.IO.File class is available for the Universal Windows Platform, and Unity recommends not using the UnityEngine.Windows.File class anymore, but the System.IO.File class instead.





### Static Methods



| Method | Description |
| --- | --- |
| Delete | Deletes the specified file. |
| Exists | Determines whether the specified file exists. |
| ReadAllBytes | Opens a binary file, reads the contents of the file into a byte array, and then closes the file. |
| WriteAllBytes | Creates a new file, writes the specified byte array to the file, and then closes the file. If the target file already exists, it is overwritten. |


            

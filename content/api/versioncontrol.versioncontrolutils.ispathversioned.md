This version of Unity is unsupported.



# [VersionControlUtils](VersionControl.VersionControlUtils.html).IsPathVersioned




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

public static bool IsPathVersioned(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Path to the file. |





### Returns



**bool**

          **true** if the file should be tracked by VCS. **false** otherwise.





### Description



Allows you to check whether the specified file is tracked by version control.





For example, files in your Assets folder are usually tracked, while files in your Library folder are not.


            

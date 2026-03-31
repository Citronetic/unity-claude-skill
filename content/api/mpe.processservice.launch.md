This version of Unity is unsupported.



# [ProcessService](MPE.ProcessService.html).Launch




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

public static int Launch(string roleName,
params string[] keyValuePairs);






### Parameters



| Parameter | Description |
| --- | --- |
| roleName | The name that corresponds to the RoleProviderAttribute of the process to start. |
| keyValuePairs | Arguments passed to the slave process. |





### Returns



**int**
        The process ID of the slave process. A value of 0 means the slave process could not be started.





### Description



Launches a secondary instance of UnityEditor on the same project as the master instance.


            

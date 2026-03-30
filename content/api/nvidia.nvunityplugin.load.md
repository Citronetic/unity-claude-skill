This version of Unity is unsupported.



# [NVUnityPlugin](NVIDIA.NVUnityPlugin.html).Load




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

public static bool Load();






### Returns



**bool**
        Returns true if the function loaded the plugin successfully. Otherwise, returns false.





### Description



Attempts to dynamically load the plugin NVUnityPlugin.





The result this function returns is only valid the first time you call the function. If you call the function again, the result it returns is the same as the last value it returned. This function is only required if the user is not going throught the native package NVIDIA.


            

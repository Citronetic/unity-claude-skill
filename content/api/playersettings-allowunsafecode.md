This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).allowUnsafeCode




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static bool allowUnsafeCode;






### Description



Allow unsafe C# code to be compiled for predefined assemblies.





Set this to true to pass `/unsafe` to the C# compiler when compiling predefined assemblies. For example, `Assembly-CSharp.dll`.

**Note**: `PlayerSettings._allowUnsafeCode` only affects code that isn't compiled into separate assemblies via `.amsdef` files.


            

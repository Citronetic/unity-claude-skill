This version of Unity is unsupported.



# [PlayerSettings.WebGL](PlayerSettings.WebGL.html).threadsSupport




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







                    public static bool threadsSupport;






### Description



Multithreading support in WebGL.





When enabled, Unity generates a WebGL build with multithreading support enabled. The generated content requires a browser that supports WebAssembly threads (SharedArrayBuffer).
 Currently, multithreaded WebGL builds only enable multithreading on the native C/C++ language level. Multithreading C# code is not yet available.


            

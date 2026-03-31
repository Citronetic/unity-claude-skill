This version of Unity is unsupported.



# [PlayerSettings.WebGL](PlayerSettings.WebGL.html).memoryGrowthMode




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







                    public static [WebGLMemoryGrowthMode](WebGLMemoryGrowthMode.html) memoryGrowthMode;






### Description



The growth mode for WASM heap memory.





The growth mode controls at which rate WASM heap memory grows if more memory is allocated than what is currently available (Recommended default: Geometric). The growth mode None results in a fixed heap memory size. The growth mode Linear increases the heap by a constant amount. The growth mode Geometric increases the heap by a given percentage.


            

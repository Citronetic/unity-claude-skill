This version of Unity is unsupported.



# [PlayerSettings.WebGL](PlayerSettings.WebGL.html).webAssemblyBigInt




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







                    public static bool webAssemblyBigInt;






### Description



If enabled, generated WebAssembly code will rely on the BigInt ABI for function signatures containing 64-bit variables. Enable this to achieve faster build times and slightly smaller code size. The Wasm BigInt feature requires at least Chrome 85 (Aug 25, 2020), Firefox 78 (Jun 30, 2020), Safari 14.5 (Apr 26, 2021), or newer. Disable this option to target older browsers that do not support the Wasm BigInt feature. It is recommended to enable this option for new projects and if you prefer fast build iteration times, and to disable it if targeting backward compatibility with older browsers is important.


            

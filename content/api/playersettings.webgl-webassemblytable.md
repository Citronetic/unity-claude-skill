This version of Unity is unsupported.



# [PlayerSettings.WebGL](PlayerSettings.WebGL.html).webAssemblyTable




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







                    public static bool webAssemblyTable;






### Description



If enabled, targets the `WebAssembly.Table` language feature, which results in faster JS-Wasm interop and faster build times. `WebAssembly.Table` is not backwards compatible with the older `dynCalls` interop model. If disabled, Unity targets the old deprecated Emscripten `-sDYNCALLS` flag for backwards compatibility with older Unity Web platform JS plugin code. It is recommended to enable this option for new projects that do not utilize any older incompatible JavaScript plugins, and when you prefer fast build iteration times, and to disable it if utilizing `.jslib` files that rely on the older `dynCall()` mechanism.


            

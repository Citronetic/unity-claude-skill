This version of Unity is unsupported.



# [PlayerSettings.WebGL](PlayerSettings.WebGL.html).wasmArithmeticExceptions




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







                    public static [WebGLWasmArithmeticExceptions](WebGLWasmArithmeticExceptions.html) wasmArithmeticExceptions;






### Description



The trapping mode for WebAssembly code.





WebAssembly code might throw an exception if you're using arithmetic operations like division by zero or rounding a very large float to an integer. Unity recommends using Throw mode to help detect for potential issues sooner.


            

This version of Unity is unsupported.



# [JNINativeMethod](JNINativeMethod.html).fnPtr




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












                    public IntPtr fnPtr;






### Description



The pointer to the native function that is called from the Java code.





Obtain this pointer by calling `Marshal.GetFunctionPointerForDelegate`, where the delegate refers to a method annotated with `MonoPInvokeCallback` attribute. The method must have the signature: `static ReturnType MyMethod(IntPtr jniEnv, IntPtr objectOrClass, ...);`


            

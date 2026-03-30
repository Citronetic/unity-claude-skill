This version of Unity is unsupported.



# [AndroidJNI](AndroidJNI.html).CallStaticStringMethodUnsafe




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

public static string CallStaticStringMethodUnsafe(IntPtr clazz,
IntPtr methodID,
jvalue* args);






### Description



Invokes the specified `methodID` static method on a Java object, optionally passing in an array of arguments (`args`).





This is a convenience function that calls CallStaticObjectMethod() with the same parameters, but creates a managed string from the result.

Additional resources: [AndroidJNI.CallStaticObjectMethodUnsafe](AndroidJNI.CallStaticObjectMethodUnsafe.html).


            

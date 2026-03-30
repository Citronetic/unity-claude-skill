This version of Unity is unsupported.



# [AndroidJNI](AndroidJNI.html).NewObject




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

public static IntPtr NewObject(IntPtr clazz,
IntPtr methodID,
jvalue[] args);






### Description



Constructs a new Java object. The method ID indicates which constructor method to invoke. This ID must be obtained by calling GetMethodID() with <init> as the method name and void (V) as the return type.





Additional resources: [Java Native Interface Specification (Oracle)](http://download.oracle.com/javase/1.5.0/docs/guide/jni/spec/jniTOC.html)


            

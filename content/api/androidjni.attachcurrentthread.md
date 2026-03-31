This version of Unity is unsupported.



# [AndroidJNI](AndroidJNI.html).AttachCurrentThread




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

public static int AttachCurrentThread();






### Description



Attaches the current thread to a Java (Dalvik) VM.





A thread must be attached to the VM before any other JNI calls can be made.

Returns 0 on success; returns a negative number on failure.

Additional resources: [Java Native Interface Specification (Oracle)](http://download.oracle.com/javase/1.5.0/docs/guide/jni/spec/jniTOC.html)


            

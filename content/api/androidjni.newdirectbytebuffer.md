This version of Unity is unsupported.



# [AndroidJNI](AndroidJNI.html).NewDirectByteBuffer




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

public static IntPtr NewDirectByteBuffer(byte* buffer,
long capacity);






### Description



Allocates and returns a direct java.nio.ByteBuffer referring to the block of memory starting at the memory address address and extending capacity bytes.





Additional resources: [Java Native Interface Specification (Oracle)](http://download.oracle.com/javase/1.5.0/docs/guide/jni/spec/jniTOC.html)




---








## Declaration

public static IntPtr NewDirectByteBuffer(NativeArray<byte> buffer);






## Declaration

public static IntPtr NewDirectByteBuffer(NativeArray<sbyte> buffer);






### Description



Allocates and returns a direct java.nio.ByteBuffer referring to the same block of memory as the given NativeArray.





Additional resources: [Java Native Interface Specification (Oracle)](http://download.oracle.com/javase/1.5.0/docs/guide/jni/spec/jniTOC.html)


            

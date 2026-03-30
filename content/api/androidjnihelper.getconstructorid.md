This version of Unity is unsupported.



# [AndroidJNIHelper](AndroidJNIHelper.html).GetConstructorID




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

public static IntPtr GetConstructorID(IntPtr javaClass);






## Declaration

public static IntPtr GetConstructorID(IntPtr javaClass,
string signature);






### Parameters



| Parameter | Description |
| --- | --- |
| javaClass | Raw JNI Java class object (obtained by calling AndroidJNI.FindClass). |
| signature | Constructor method signature (e.g. obtained by calling AndroidJNIHelper.GetSignature). |





### Description



Scans a particular Java class for a constructor method matching a signature.





The signature comparison is done to allow for sub-/base-classes of the class types.
If no signature is provided the first constuctor found will be returned.

Additional resources: [AndroidJNIHelper.GetSignature](AndroidJNIHelper.GetSignature.html), [AndroidJNIHelper.GetMethodID](AndroidJNIHelper.GetMethodID.html), [AndroidJNIHelper.GetFieldID](AndroidJNIHelper.GetFieldID.html).




---








## Declaration

public static IntPtr GetConstructorID(IntPtr jclass,
object[] args);






### Parameters



| Parameter | Description |
| --- | --- |
| javaClass | Raw JNI Java class object (obtained by calling AndroidJNI.FindClass). |
| args | Array with parameters to be passed to the constructor when invoked. |





### Description



Get a JNI method ID for a constructor based on calling arguments.





Scans a particular Java class for a constructor method matching a signature based on passed arguments.
The signature comparison is done to allow for sub-/base-classes of the class types.


            

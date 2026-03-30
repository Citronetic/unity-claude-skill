This version of Unity is unsupported.



# [AndroidJNIHelper](AndroidJNIHelper.html).GetMethodID




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

public static IntPtr GetMethodID(IntPtr javaClass,
string methodName);






## Declaration

public static IntPtr GetMethodID(IntPtr javaClass,
string methodName,
string signature);






## Declaration

public static IntPtr GetMethodID(IntPtr javaClass,
string methodName,
string signature,
bool isStatic = false);






### Parameters



| Parameter | Description |
| --- | --- |
| javaClass | Raw JNI Java class object (obtained by calling AndroidJNI.FindClass). |
| methodName | Name of the method as declared in Java. |
| signature | Method signature (e.g. obtained by calling AndroidJNIHelper.GetSignature). |
| isStatic | Set to true for static methods; false for instance (nonstatic) methods. |





### Description



Scans a particular Java class for a method matching a name and a signature.





The signature comparison is done to allow sub-/base-classes of a class types.
If no signature is provided the first method with the correct name will be returned.

Additional resources: [AndroidJNIHelper.GetSignature](AndroidJNIHelper.GetSignature.html), [AndroidJNIHelper.GetConstructorID](AndroidJNIHelper.GetConstructorID.html), [AndroidJNIHelper.GetFieldID](AndroidJNIHelper.GetFieldID.html).




---








## Declaration

public static IntPtr GetMethodID(IntPtr jclass,
string methodName,
object[] args,
bool isStatic);






### Parameters



| Parameter | Description |
| --- | --- |
| javaClass | Raw JNI Java class object (obtained by calling AndroidJNI.FindClass). |
| methodName | Name of the method as declared in Java. |
| args | Array with parameters to be passed to the method when invoked. |
| isStatic | Set to true for static methods; false for instance (nonstatic) methods. |





### Description



Get a JNI method ID based on calling arguments.





Generic parameter represents the method return type, and the regular method assumes 'void' return type.
Scans a particular Java class for a method matching a signature based on passed arguments.
The signature comparison is done to allow for sub-/base-classes of the class types.




---








## Declaration

public static IntPtr GetMethodID(IntPtr jclass,
string methodName,
object[] args,
bool isStatic);






### Parameters



| Parameter | Description |
| --- | --- |
| javaClass | Raw JNI Java class object (obtained by calling AndroidJNI.FindClass). |
| methodName | Name of the method as declared in Java. |
| args | Array with parameters to be passed to the method when invoked. |
| isStatic | Set to true for static methods; false for instance (nonstatic) methods. |





### Description



Get a JNI method ID based on calling arguments.





Generic parameter represents the method return type, and the regular method assumes 'void' return type.
Scans a particular Java class for a method matching a signature based on passed arguments.
The signature comparison is done to allow for sub-/base-classes of the class types.


            

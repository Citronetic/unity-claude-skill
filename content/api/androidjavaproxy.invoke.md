This version of Unity is unsupported.



# [AndroidJavaProxy](AndroidJavaProxy.html).Invoke




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

public [AndroidJavaObject](AndroidJavaObject.html) Invoke(string methodName,
object[] args);






## Declaration

public [AndroidJavaObject](AndroidJavaObject.html) Invoke(string methodName,
AndroidJavaObject[] javaArgs);






### Parameters



| Parameter | Description |
| --- | --- |
| methodName | Name of the invoked java method. |
| args | Arguments passed from the java vm - converted into AndroidJavaObject, AndroidJavaClass or a primitive. |
| javaArgs | Arguments passed from the java vm - all objects are represented by AndroidJavaObject, int for instance is represented by a java.lang.Integer object. |





### Description



Called by the java vm whenever a method is invoked on the java proxy interface. You can override this to run special code on method invocation, or you can leave the implementation as is, and leave the default behavior which is to look for c# methods matching the signature of the java method.




---








## Declaration

public IntPtr Invoke(string methodName,
IntPtr javaArgs);






### Parameters



| Parameter | Description |
| --- | --- |
| methodName | Name of the invoked java method. |
| javaArgs | A reference to Java object array with arguments passed to this method. |





### Returns



**IntPtr**
        A local reference to Java object, representing the return value.





### Description



Called by the java vm whenever a method is invoked on the java proxy interface. You can override this to run special code on method invocation, or you can leave the implementation as is, which will convert argument array to AndroidJavaObject[] and call other Invoke.


            

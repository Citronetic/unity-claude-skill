This version of Unity is unsupported.



# AndroidJavaObject Constructor




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

public AndroidJavaObject(string className,
params object[] args);






### Parameters



| Parameter | Description |
| --- | --- |
| className | Specifies the Java class name (e.g. "java.lang.String" or "java/lang/String"). |
| args | An array of parameters passed to the constructor. |





### Description



Construct an AndroidJavaObject based on the name of the class.





This essentially means locate the class type, allocate an object and run the specified constructor.




---








## Declaration

public AndroidJavaObject(IntPtr jobject);






### Parameters



| Parameter | Description |
| --- | --- |
| jobject | A reference to existing Java object. |





### Description



Create AndroidJavaObject for existing Java object.





Does not take ownership of passed reference, you still have to delete it.




---








## Declaration

public AndroidJavaObject(IntPtr clazz,
IntPtr constructorID,
params object[] args);






### Parameters



| Parameter | Description |
| --- | --- |
| clazz | A pointer to Java class. |
| constructorID | A method ID for the constructor to be used. |
| args | An array of parameters passed to the constructor. |





### Description



Create AndroidJavaObject (and it's Java counterpart) using given Java class and constructor.


            

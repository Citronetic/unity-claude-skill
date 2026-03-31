This version of Unity is unsupported.



# AndroidJNIHelper





class in
          UnityEngine



/



Implemented in:[UnityEngine.AndroidJNIModule](UnityEngine.AndroidJNIModule.html)


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



















### Description



Helper interface for JNI interaction; signature creation and method lookups.

**Note:** Using *raw* JNI functions requires advanced knowledge of the Android Java Native Interface (JNI). *Please take note.*





### Static Properties



| Property | Description |
| --- | --- |
| debug | Set debug to true to log calls through the AndroidJNIHelper. |





### Static Methods



| Method | Description |
| --- | --- |
| Box | Convert primitive to it's object counterpart. |
| ConvertFromJNIArray | Creates a managed array from a Java array. |
| ConvertToJNIArray | Creates a Java array from a managed array. |
| CreateJavaProxy | Creates a java proxy object which connects to the supplied proxy implementation. |
| CreateJavaRunnable | Creates a UnityJavaRunnable object (implements java.lang.Runnable). |
| CreateJNIArgArray | Creates the parameter array to be used as argument list when invoking Java code through CallMethod() in AndroidJNI. |
| DeleteJNIArgArray | Deletes any local jni references previously allocated by CreateJNIArgArray(). |
| GetConstructorID | Scans a particular Java class for a constructor method matching a signature. |
| GetFieldID | Scans a particular Java class for a field matching a name and a signature. |
| GetMethodID | Scans a particular Java class for a method matching a name and a signature. |
| GetSignature | Creates the JNI signature string for particular object type. |
| Unbox | Converts Java object of a boxed type to its primitive counterpart. |


            

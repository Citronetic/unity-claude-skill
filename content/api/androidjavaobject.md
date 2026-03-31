This version of Unity is unsupported.



# AndroidJavaObject





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



AndroidJavaObject is the Unity representation of a generic instance of java.lang.Object.





It can be used as type-less interface to an instance of any Java class.
**Note**: this API can be used from custom thread, but requires that thread to be attached to JVM first, see [AndroidJNI.AttachCurrentThread](AndroidJNI.AttachCurrentThread.html).





### Constructors



| Constructor | Description |
| --- | --- |
| AndroidJavaObject | Construct an AndroidJavaObject based on the name of the class. |





### Public Methods



| Method | Description |
| --- | --- |
| Call | Calls a Java method on an object (non-static). |
| CallStatic | Call a static Java method on a class. |
| CloneReference | Creates a clone of the C# object that references the same Java object. |
| Dispose | IDisposable callback. |
| Get | Get the value of a field in an object (non-static). |
| GetRawClass | Retrieves the raw jclass pointer to the Java class.Note: Using raw JNI functions requires advanced knowledge of the Android Java Native Interface (JNI). |
| GetRawObject | Retrieves the raw jobject pointer to the Java object.Note: Using raw JNI functions requires advanced knowledge of the Android Java Native Interface (JNI). |
| GetStatic | Get the value of a static field in an object type. |
| Set | Set the value of a field in an object (non-static). |
| SetStatic | Set the value of a static field in an object type. |


            

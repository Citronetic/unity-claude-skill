This version of Unity is unsupported.



# [AndroidJavaObject](AndroidJavaObject.html).GetRawObject




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

public IntPtr GetRawObject();






### Description



Retrieves the raw `jobject` pointer to the Java object.

**Note:** Using raw JNI functions requires advanced knowledge of the Android Java Native Interface (JNI).





Additional resources: [AndroidJavaObject.GetRawClass](AndroidJavaObject.GetRawClass.html)


              


```
using System;
using UnityEngine;public class AndroidJavaObjectGetRawObjectExample: MonoBehaviour
{
    void Start()
    {
        using (AndroidJavaObject javaObject = new AndroidJavaObject("com.example.exampleunityplugin.ExampleJavaClass"))
        {
            IntPtr rawObject = javaObject.GetRawObject();
            string message = javaObject.Call<string>("getMessage");            Debug.Log("Message: " + message + " Pointer: "+ rawObject);
        }
    }
}
```


            

This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).GetRuntimeMemorySizeLong




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

public static long GetRuntimeMemorySizeLong([Object](Object.html) o);






### Parameters



| Parameter | Description |
| --- | --- |
| o | The target Unity object. |





### Returns



**long**
        The amount of native-memory used by a Unity object. This returns 0 if the Profiler is not available.





### Description



Gathers the native-memory used by a Unity object.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        Object[] textures = Resources.FindObjectsOfTypeAll(typeof(Texture));
        foreach (Texture t in textures)
        {
            Debug.Log("Texture object " + t.name + " using: " + Profiler.GetRuntimeMemorySizeLong((Texture)t) + "Bytes");
        }
    }
}
```


            

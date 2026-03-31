This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).maxGraphicsBufferSize




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












                    public static long maxGraphicsBufferSize;






### Description



The maximum size of a graphics buffer ([GraphicsBuffer](GraphicsBuffer.html), [ComputeBuffer](ComputeBuffer.html), vertex/index buffer, etc.) in bytes (Read Only).





Any GPU buffer ([GraphicsBuffer](GraphicsBuffer.html), [ComputeBuffer](ComputeBuffer.html) or a vertex/index buffer used by a [Mesh](Mesh.html)) can not
be larger than this amount of bytes.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // prints maximum graphics buffer size, in megabytes
        var maxSizeMb = SystemInfo.maxGraphicsBufferSize / 1024 / 1024;
        Debug.Log($"Maximum graphics buffer size is {maxSizeMb} MB");
    }
}
```


            

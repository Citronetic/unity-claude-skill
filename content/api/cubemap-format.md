This version of Unity is unsupported.



# [Cubemap](Cubemap.html).format




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












                    public [TextureFormat](TextureFormat.html) format;






### Description



The format of the pixel data in the texture (Read Only).





Use this to determine the format of the texture.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Print the format of a given cubemap.
    public Cubemap cubeMap;    void Start()
    {
        if (cubeMap != null)
        {
            Debug.Log(cubeMap.format);
        }
        else
        {
            Debug.Log("No cubemap was assigned, please assing one on the inspector.");
        }
    }
}
```


            

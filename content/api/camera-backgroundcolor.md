This version of Unity is unsupported.



# [Camera](Camera.html).backgroundColor




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public [Color](Color.html) backgroundColor;






### Description



The color with which the screen will be cleared.





Only used if [clearFlags](Camera-clearFlags.html) are set to [CameraClearFlags.SolidColor](CameraClearFlags.SolidColor.html) (or [CameraClearFlags.Skybox](CameraClearFlags.Skybox.html) but the skybox is not set up).


              


```
// ping-pong animate background color
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Color color1 = Color.red;
    public Color color2 = Color.blue;
    public float duration = 3.0F;    public Camera cam;    void Start()
    {
        cam = GetComponent<Camera>();
        cam.clearFlags = CameraClearFlags.SolidColor;
    }    void Update()
    {
        float t = Mathf.PingPong(Time.time, duration) / duration;
        cam.backgroundColor = Color.Lerp(color1, color2, t);
    }
}
```





Additional resources: [camera component](../Manual/class-Camera.html), [Camera.clearFlags](Camera-clearFlags.html)


            

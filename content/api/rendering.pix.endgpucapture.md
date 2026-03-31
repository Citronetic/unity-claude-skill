This version of Unity is unsupported.



# [PIX](Rendering.PIX.html).EndGPUCapture




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

public static void EndGPUCapture();






### Description



Ends the current GPU frame capture in PIX. If not running via PIX, or as a development build, then it has no effect.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class PixControl : MonoBehaviour
{
    public int frameCaptureCount = 1;    int frameCount = 0;
    bool capturing = false;    void Awake()
    {
        if (PIX.IsAttached())
        {
            PIX.BeginGPUCapture();
            capturing = true;
        }
    }    void Update()
    {
        if (frameCount > frameCaptureCount && capturing)
        {
            PIX.EndGPUCapture();
            capturing = false;
        }        frameCount++;
    }
}
```


            

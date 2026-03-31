This version of Unity is unsupported.



# [Camera](Camera.html).rect




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







                    public [Rect](Rect.html) rect;






### Description



Where on the screen is the camera rendered in normalized coordinates.





In `rect`, the bottom-left of the screen is (0,0) and the top-right of the screen is (1,1).


              


```
using UnityEngine;// Change the width of the viewport each time space key is pressedpublic class ExampleClass : MonoBehaviour
{
    private Camera cam;    void Start()
    {
        cam = Camera.main;
    }    void Update()
    {
        if (Input.GetKey("space"))
        {
            // choose the margin randomly
            float margin = Random.Range(0.0f, 0.3f);
            // setup the rectangle
            cam.rect = new Rect(margin, 0.0f, 1.0f - margin * 2.0f, 1.0f);
        }
    }
}
```


            

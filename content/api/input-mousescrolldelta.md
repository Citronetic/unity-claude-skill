This version of Unity is unsupported.



# [Input](Input.html).mouseScrollDelta




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












                    public static [Vector2](Vector2.html) mouseScrollDelta;






### Description



The current mouse scroll delta. (Read Only)





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

[Input.mouseScrollDelta](Input-mouseScrollDelta.html) is stored in a [Vector2.y](Vector2-y.html) property. (The [Vector2.x](Vector2-x.html) value is ignored.) [Input.mouseScrollDelta](Input-mouseScrollDelta.html) can be positive (up) or negative (down). The value is zero when the mouse scroll is not rotated. Note that a mouse with a center scroll wheel is typical on a PC. Modern `macOS` uses double finger movement up and down on the trackpad to emulate center scrolling. The value returned by [mouseScrollDelta](Input-mouseScrollDelta.html) will need to be adjusted according to the scroll rate. In the example below a `scale` of `0.1f` is used.

Note that [mouseScrollDelta](Input-mouseScrollDelta.html) is read-only.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;// Input.mouseScrollDelta example
//
// Create a sphere moved by a mouse scrollwheel or two-finger
// slide on a Mac trackpad.public class ExampleClass : MonoBehaviour
{
    private Transform sphere;
    private float scale;    void Awake()
    {
        GameObject go = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        sphere = go.transform;        // create a yellow quad
        go = GameObject.CreatePrimitive(PrimitiveType.Quad);
        go.transform.Rotate(new Vector3(90.0f, 0.0f, 0.0f));
        go.transform.localScale = new Vector3(4.0f, 4.0f, 4.0f);
        go.GetComponent<Renderer>().material.color = new Color(0.75f, 0.75f, 0.0f, 0.5f);        // change the camera color and position
        Camera.main.clearFlags = CameraClearFlags.SolidColor;
        Camera.main.transform.position = new Vector3(2, 1, 5);
        Camera.main.transform.Rotate(0, -160, 0);        scale = 0.1f;
    }    void OnGUI()
    {
        Vector3 pos = sphere.position;
        pos.y += Input.mouseScrollDelta.y * scale;
        sphere.position = pos;
    }
}
```


            

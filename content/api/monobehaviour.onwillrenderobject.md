This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnWillRenderObject()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



Called for each camera if the object is visible and not a UI element.





`OnWillRenderObject` is called after culling has determined that the object will be rendered, but before the object is rendered by each camera. It's called once per camera that will render the object, for every visible, non-UI object with this MonoBehaviour.

`OnWillRenderObject` is called multiple times per frame. It's not called on disabled MonoBehaviours.

`OnWillRenderObject` is appropriate for:



          - Per-camera material or shader adjustments, for example setting shader keywords or per-camera uniforms.

          - Per-camera logic that doesn't affect the object's transform or visibility.

          - Custom rendering logic, like setting up camera-dependent effects.





`OnWillRenderObject` is not appropriate for:



          - Modifying the object's position or transform. This is because the culling process (which decides if an object is visible) has already occurred. If you move the object here, it may already be included in the render list for this frame, and the scene may not update as expected. You could see visual artifacts, popping, or inconsistent rendering results.

          - Changing the camera. You can read from [Camera.current](Camera-current.html), but changing camera settings here is generally not recommended. If you need to change camera settings before culling, use [MonoBehaviour.OnPreCull](MonoBehaviour.OnPreCull.html) or [MonoBehaviour.OnPreRender](MonoBehaviour.OnPreRender.html) instead.





[Camera.current](Camera-current.html) will be set to the camera that will render the object.

**Note:** `OnWillRenderObject` has no effect when called from a UI element.

Additional resources: [MonoBehaviour.OnPreCull](MonoBehaviour.OnPreCull.html) or [MonoBehaviour.OnPreRender](MonoBehaviour.OnPreRender.html)


              


```
using UnityEngine;
using System.Collections;public class ExampleScript : MonoBehaviour
{
    public Renderer rend;    private float timePass = 0.0f;    void Start()
    {
        rend = GetComponent<Renderer>();
    }    void OnWillRenderObject()
    {
        timePass += Time.deltaTime;        if (timePass > 1.0f)
        {
            timePass = 0.0f;
            print(gameObject.name + " is being rendered by " + Camera.current.name + " at " + Time.time);
        }
    }
}
```


            

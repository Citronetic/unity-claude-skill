This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnMouseDrag()




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



OnMouseDrag is called when the user has clicked on a [Collider](Collider.html) and is still holding down the mouse.





OnMouseDrag is called every frame while the mouse is down.

This event is sent to all scripts attached to the [Collider](Collider.html). This function is not called on objects that belong to Ignore Raycast layer.

This function is called on Colliders and 2D Colliders marked as trigger when the following properties are set to true:



          - For 3D physics: [Physics.queriesHitTriggers](Physics-queriesHitTriggers.html)

          - For 2D physics: [Physics2D.queriesHitTriggers](Physics2D-queriesHitTriggers.html)





`OnMouseDrag` can be a [coroutine](../Manual/Coroutines.html).

**Note**: New projects created with this version of Unity are pre-configured to use a version of the Input System that doesn't support this callback. To support this callback in your project, you can change the **Active Input Handling** setting in [Player settings](../Manual/class-PlayerSettings.html) to either **Both** or **Input Manager (Old)**. However, doing so is not recommended as the legacy Input Manager is nearing the end of support and Input System is the recommended solution for new projects. For more information, refer to [Migrating from the old Input Manager](https://docs.unity3d.com/Packages/com.unity.inputsystem@latest/index.html?subfolder=/manual/Migration.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Renderer rend;    void Start()
    {
        rend = GetComponent<Renderer>();
    }    void OnMouseDrag()
    {
        rend.material.color -= Color.white * Time.deltaTime;
    }
}
```


            

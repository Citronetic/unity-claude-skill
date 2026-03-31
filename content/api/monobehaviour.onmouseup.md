This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnMouseUp()




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



Called on releasing the mouse button while the mouse pointer is over the Collider attached to this GameObject.





The key factor is where the mouse button is released rather than where it was initially pressed down:



          - If you press the mouse button down anywhere, then move the cursor over the collider and release, `OnMouseUp` is called on that collider.

          - If you press the button over a collider, move the mouse away, and release, `OnMouseUp` is not called on that collider.





For button-like behavior (requiring both press and release over the same collider), use [MonoBehaviour.OnMouseUpAsButton](MonoBehaviour.OnMouseUpAsButton.html).

This event is sent to all scripts attached to the [Collider](Collider.html). This function is not called on objects that belong to Ignore Raycast layer. This function is called on Colliders and 2D Colliders marked as trigger when the following properties are set to true:



          - For 3D physics: [Physics.queriesHitTriggers](Physics-queriesHitTriggers.html)

          - For 2D physics: [Physics2D.queriesHitTriggers](Physics2D-queriesHitTriggers.html)





[OnMouseUp](MonoBehaviour.OnMouseUp.html) can be a [coroutine](../Manual/Coroutines.html).

Additional resources: [OnMouseDown](MonoBehaviour.OnMouseDown.html), [OnMouseDrag](MonoBehaviour.OnMouseDrag.html).

**Note**: New projects created with this version of Unity are pre-configured to use a version of the Input System that doesn't support this callback. To support this callback in your project, you can change the **Active Input Handling** setting in [Player settings](../Manual/class-PlayerSettings.html) to either **Both** or **Input Manager (Old)**. However, doing so is not recommended as the legacy Input Manager is nearing the end of support and Input System is the recommended solution for new projects. For more information, refer to [Migrating from the old Input Manager](https://docs.unity3d.com/Packages/com.unity.inputsystem@latest/index.html?subfolder=/manual/Migration.html).


              


```
// Register when mouse dragging has ended. OnMouseUp is called
// when the mouse button is released.using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void OnMouseUp()
    {
        // If the user releases the mouse button while over the GameObject with this script attached, output this message
        Debug.Log("Drag ended!");
    }
}
```


            

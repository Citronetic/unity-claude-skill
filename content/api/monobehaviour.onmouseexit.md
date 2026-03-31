This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnMouseExit()




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



Called when the mouse is not any longer over the [Collider](Collider.html).





A call to OnMouseExit follows the corresponding calls to [OnMouseEnter](MonoBehaviour.OnMouseEnter.html) and [OnMouseOver](MonoBehaviour.OnMouseOver.html).

This event is sent to all scripts attached to the [Collider](Collider.html). This function is not called on objects that belong to Ignore Raycast layer.

This function is called on Colliders and 2D Colliders marked as trigger when the following properties are set to true:



          - For 3D physics: [Physics.queriesHitTriggers](Physics-queriesHitTriggers.html)

          - For 2D physics - [Physics2D.queriesHitTriggers](Physics2D-queriesHitTriggers.html)





`OnMouseExit` can be a [coroutine](../Manual/Coroutines.html).

**Note**: New projects created with this version of Unity are pre-configured to use a version of the Input System that doesn't support this callback. To support this callback in your project, you can change the **Active Input Handling** setting in [Player settings](../Manual/class-PlayerSettings.html) to either **Both** or **Input Manager (Old)**. However, doing so is not recommended as the legacy Input Manager is nearing the end of support and Input System is the recommended solution for new projects. For more information, refer to [Migrating from the old Input Manager](https://docs.unity3d.com/Packages/com.unity.inputsystem@latest/index.html?subfolder=/manual/Migration.html).


              


```
//Attach this script to a GameObject to have it output messages when your mouse hovers over it.
using UnityEngine;public class OnMouseOverExample : MonoBehaviour
{
    void OnMouseOver()
    {
        //If your mouse hovers over the GameObject with the script attached, output this message
        Debug.Log("Mouse is over GameObject.");
    }    void OnMouseExit()
    {
        //The mouse is no longer hovering over the GameObject so output this message each frame
        Debug.Log("Mouse is no longer on GameObject.");
    }
}
```


            

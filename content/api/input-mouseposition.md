This version of Unity is unsupported.



# [Input](Input.html).mousePosition




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












                    public static [Vector3](Vector3.html) mousePosition;






### Description



The current mouse position in pixel coordinates. (Read Only).





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

[Input.mousePosition](Input-mousePosition.html) is a [Vector3](Vector3.html) for compatibility with functions that have [Vector3](Vector3.html) arguments. The z component of the [Vector3](Vector3.html) is always 0.

The bottom-left of the screen or window is at (0, 0).
The top-right of the screen or window is at ([Screen.width](Screen-width.html), [Screen.height](Screen-height.html)).

Note: [Input.mousePosition](Input-mousePosition.html) reports the position of the mouse even when it is not inside the Game View, such as when [Cursor.lockState](Cursor-lockState.html) is set to [CursorLockMode.None](CursorLockMode.None.html). When running in windowed mode with an unconfined cursor, position values smaller than 0 or greater than the screen dimensions ([Screen.width](Screen-width.html),[Screen.height](Screen-height.html)) indicate that the mouse cursor is outside of the game window.

In the following example, the x and y coordinates of the mouse position are printed when the “Fire1” button is clicked.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            Vector3 mousePos = Input.mousePosition;
            {
                Debug.Log(mousePos.x);
                Debug.Log(mousePos.y);
            }
        }
    }
}
```


            

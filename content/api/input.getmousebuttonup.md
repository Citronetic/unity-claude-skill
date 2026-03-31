This version of Unity is unsupported.



# [Input](Input.html).GetMouseButtonUp




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

public static bool GetMouseButtonUp(int button);






### Description



Returns true during the frame the user releases the given mouse button.





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

Call this function from the [MonoBehaviour.Update](MonoBehaviour.Update.html) function, since the state gets reset each frame.
It will not return true until the user has pressed the mouse button and released it again.
*button* values are 0 for left button, 1 for right button, 2 for the middle button.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Detects clicks from the mouse and prints a message
    // depending on the click detected.    void Update()
    {
        if (Input.GetMouseButtonUp(0))
        {
            Debug.Log("Pressed left click.");
        }
        if (Input.GetMouseButtonUp(1))
        {
            Debug.Log("Pressed right click.");
        }
        if (Input.GetMouseButtonUp(2))
        {
            Debug.Log("Pressed middle click.");
        }
    }
}
```


            

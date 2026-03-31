This version of Unity is unsupported.



# [Touch](Touch.html).position




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












                    public [Vector2](Vector2.html) position;






### Description



The position of the touch in screen space pixel coordinates.





Position returns the current position of a touch contact as it's dragged. If you need the original position of the touch see [Touch.rawPosition](Touch-rawPosition.html).

The bottom-left of the screen or window is at (0, 0). The top-right of the screen or window is at (Screen.width, Screen.height).


              


```
// This script outputs the position of an active touch contact// Attach this script to a GameObject
// Create a Text GameObject (GameObject>UI>Text)
// Attach the Text to the Text field in the Inspector window of your GameObjectusing UnityEngine;
using UnityEngine.UI;public class TouchPositionExample : MonoBehaviour
{
    public Text m_Text;    void Update()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);            // Update the Text on the screen depending on current position of the touch each frame
            m_Text.text = "Touch Position : " + touch.position;
        }
        else
        {
            m_Text.text = "No touch contacts";
        }
    }
}
```


            

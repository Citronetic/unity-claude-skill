This version of Unity is unsupported.



# [Touch](Touch.html).rawPosition




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












                    public [Vector2](Vector2.html) rawPosition;






### Description



The first position of the touch contact in screen space pixel coordinates.





Raw position returns the original position of a touch contact and doesn't change as the touch is dragged. If you need the current position of the touch see [Touch.position](Touch-position.html).

The bottom-left of the screen or window is at (0, 0). The top-right of the screen or window is at (Screen.width, Screen.height).


              


```
// This script outputs the raw position of an active touch contact// Attach this script to a GameObject
// Create a Text GameObject (GameObject>UI>Text)
// Attach the Text to the Text field in the Inspector window of your GameObjectusing UnityEngine;
using UnityEngine.UI;public class TouchRawPositionExample : MonoBehaviour
{
    public Text m_Text;    void Update()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);            // Update the Text on the screen depending on the raw position of the touch
            // NOTE: rawPosition doesn't change when the touch contact is dragged
            m_Text.text = "Raw Position : " + touch.rawPosition;
        }
        else
        {
            m_Text.text = "No touch contacts";
        }
    }
}
```


            

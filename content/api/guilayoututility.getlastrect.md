This version of Unity is unsupported.



# [GUILayoutUtility](GUILayoutUtility.html).GetLastRect




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

public static [Rect](Rect.html) GetLastRect();






### Returns



**Rect**
        The last used rectangle.





### Description



Get the rectangle last used by GUILayout for a control.





Note that this only works during the Repaint event.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void OnGUI()
    {
        GUILayout.Button("My button");
        if (Event.current.type == EventType.Repaint &&
            GUILayoutUtility.GetLastRect().Contains(Event.current.mousePosition))
        {
            GUILayout.Label("Mouse over!");
        }
        else
        {
            GUILayout.Label("Mouse somewhere else");
        }
    }
}
```


            

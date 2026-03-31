This version of Unity is unsupported.



# [RectTransform](RectTransform.html).rect




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












                    public [Rect](Rect.html) rect;






### Description



The calculated rectangle in the local space of the [Transform](Transform.html).





Unity automatically attaches these to UI elements. Manipulate aspects of the rectangle in the Inspector such as the position, dimensions, rotation, and scale.
This is read-only in a script.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    RectTransform rectTransform;    void Start()
    {
        //Fetch the RectTransform from the GameObject
        rectTransform = GetComponent<RectTransform>();
    }    void OnGUI()
    {
        //The Label shows the current Rect settings on the screen
        GUI.Label(new Rect(20, 20, 150, 80), "Rect : " + rectTransform.rect);
    }
}
```


            

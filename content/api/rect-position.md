This version of Unity is unsupported.



# [Rect](Rect.html).position




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



The X and Y position of the rectangle.





This is the same as [min](Rect-min.html), except that setting it will move the rectangle rather than resize it.


              


```
using UnityEngine;// Show Rect, the position selected randomly.public class RectExample : MonoBehaviour
{
    private Rect rect;    void Start()
    {
        rect = new Rect(600 * Random.value, 450 * Random.value, 200, 150);
    }    void Update()
    {
        if (Input.GetKeyDown("space"))
        {
            rect.position = new Vector2(600 * Random.value, 450 * Random.value);
        }
    }    // display a rectangle
    void OnGUI()
    {
        GUI.Box(rect, "");
    }
}
```


            

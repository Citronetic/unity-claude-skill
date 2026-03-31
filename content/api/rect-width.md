This version of Unity is unsupported.



# [Rect](Rect.html).width




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












                    public float width;






### Description



The width of the rectangle, measured from the X position.





Setting this value will also change [xMax](Rect-xMax.html).


              


```
using UnityEngine;public class RectExample : MonoBehaviour
{
    // Use this for initialization
    void Start()
    {
        Rect rect = new Rect(10, 10, 50, 30);
        Debug.Log("width = " + rect.width); // prints: width = 50
        rect.width = 20;
        Debug.Log("new max x = " + rect.xMax); // prints: new max x = 30
    }
}
```


            

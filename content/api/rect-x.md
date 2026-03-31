This version of Unity is unsupported.



# [Rect](Rect.html).x




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












                    public float x;






### Description



The X coordinate of the rectangle.





This value is the same as [xMin](Rect-xMin.html), but setting it will move the rectangle rather than resize it.


              


```
using UnityEngine;public class RectExample : MonoBehaviour
{
    // Use this for initialization
    void Start()
    {
        Rect rect = new Rect(10, 10, 50, 30);
        Debug.Log("x = " + rect.x); // -- prints: x = 10
        rect.x = 20;
        Debug.Log(rect); // prints: (x:20, y:10, width:50, height:30)
    }
}
```


            

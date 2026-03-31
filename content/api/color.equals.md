This version of Unity is unsupported.



# [Color](Color.html).Equals




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

public bool Equals([Color](Color.html) other);






## Declaration

public bool Equals(object other);






### Parameters



| Parameter | Description |
| --- | --- |
| other | The other Color that is used for the equality check. |





### Returns



**bool**
        True if the given color is exactly equal to this color.





### Description



Returns true if the given color is exactly equal to this color, i.e. if the red, green, blue, and alpha values are exactly the same.





Due to floating point inaccuracies, this might return false for colors which are essentially (but not exactly) equal. Use the == operator to test two Colors for approximate equality.


              


```
using UnityEngine;public class ColorEqualsExample : MonoBehaviour
{
    Color a = new Color(1f, 0f, 0f, 1f);
    private Color b = Color.red;
    private Color c = new Color(0f, 1f, 0f, 1f);    void Start()
    {
        Debug.Assert(a.Equals(b));
        Debug.Assert(!a.Equals(c));
    }
}
```


            

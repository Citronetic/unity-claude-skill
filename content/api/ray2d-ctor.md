This version of Unity is unsupported.



# Ray2D Constructor




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

public Ray2D([Vector2](Vector2.html) origin,
[Vector2](Vector2.html) direction);






### Parameters



| Parameter | Description |
| --- | --- |
| Vector2 | Origin. |
| Vector2 | Direction. |





### Description



Creates a 2D ray starting at [origin](Ray2D-origin.html) along [direction](Ray2D-direction.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        // Create a ray from the transform position along the transform's z-axis
        Ray2D ray = new Ray2D(transform.position, transform.forward);
    }
}
```


            

This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).bool




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



















### Parameters



| Parameter | Description |
| --- | --- |
| hit | The RaycastHit2D to being checked for valid results. |





### Description



Implicit operator used to return a `true` or `false` result indicating if the result is valid or not.





When using any physics query that returns a RaycastHit2D, you should always first check to see if it contains a valid result which indicates a hit (intersection) was detected. You can do this by checking if the RaycastHit2D is `true` or `false`.

**NOTE:** A valid result is indicated by the field RaycastHit2D.Collider referring to a valid [Collider2D](Collider2D.html) i.e. not being NULL. This operator is therefore equivalent to checking if that field is NULL ( `false` ) or not NULL ( `true` ).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public Vector2 direction;    void Update()
    {
        // Cast a ray in the direction specified in the inspector.
        RaycastHit2D hit = Physics2D.Raycast(transform.position, direction);        // If something was hit, draw a line from the start position to the point we intersected.
        if (hit)
            Debug.DrawLine(transform.position, hit.point, Color.yellow);
    }
}
```


            

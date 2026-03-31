This version of Unity is unsupported.



# [Bounds](Bounds.html).Expand




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

public void Expand(float amount);






### Description



Expand the bounds by: `size + ( amount * 2 )` along each side.





Expands the bounds symmetrically by extending each side by the given amount, resulting in a total size increase of (amount × 2) per axis.


              


```
using UnityEngine;public class BoundsExpandExample : MonoBehaviour
{
    public Vector3 boundsSize = new Vector3(1, 1, 1);
    public float expandAmount = 1f;    private Bounds bounds;    void Start()
    {
        // Initialize bounds at the object's position
        bounds = new Bounds(transform.position, boundsSize);        // Expand the bounds by a scalar (applied uniformly in all directions)
        bounds.Expand(expandAmount);
    }    void Update()
    {
        DrawBounds(bounds, Color.yellow);
    }    void DrawBounds(Bounds b, Color color)
    {
        Vector3 min = b.min;
        Vector3 max = b.max;        Vector3[] corners = new Vector3[8];
        corners[0] = new Vector3(min.x, min.y, min.z);
        corners[1] = new Vector3(max.x, min.y, min.z);
        corners[2] = new Vector3(max.x, min.y, max.z);
        corners[3] = new Vector3(min.x, min.y, max.z);
        corners[4] = new Vector3(min.x, max.y, min.z);
        corners[5] = new Vector3(max.x, max.y, min.z);
        corners[6] = new Vector3(max.x, max.y, max.z);
        corners[7] = new Vector3(min.x, max.y, max.z);        Debug.DrawLine(corners[0], corners[1], color);
        Debug.DrawLine(corners[1], corners[2], color);
        Debug.DrawLine(corners[2], corners[3], color);
        Debug.DrawLine(corners[3], corners[0], color);        Debug.DrawLine(corners[4], corners[5], color);
        Debug.DrawLine(corners[5], corners[6], color);
        Debug.DrawLine(corners[6], corners[7], color);
        Debug.DrawLine(corners[7], corners[4], color);        Debug.DrawLine(corners[0], corners[4], color);
        Debug.DrawLine(corners[1], corners[5], color);
        Debug.DrawLine(corners[2], corners[6], color);
        Debug.DrawLine(corners[3], corners[7], color);
    }
}
```




---








## Declaration

public void Expand([Vector3](Vector3.html) amount);






### Description



Expand the bounds by: `size` + (`amount` * 2) along each side.





Expands the bounds symmetrically by extending each side by the given amount, resulting in a total size increase of (amount × 2) per axis.


            

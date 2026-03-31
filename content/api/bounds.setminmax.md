This version of Unity is unsupported.



# [Bounds](Bounds.html).SetMinMax




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

public void SetMinMax([Vector3](Vector3.html) min,
[Vector3](Vector3.html) max);






### Description



Sets the bounds to the `min` and `max` value of the box.





Using this function is faster than assigning `min` and `max` separately.


              


```
using UnityEngine;[ExecuteAlways]
public class BoundsSetMinMaxExample : MonoBehaviour
{
    // These represent the corners of the box in world space.
    // 'min' is the corner with the smallest X, Y, and Z values — typically bottom-left-back.
    // 'max' is the corner with the largest X, Y, and Z values — typically top-right-front.
    public Vector3 min = new Vector3(-1, -1, -1); // Bottom-left-back
    public Vector3 max = new Vector3(1, 1, 1);    // Top-right-front
    public Color gizmoColor = Color.cyan;    private Bounds bounds;    void Update()
    {
        // Sets the bounds using the min (smallest XYZ) and max (largest XYZ) corners
        bounds.SetMinMax(min, max);
    }    void OnDrawGizmos()
    {
        // Draw the bounding box as a wireframe cube in the Scene view
        Gizmos.color = gizmoColor;
        Gizmos.DrawWireCube(bounds.center, bounds.size);        // Optional: draw small spheres at min and max points for visual clarity
        Gizmos.color = Color.red;
        Gizmos.DrawSphere(min, 0.1f); // Bottom-left-back (min)
        Gizmos.color = Color.green;
        Gizmos.DrawSphere(max, 0.1f); // Top-right-front (max)
    }
}
```


            

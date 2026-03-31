This version of Unity is unsupported.



# [LineRenderer](LineRenderer.html).useWorldSpace




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




                [Switch to Manual](../Manual/class-LineRenderer.html)







                    public bool useWorldSpace;






### Description



If enabled, the lines are defined in world space.





This means the object's position is ignored, and the lines are rendered around world origin.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Creates a line renderer at the origin with 2 colors.    void Start()
    {
        LineRenderer lineRenderer;
        lineRenderer = gameObject.AddComponent<LineRenderer>();
        lineRenderer.useWorldSpace = false;
        lineRenderer.material = new Material(Shader.Find("Sprites/Default"));
        lineRenderer.SetColors(Color.red, Color.yellow);
    }
}
```


            

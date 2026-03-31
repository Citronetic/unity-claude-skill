This version of Unity is unsupported.



# [Handles](Handles.html).zTest




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












                    public static [Rendering.CompareFunction](Rendering.CompareFunction.html) zTest;






### Description



zTest of the handles.





Default value is Always.

[Image: image]

*This anchor shows the first downwards collider intersection. Depth pass lines appears green, depth fail, red.*

To use this example, attach this script to the object you wish to display the anchor :


              


```
using UnityEngine;
using UnityEditor;[ExecuteInEditMode]
public class SampleAnchor : MonoBehaviour
{
    void OnDrawGizmosSelected()
    {
        Ray ray = new Ray(transform.position, Vector3.down);
        RaycastHit hit;
        if (Physics.Raycast(ray, out hit))
        {
            Handles.color = Color.green;
            Handles.zTest = UnityEngine.Rendering.CompareFunction.LessEqual;
            Handles.DrawLine(transform.position, hit.point);
            Handles.DrawWireDisc(hit.point, hit.normal, 0.5f);            Handles.color = Color.red;
            Handles.zTest = UnityEngine.Rendering.CompareFunction.Greater;
            Handles.DrawLine(transform.position, hit.point);
            Handles.DrawWireDisc(hit.point, hit.normal, 0.5f);
        }
    }
}
```


            

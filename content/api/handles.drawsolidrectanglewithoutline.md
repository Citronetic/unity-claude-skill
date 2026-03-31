This version of Unity is unsupported.



# [Handles](Handles.html).DrawSolidRectangleWithOutline




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

public static void DrawSolidRectangleWithOutline(Vector3[] verts,
[Color](Color.html) faceColor,
[Color](Color.html) outlineColor);






### Parameters



| Parameter | Description |
| --- | --- |
| verts | The 4 vertices of the rectangle in world coordinates. |
| faceColor | The color of the rectangle's face. |
| outlineColor | The outline color of the rectangle. |





### Description



Draw a solid outlined rectangle in 3D space.





[Image: image]


*Solid rectangle with a black outline in the Scene View.*


              


```
// Create a semi transparent rectangle that lets you modify
// the "range" that resides in "SolidRectangleExample.cs"using UnityEngine;
using UnityEditor;[CustomEditor(typeof(SolidRectangleExample))]
public class DrawSolidRectangle : Editor
{
    void OnSceneGUI()
    {
        SolidRectangleExample t = target as SolidRectangleExample;
        Vector3 pos = t.transform.position;        Vector3[] verts = new Vector3[]
        {
            new Vector3(pos.x - t.range, pos.y, pos.z - t.range),
            new Vector3(pos.x - t.range, pos.y, pos.z + t.range),
            new Vector3(pos.x + t.range, pos.y, pos.z + t.range),
            new Vector3(pos.x + t.range, pos.y, pos.z - t.range)
        };        Handles.DrawSolidRectangleWithOutline(verts, new Color(0.5f, 0.5f, 0.5f, 0.1f), new Color(0, 0, 0, 1));        foreach (Vector3 posCube in verts)
        {
            t.range = Handles.ScaleValueHandle(t.range,
                posCube,
                Quaternion.identity,
                1.0f,
                Handles.CubeHandleCap,
                1.0f);
        }
    }
}
```





And the script attached to this Handle:


              


```
using UnityEngine;public class SolidRectangleExample : MonoBehaviour
{
    public float range = 5.0f;
}
```


            

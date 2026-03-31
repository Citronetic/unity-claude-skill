This version of Unity is unsupported.



# [Handles](Handles.html).DrawBezier




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

public static void DrawBezier([Vector3](Vector3.html) startPosition,
[Vector3](Vector3.html) endPosition,
[Vector3](Vector3.html) startTangent,
[Vector3](Vector3.html) endTangent,
[Color](Color.html) color,
[Texture2D](Texture2D.html) texture,
float width);






### Parameters



| Parameter | Description |
| --- | --- |
| startPosition | The start point of the bezier line. |
| endPosition | The end point of the bezier line. |
| startTangent | The start tangent of the bezier line. |
| endTangent | The end tangent of the bezier line. |
| color | The color to use for the bezier line. |
| texture | The texture to use for drawing the bezier line. |
| width | The width of the bezier line. |





### Description



Draw textured bezier line through start and end points with the given tangents.





To get an anti-aliased effect use a texture that is 1x2 pixels with one transparent white pixel and one opaque white pixel.  The bezier curve will be swept using this texture.

**Note:** Use [HandleUtility.GetHandleSize](HandleUtility.GetHandleSize.html) where you might want to have constant screen-sized handles.

[Image: image]

*Bezier Line in the Scene View.*


              


```
using UnityEditor;
using UnityEngine;[CustomEditor(typeof(BezierExample))]
public class DrawBezierExample : Editor
{
    void OnSceneGUI()
    {
        BezierExample be = target as BezierExample;        be.startPoint = Handles.PositionHandle(be.startPoint, Quaternion.identity);
        be.endPoint = Handles.PositionHandle(be.endPoint, Quaternion.identity);
        be.startTangent = Handles.PositionHandle(be.startTangent, Quaternion.identity);
        be.endTangent = Handles.PositionHandle(be.endTangent, Quaternion.identity);        // Visualize the tangent lines
        Handles.DrawDottedLine(be.startPoint, be.startTangent, 5);
        Handles.DrawDottedLine(be.endPoint, be.endTangent, 5);        Handles.DrawBezier(be.startPoint, be.endPoint, be.startTangent, be.endTangent, Color.red, null, 5f);
    }
}
```





And the script attached to this Handle:


              


```
using UnityEngine;public class BezierExample : MonoBehaviour
{
    public Vector3 startPoint = new Vector3(-5f, 2f, 0f);
    public Vector3 endPoint = new Vector3(5f, -2f, 0f);
    public Vector3 startTangent = new Vector3(0f, 2f, 0f);
    public Vector3 endTangent = new Vector3(0f, -2f, 0f);
}
```


            

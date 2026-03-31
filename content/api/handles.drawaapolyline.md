This version of Unity is unsupported.



# [Handles](Handles.html).DrawAAPolyLine




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

public static void DrawAAPolyLine(Color[] colors,
Vector3[] points);






## Declaration

public static void DrawAAPolyLine(float width,
Color[] colors,
Vector3[] points);






## Declaration

public static void DrawAAPolyLine(params Vector3[] points);






## Declaration

public static void DrawAAPolyLine(float width,
params Vector3[] points);






## Declaration

public static void DrawAAPolyLine([Texture2D](Texture2D.html) lineTex,
params Vector3[] points);






## Declaration

public static void DrawAAPolyLine(float width,
int actualNumberOfPoints,
params Vector3[] points);






## Declaration

public static void DrawAAPolyLine([Texture2D](Texture2D.html) lineTex,
float width,
params Vector3[] points);






### Parameters



| Parameter | Description |
| --- | --- |
| lineTex | The AA texture used for rendering. |
| width | The width of the line. |
| points | List of points to build the line from. |
| colors | The colors to apply to each point. Must match the length of the points array or actualNumberOfPoints, whichever is lower and greater than zero. |
| actualNumberOfPoints | The total number of vertices to draw of the points array. Use this to keep a reusable buffer of point values without the need to resize frequently. |





### Description



Draw anti-aliased line specified with point array and width.





**Note:** Use [HandleUtility.GetHandleSize](HandleUtility.GetHandleSize.html) where you might want to have constant screen-sized handles.

**Note:** To get an anti-aliased effect use a texture that is 1x2 pixels with one transparent white pixel and one opaque white pixel.


              


```
using UnityEditor;
using UnityEngine;

public class ArrowDrawer : MonoBehaviour
{
    public void DrawArrow(Color color, float arrowThickness, float lineThickness, float shorten, Vector3 start, Vector3 end)
    {
        var length = (end - start).magnitude;
        if (length < 0.001f)
            return;

        var forward = (end - start) / length;
        var right = Vector3.Cross(Vector3.up, forward).normalized;

        var width = arrowThickness * 0.5f;
        var height = arrowThickness * 0.7f;

        start += forward * shorten;
        end -= forward * shorten;

        var arrowHead = new Vector3[3]
        {
            end,
            end - forward * height + right * width,
            end - forward * height - right * width
        };

        var arrowLine = new Vector3[2]
        {
            start,
            end - forward * height
        };

        Handles.color = color;
        Handles.DrawAAPolyLine(lineThickness, 2, arrowLine);
        Handles.DrawAAConvexPolygon(arrowHead);
    }

    void OnDrawGizmos()
    {
        DrawArrow(Color.white, 1f, 3f, 0f, transform.position, transform.position + transform.TransformDirection(Vector3.forward) * 4f);
    }
}
```


            

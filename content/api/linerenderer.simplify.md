This version of Unity is unsupported.



# [LineRenderer](LineRenderer.html).Simplify




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










## Declaration

public void Simplify(float tolerance);






### Parameters



| Parameter | Description |
| --- | --- |
| tolerance | This value is used to evaluate which points should be removed from the line. A higher value results in a simpler line (less points). A positive value close to zero results in a line with little to no reduction. A value of zero or less has no effect. |





### Description



Generates a simplified version of the original line by removing points that fall within the specified tolerance.





Uses [LineUtility.Simplify](LineUtility.Simplify.html) to perform the line simplification.

This example shows how an existing line can be simplified:


              


```
using UnityEngine;// This example shows how to apply line simplification to a line that already contains points.
[RequireComponent(typeof(LineRenderer))]
public class SimpleExampleLineRenderer : MonoBehaviour
{
    public float tolerance = 1;
    void Start()
    {
        var lineRenderer = GetComponent<LineRenderer>();
        int pointsBefore = lineRenderer.positionCount;
        lineRenderer.Simplify(tolerance);
        Debug.Log("Line reduced from " + pointsBefore + " to " + lineRenderer.positionCount);
    }
}
```





**This example generates a line in the shape of a sine wave and provides a GUI for customizing the line generation and simplification parameters.**


              


```
using System.Collections.Generic;
using UnityEngine;// This example creates a sine wave and then simplifies it using LineRenderer.Simplify.
// The parameters can be adjusted through an in game GUI to allow for experimentation.
[RequireComponent(typeof(LineRenderer))]
public class LineRendererExample : MonoBehaviour
{
    public int numberOfPoints = 1000;
    public float length = 50;
    public float waveHeight = 10;
    public float tolerance = 0.1f;    private LineRenderer lineRenderer;
    private List<Vector3> points = new List<Vector3>(); // Generated points before Simplify is used.    public void Start()
    {
        lineRenderer = GetComponent<LineRenderer>();
        GeneratePoints();
    }    // Generates the sine wave points.
    public void GeneratePoints()
    {
        points.Clear();
        float halfWaveHeight = waveHeight * 0.5f;
        float step = length / numberOfPoints;
        for (int i = 0; i < numberOfPoints; ++i)
        {
            points.Add(new Vector3(i * step, Mathf.Sin(i * step) * halfWaveHeight, 0));
        }
        lineRenderer.SetPositions(points.ToArray());
    }    // Draw a simple GUI slider with a label.
    private static float GUISlider(string label, float value, float min, float max)
    {
        GUILayout.BeginHorizontal(GUILayout.Width(Screen.width / 2.0f));
        GUILayout.Label(label + "(" + value + ") :", GUILayout.Width(150));
        var val = GUILayout.HorizontalSlider(value, min, max);
        GUILayout.EndHorizontal();
        return val;
    }    public void OnGUI()
    {
        GUILayout.Label("LineRenderer.Simplify", GUI.skin.box);        // We use GUI.changed to detect if a value was changed via the GUI, if it has we can then re-generate the points and simplify the line again.
        GUI.changed = false;        numberOfPoints = (int)GUISlider("Number of Points", numberOfPoints, 0, 1000);
        length = GUISlider("Length", length, 0, 100);
        waveHeight = GUISlider("Wave Height", waveHeight, 0, 100);
        if (GUI.changed)
            GeneratePoints();        tolerance = GUISlider("Simplify Tolerance", tolerance, 0, 2);
        if (GUI.changed)
            lineRenderer.Simplify(tolerance);        float percentRemoved = 100.0f - ((float)lineRenderer.positionCount / numberOfPoints) * 100.0f;
        if (tolerance > 0.0f)
            GUILayout.Label("Points after simplification: " + lineRenderer.positionCount + "(Removed " + percentRemoved.ToString("##.##") + "%)");
    }
}
```


            

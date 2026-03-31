This version of Unity is unsupported.



# [LineRenderer](LineRenderer.html).SetPositions




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

public void SetPositions(Vector3[] positions);






## Declaration

public void SetPositions(NativeArray<Vector3> positions);






## Declaration

public void SetPositions(NativeSlice<Vector3> positions);






### Parameters



| Parameter | Description |
| --- | --- |
| positions | The array of positions to set. |





### Description



Set the positions of all vertices in the line.





This method is preferred to [SetPosition](LineRenderer.SetPosition.html) when setting all positions, as it is more efficient to set all positions using a single command than to set each position individually.  Note that [positionCount](LineRenderer-positionCount.html) must be called before [SetPositions](LineRenderer.SetPositions.html). Also [SetPositions](LineRenderer.SetPositions.html) ignores points with indices beyond [positionCount](LineRenderer-positionCount.html).

Additional resources: [positionCount](LineRenderer-positionCount.html) property, [SetPosition](LineRenderer.SetPosition.html) function.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    // Creates a line renderer that follows a Sin() function
    // and animates it.    public Color c1 = Color.yellow;
    public Color c2 = Color.red;
    public int lengthOfLineRenderer = 20;    LineRenderer lineRenderer;    void Start()
    {
        lineRenderer = gameObject.AddComponent<LineRenderer>();
        lineRenderer.material = new Material(Shader.Find("Sprites/Default"));
        lineRenderer.widthMultiplier = 0.2f;
        lineRenderer.positionCount = lengthOfLineRenderer;        // A simple 2 color gradient with a fixed alpha of 1.0f.
        float alpha = 1.0f;
        Gradient gradient = new Gradient();
        gradient.SetKeys(
            new GradientColorKey[] { new GradientColorKey(c1, 0.0f), new GradientColorKey(c2, 1.0f) },
            new GradientAlphaKey[] { new GradientAlphaKey(alpha, 0.0f), new GradientAlphaKey(alpha, 1.0f) }
        );
        lineRenderer.colorGradient = gradient;
    }    void Update()
    {
        LineRenderer lineRenderer = GetComponent<LineRenderer>();
        var points = new Vector3[lengthOfLineRenderer];
        var t = Time.time;
        for (int i = 0; i < lengthOfLineRenderer; i++)
        {
            points[i] = new Vector3(i * 0.5f, Mathf.Sin(i + t), 0.0f);
        }
        lineRenderer.SetPositions(points);
    }
}
```


            

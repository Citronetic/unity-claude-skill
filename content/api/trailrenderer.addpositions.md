This version of Unity is unsupported.



# [TrailRenderer](TrailRenderer.html).AddPositions




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




                [Switch to Manual](../Manual/class-TrailRenderer.html)










## Declaration

public void AddPositions(Vector3[] positions);






## Declaration

public void AddPositions(out NativeArray<Vector3> positions);






## Declaration

public void AddPositions(out NativeSlice<Vector3> positions);






### Parameters



| Parameter | Description |
| --- | --- |
| positions | The positions to add to the trail. |





### Description



Add an array of positions to the trail.





All points inside a TrailRenderer store a timestamp when they are born. This, together with the [TrailRenderer.time](time.html) property, is used to determine when they will be removed. For trails to disappear smoothly, each position must have a unique, increasing timestamp. When positions are supplied from script and the current time is identical for multiple points, position timestamps are adjusted to interpolate smoothly between the timestamp of the newest existing point in the trail and the current time.


              


```
using UnityEngine;
using System.Collections;
using System.Collections.Generic;[RequireComponent(typeof(TrailRenderer))]
public class ExampleClass : MonoBehaviour
{
    public int numExtraPositions = 0;
    public float speed = 20.0f;
    public float radius = 4.0f;    private TrailRenderer tr;    void Start()
    {
        tr = GetComponent<TrailRenderer>();
        tr.material = new Material(Shader.Find("Sprites/Default"));
        tr.time = 0.2f;
        tr.widthMultiplier = 0.3f;
    }    void Update()
    {
        float time = Time.time;
        tr.transform.position = CalculatePosition(time);        if (numExtraPositions > 0)
        {
            float prevTime = time - Time.deltaTime;
            List<Vector3> extraPositions = new List<Vector3>(numExtraPositions);            for (int i = 0; i < numExtraPositions; i++)
            {
                float percentage = (float)(i + 1) / (numExtraPositions + 1);
                float blendedTime = Mathf.LerpUnclamped(prevTime, time, percentage);
                extraPositions.Add(CalculatePosition(blendedTime));
            }            tr.AddPositions(extraPositions.ToArray());
        }
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 20, 200, 30), "Extra Positions");
        numExtraPositions = (int)GUI.HorizontalSlider(new Rect(165, 25, 200, 30), (float)numExtraPositions, 0, 5);
    }    private Vector3 CalculatePosition(float time)
    {
        return new Vector3(Mathf.Sin(time * speed) * radius, Mathf.Cos(time * speed) * radius, 0.0f);
    }
}
```


            

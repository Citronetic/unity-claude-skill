This version of Unity is unsupported.



# [TrailRenderer](TrailRenderer.html).numCapVertices




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







                    public int numCapVertices;






### Description



Set this to a value greater than 0, to get rounded corners on each end of the trail.





The value controls how many vertices are added to each end, where a higher value will give a smoother result.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(TrailRenderer))]
public class ExampleClass : MonoBehaviour
{
    public int numCapVertices = 0;
    public int numCornerVertices = 0;
    private TrailRenderer tr;    void Start()
    {
        tr = GetComponent<TrailRenderer>();
        tr.material = new Material(Shader.Find("Sprites/Default"));
        tr.minVertexDistance = 0.5f;
    }    void Update()
    {
        tr.numCapVertices = numCapVertices;
        tr.numCornerVertices = numCornerVertices;
        tr.transform.position = new Vector3(Mathf.Sin(Time.time * 1.51f) * 7.0f, Mathf.Cos(Time.time * 1.27f) * 4.0f, 0.0f);
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 20, 200, 30), "Num Cap Vertices");
        numCapVertices = (int)GUI.HorizontalSlider(new Rect(165, 25, 200, 30), (float)numCapVertices, 0.0f, 20.0f);        GUI.Label(new Rect(25, 60, 200, 30), "Num Corner Vertices");
        numCornerVertices = (int)GUI.HorizontalSlider(new Rect(165, 65, 200, 30), (float)numCornerVertices, 0.0f, 20.0f);
    }
}
```


            

This version of Unity is unsupported.



# [TrailRenderer](TrailRenderer.html).minVertexDistance




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







                    public float minVertexDistance;






### Description



Set the minimum distance the trail can travel before a new vertex is added to it.





Smaller values with give smoother trails, consisting of more vertices, but costing more performance.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(TrailRenderer))]
public class ExampleClass : MonoBehaviour
{
    public float minVertexDistance = 0.5f;
    private TrailRenderer tr;    void Start()
    {
        tr = GetComponent<TrailRenderer>();
        tr.material = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        tr.minVertexDistance = minVertexDistance;
        tr.transform.position = new Vector3(Mathf.Sin(Time.time * 1.51f) * 7.0f, Mathf.Cos(Time.time * 1.27f) * 4.0f, 0.0f);
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 20, 200, 30), "Vertex Distance");
        minVertexDistance = GUI.HorizontalSlider(new Rect(165, 25, 200, 30), minVertexDistance, 0.1f, 5.0f);
    }
}
```


            

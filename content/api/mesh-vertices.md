This version of Unity is unsupported.



# [Mesh](Mesh.html).vertices




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




                [Switch to Manual](../Manual/class-Mesh.html)







                    public Vector3[] vertices;






### Description



Returns a copy of the vertex positions or assigns a new vertex positions array.





The number of vertices in the Mesh is changed by assigning a vertex array with a different number of vertices.

If you resize the vertex array then all other vertex attributes (normals, colors, tangents, UVs) are automatically resized too.
[RecalculateBounds](Mesh.RecalculateBounds.html) is automatically invoked if no vertices have been assigned to the Mesh when setting the vertices.

Note that this method returns the vertices in local space, not in world space.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Mesh mesh;
    Vector3[] vertices;
    void Start()
    {
        mesh = GetComponent<MeshFilter>().mesh;
        vertices = mesh.vertices;
    }    void Update()
    {
        for (var i = 0; i < vertices.Length; i++)
        {
            vertices[i] += Vector3.up * Time.deltaTime;
        }        // assign the local vertices array into the vertices array of the Mesh.
        mesh.vertices = vertices;
        mesh.RecalculateBounds();
    }
}
```





**Note:** To make changes to the [vertices](Mesh-vertices.html) it is important to
          copy the vertices from the [Mesh](Mesh.html). Once the [vertices](Mesh-vertices.html) have been copied and
          changed the [vertices](Mesh-vertices.html) can be reassigned back to the [Mesh](Mesh.html).


            

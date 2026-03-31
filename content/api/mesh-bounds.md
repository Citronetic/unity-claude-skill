This version of Unity is unsupported.



# [Mesh](Mesh.html).bounds




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







                    public [Bounds](Bounds.html) bounds;






### Description



The bounding volume of the Mesh.





This is the axis-aligned bounding box of the mesh in its own space, so the bounds don't change if you change the Transform position, rotation or scale. The [Renderer.bounds](Renderer-bounds.html) property is similar but returns the bounds in world space.

Additional resources: [Bounds](Bounds.html) class, [Renderer.bounds](Renderer-bounds.html)


              


```
// Generates planar UV coordinates independent of mesh size
// by scaling vertices by the bounding box sizeusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        Vector3[] vertices = mesh.vertices;
        Vector2[] uvs = new Vector2[vertices.Length];
        Bounds bounds = mesh.bounds;
        int i = 0;
        while (i < uvs.Length)
        {
            uvs[i] = new Vector2(vertices[i].x / bounds.size.x, vertices[i].z / bounds.size.x);
            i++;
        }
        mesh.uv = uvs;
    }
}
```


            

This version of Unity is unsupported.



# [Mesh](Mesh.html).colors




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







                    public Color[] colors;






### Description



Vertex colors of the Mesh.





If no vertex colors are available, an empty array will be returned.


              


```
// Sets the vertex color to be red at the y=0 and green at y=1.
// (Note that most built-in Shaders don't display vertex colors. Use one that does, such as a Particle Shader, to see vertex colors)using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        Vector3[] vertices = mesh.vertices;        // create new colors array where the colors will be created.
        Color[] colors = new Color[vertices.Length];        for (int i = 0; i < vertices.Length; i++)
            colors[i] = Color.Lerp(Color.red, Color.green, vertices[i].y);        // assign the array of colors to the Mesh.
        mesh.colors = colors;
    }
}
```





For performance reasons, consider using [colors32](Mesh-colors32.html) instead. This will avoid byte-to-float
conversions in colors, and use less temporary memory.


            

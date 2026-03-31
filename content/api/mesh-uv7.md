This version of Unity is unsupported.



# [Mesh](Mesh.html).uv7




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







                    public Vector2[] uv7;






### Description



The texture coordinates (UVs) in the seventh channel.





This channel is also commonly called "UV6". It maps to the shader semantic `TEXCOORD6`. When you call [Mesh.HasVertexAttribute](Mesh.HasVertexAttribute.html), this channel corresponds to [VertexAttribute.TexCoord6](Rendering.VertexAttribute.TexCoord6.html).

Unity stores UVs in 0-1 space. [0,0] represents the bottom-left corner of the texture, and [1,1] represents the top-right. Values are not clamped; you can use values below 0 and above 1 if needed.

This property is supported for backwards compatibility, but the newer [GetUVs](Mesh.GetUVs.html) and [SetUVs](Mesh.SetUVs.html) functions allow you to access the same data in a more user-friendly way, and use a Vector3 or Vector4 value if you need to.

This property returns a copy of the data. This means that it causes a heap memory allocation. It also means that to make changes to the original data, you must update the copy and then reassign the updated copy to the mesh.

The following example demonstrates how to create an array to hold UV data, assign texture coordinates to it, and then assign it to the mesh.


              


```
// Generate planar uv coordinates for the seventh uv setusing UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        Vector3[] vertices = mesh.vertices;
        Vector2[] uvs = new Vector2[vertices.Length];        for (int i = 0; i < uvs.Length; i++)
        {
            uvs[i] = new Vector2(vertices[i].x, vertices[i].z);
        }
        mesh.uv7 = uvs;
    }
}
```





Additional resources: [GetUVs](Mesh.GetUVs.html), [SetUVs](Mesh.SetUVs.html), [AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            

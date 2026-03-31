This version of Unity is unsupported.



# [Mesh](Mesh.html).vertexBufferCount




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







                    public int vertexBufferCount;






### Description



Gets the number of vertex buffers present in the Mesh. (Read Only)





Most Meshes contain only one vertex buffer, but some (such as skinned Meshes on some platforms)
might contain more than one. This property is mostly useful together with [GetNativeVertexBufferPtr](Mesh.GetNativeVertexBufferPtr.html)
to enable Mesh manipulation from [native code plugins](../Manual/native-plugin-interface.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // Create a Mesh with custom vertex data layout:
        // position and normal go into stream 0,
        // color goes into stream 1.
        var mesh = new Mesh();
        mesh.SetVertexBufferParams(10,
            new VertexAttributeDescriptor(VertexAttribute.Position, VertexAttributeFormat.Float32, 3, stream:0),
            new VertexAttributeDescriptor(VertexAttribute.Normal, VertexAttributeFormat.Float32, 3, stream:0),
            new VertexAttributeDescriptor(VertexAttribute.Color, VertexAttributeFormat.UNorm8, 4, stream:1));        // Prints 2 (two vertex streams)
        Debug.Log($"Vertex stream count: {mesh.vertexBufferCount}");        // Cleanup
        Object.DestroyImmediate(mesh);
    }
}
```





Additional resources: [Native code plugins](../Manual/native-plugin-interface.html), [GetNativeVertexBufferPtr](Mesh.GetNativeVertexBufferPtr.html), [SetVertexBufferParams](Mesh.SetVertexBufferParams.html), [GetVertexAttributeOffset](Mesh.GetVertexAttributeOffset.html).


            

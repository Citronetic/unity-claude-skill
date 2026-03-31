This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetVertexData




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










## Declaration

public NativeArray<T> GetVertexData(int stream = 0);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The vertex buffer stream to get data for. The default value is 0. |





### Returns



**NativeArray<T>**
        Returns a `NativeArray` containing the vertex buffer data.





### Description



Gets raw data for a given vertex buffer stream format in the `MeshData`.





`GetVertexData` returns a direct "pointer" into the raw vertex buffer data without any memory allocations, data copies or conversions. You do not need to dispose of the returned `NativeArray`, because it does not represent a new memory allocation.

You need to know the exact Mesh data layout to do this: for instance, the presence and formats of all the mesh vertex attributes. The data layout matches the one from [Mesh.SetVertexBufferData](Mesh.SetVertexBufferData.html).

If the `MeshData` is writeable, and you have set the vertex buffer size and layout using [Mesh.MeshData.SetVertexBufferParams](Mesh.MeshData.SetVertexBufferParams.html), you can write vertex data directly to the array. If the `MeshData` is read-only, the array is read-only.

Additional resources: [Mesh.AllocateWritableMeshData](Mesh.AllocateWritableMeshData.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html), [Mesh.MeshData.SetVertexBufferParams](Mesh.MeshData.SetVertexBufferParams.html).


              


```
using UnityEngine;
public class ExampleScript : MonoBehaviour
{
    struct Vertex
    {
        public Vector3 pos;
        public Vector2 uv;
    }
    void Start()
    {
        var mesh = new Mesh();
        mesh.vertices = new[] {Vector3.one, Vector3.up};
        mesh.uv = new[] {Vector2.right, Vector2.up};
        using (var data = Mesh.AcquireReadOnlyMeshData(mesh))
        {
            var verts = data[0].GetVertexData<Vertex>();
            // prints "pos (1.0, 1.0, 1.0) uv (1.0, 0.0)" and "pos (0.0, 1.0, 0.0) uv (0.0, 1.0)"
            foreach (var v in verts)
                Debug.Log($"pos {v.pos} uv {v.uv}");
        }
    }
}
```





Additional resources: [Mesh.SetVertexBufferParams](Mesh.SetVertexBufferParams.html), [Mesh.SetVertexBufferData](Mesh.SetVertexBufferData.html), [GetIndexData](Mesh.MeshData.GetIndexData.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            

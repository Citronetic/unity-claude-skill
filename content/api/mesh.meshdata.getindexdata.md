This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetIndexData




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

public NativeArray<T> GetIndexData();






### Returns



**NativeArray<T>**
        Returns a `NativeArray` containing the index buffer data.





### Description



Gets raw data from the index buffer of the `MeshData`.





`GetIndexData` returns a direct "pointer" into the raw index buffer data without any memory allocations, data copies or conversions. You do not need to dispose of the returned `NativeArray`, because it does not represent a new memory allocation.

You need to know the exact Mesh data layout work with this data, including the presence and formats of all vertex attributes. The data layout matches the one from [Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html). Typically, Meshes with a 16 bit index format use the `ushort` data type, and Meshes with a 32 bit index format use the `int` data type.

If the `MeshData` is writeable, and you have set the index buffer size and format using [Mesh.MeshData.SetIndexBufferParams](Mesh.MeshData.SetIndexBufferParams.html), you can write indices directly to the array. If the `MeshData` is read-only, the array is read-only.

Additional resources: [Mesh.AllocateWritableMeshData](Mesh.AllocateWritableMeshData.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html), [Mesh.MeshData.SetIndexBufferParams](Mesh.MeshData.SetIndexBufferParams.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;
public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        var mesh = new Mesh();
        mesh.vertices = new[] {Vector3.one, Vector3.zero, Vector3.up};
        mesh.indexFormat = IndexFormat.UInt16;
        mesh.triangles = new[] {2, 0, 1};
        using (var data = Mesh.AcquireReadOnlyMeshData(mesh))
        {
            var indices = data[0].GetIndexData<ushort>();
            // prints 2, 0, 1
            foreach (var i in indices)
                Debug.Log(i);
        }
    }
}
```





Additional resources: [Mesh.SetIndexBufferParams](Mesh.SetIndexBufferParams.html), [Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html), [GetVertexData](Mesh.MeshData.GetVertexData.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            

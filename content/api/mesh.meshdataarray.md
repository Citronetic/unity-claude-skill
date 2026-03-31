This version of Unity is unsupported.



# MeshDataArray





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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














### Description



An array of Mesh data snapshots for C# Job System access.





Access to most Unity objects is not thread-safe, so in order to efficiently process or create meshes from the C# Job System,
use the `MeshDataArray` and `MeshData` structs.

You can use [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html) for read-only access to mesh data of multiple meshes, and
[Mesh.AllocateWritableMeshData](Mesh.AllocateWritableMeshData.html) together with [Mesh.ApplyAndDisposeWritableMeshData](Mesh.ApplyAndDisposeWritableMeshData.html) for creating new meshes.

A single `MeshDataArray` struct represents snapshot of mesh data of multiple meshes. Use [Length](Mesh.MeshDataArray.Length.html) and [index operator](Mesh.MeshDataArray.Index_operator.html) to access data of an individual Mesh. Memory allocation
and C# Job System safety tracking is built into `MeshDataArray` struct, so that the tracking overhead is minimal
when working with multiple meshes at the same time. It is thus much more efficient to use a single `MeshDataArray/`
struct for multiple meshes, than to operate on several individual structs.

It is important to dispose of a `MeshDataArray` struct once you have finished working with it. Use
[Dispose](Mesh.MeshDataArray.Dispose.html) to dispose of the struct when you have finished using it, or
use the C# `using` pattern to do this automatically:


              


```
using Unity.Collections;
using UnityEngine;
public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        var mesh = new Mesh();
        mesh.vertices = new[] {Vector3.one, Vector3.zero};
        using (var dataArray = Mesh.AcquireReadOnlyMeshData(mesh))
        {
            var data = dataArray[0];
            // prints "2"
            Debug.Log(data.vertexCount);
            var gotVertices = new NativeArray<Vector3>(mesh.vertexCount, Allocator.TempJob);
            data.GetVertices(gotVertices);
            // prints "(1.0, 1.0, 1.0)" and "(0.0, 0.0, 0.0)"
            foreach (var v in gotVertices)
                Debug.Log(v);
            gotVertices.Dispose();
        }
    }
}
```





Additional resources: [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html), [Mesh.AllocateWritableMeshData](Mesh.AllocateWritableMeshData.html), [Mesh.ApplyAndDisposeWritableMeshData](Mesh.ApplyAndDisposeWritableMeshData.html), [MeshData](Mesh.MeshData.html).





### Properties



| Property | Description |
| --- | --- |
| Length | Number of Mesh data elements in the MeshDataArray. |
| this[int] | Access MeshDataArray element by an index. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Use this method to dispose of the MeshDataArray struct. |


            

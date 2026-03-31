This version of Unity is unsupported.



# [Mesh.MeshDataArray](Mesh.MeshDataArray.html).Dispose




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

public void Dispose();






### Description



Use this method to dispose of the `MeshDataArray` struct.





It is important to dispose of a `MeshDataArray` struct once you have finished working with it. Modifying a Mesh while a `MeshDataArray` struct for that Mesh exists results in memory allocations and data copies. Use [Dispose](Mesh.MeshDataArray.Dispose.html) to dispose of the `MeshDataArray` struct when you have finished using it, or use the C# `using` pattern to do this automatically:


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
            // prints "2"
            Debug.Log(dataArray[0].vertexCount);
        }
    }
}
```





Additional resources: [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            

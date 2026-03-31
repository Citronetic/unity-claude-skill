This version of Unity is unsupported.



# [MeshCollider](MeshCollider.html).sharedMesh




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




                [Switch to Manual](../Manual/class-MeshCollider.html)







                    public [Mesh](Mesh.html) sharedMesh;






### Description



The mesh object used for collision detection.





If prior to setting [sharedMesh](MeshCollider-sharedMesh.html) any of the vertices, indices or triangles of the mesh have been changed then the shapes of the MeshCollider will be rebuilt.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Assigns an arbitrary mesh collider to the current transform    [SerializeField] Mesh meshToCollide;    void Start()
    {
        if (!meshToCollide)
        {
            Debug.LogError("Assign a mesh in the inspector");
            return;
        }
        MeshCollider meshCollider = gameObject.AddComponent<MeshCollider>();
        meshCollider.sharedMesh = meshToCollide;
    }
}
```


            

This version of Unity is unsupported.



# [MeshFilter](MeshFilter.html).mesh




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




                [Switch to Manual](../Manual/class-MeshFilter.html)







                    public [Mesh](Mesh.html) mesh;






### Description



Returns either a new [mesh](Mesh.html) or a duplicate of the existing mesh, and assigns it to the mesh filter.





If no mesh is assigned to the mesh filter a new mesh will be created and assigned.

If a mesh is assigned to the mesh filter already, then the first query of `mesh` property will create a duplicate of it, and this copy
will be returned. Further queries of `mesh` property will return this duplicated mesh instance.
Once `mesh` property is queried, link to the original shared mesh is lost and [MeshFilter.sharedMesh](MeshFilter-sharedMesh.html) property becomes an alias to `mesh`.
If you want to avoid this automatic mesh duplication, use [MeshFilter.sharedMesh](MeshFilter-sharedMesh.html) instead.

By using `mesh` property you can modify the mesh for a single object only. The
other objects that used the same mesh will not be modified.

It is your responsibility to destroy the automatically instantiated mesh when the game object is being destroyed. [Resources.UnloadUnusedAssets](Resources.UnloadUnusedAssets.html)
also destroys the mesh but it is usually only called when loading a new level.

Consider `mesh` property as a shortcut for the following code:


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().sharedMesh;
        Mesh mesh2 = Instantiate(mesh);
        GetComponent<MeshFilter>().sharedMesh = mesh2;
    }
}
```





Which is called on first query of `mesh` property.

**Note:**

If [MeshFilter](MeshFilter.html) is a part of an asset object, quering `mesh` property is not allowed and only asset mesh can be assigned.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    // Distorts the mesh vertically.
    void Update()
    {
        // Get instantiated mesh
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        // Randomly change vertices
        Vector3[] vertices = mesh.vertices;
        int p = 0;
        while (p < vertices.Length)
        {
            vertices[p] += new Vector3(0, Random.Range(-0.3F, 0.3F), 0);
            p++;
        }
        mesh.vertices = vertices;
        mesh.RecalculateNormals();
    }
}
```





Additional resources: [Mesh](Mesh.html) class.


            

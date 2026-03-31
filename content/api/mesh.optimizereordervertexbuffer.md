This version of Unity is unsupported.



# [Mesh](Mesh.html).OptimizeReorderVertexBuffer




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

public void OptimizeReorderVertexBuffer();






### Description



Optimizes the vertices of the Mesh to improve rendering performance.





This function causes the vertices of the mesh to be reordered internally in an attempt to improve vertex cache utilisation on the graphics hardware and thus rendering performance.  This operation can take a few seconds or more for complex meshes and should only be used where the ordering of the vertices is not significant as it will change - the order of the geometry itself is unaffected.

You should only use this function on meshes you generate procedurally in code, for regular mesh assets it is called automatically by the import pipeline when 'Optimize Mesh' is enabled in the mesh importer settings.

Additional resources: [Optimize](Mesh.Optimize.html), [OptimizeIndexBuffers](Mesh.OptimizeIndexBuffers.html)


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = gameObject.GetComponent<MeshFilter>().mesh;
        mesh.OptimizeReorderVertexBuffer();
    }
}
```


            

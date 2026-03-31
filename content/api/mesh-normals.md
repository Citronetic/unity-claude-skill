This version of Unity is unsupported.



# [Mesh](Mesh.html).normals




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







                    public Vector3[] normals;






### Description



The normals of the Mesh.





If the Mesh contains no normals, an empty array is returned.


              


```
// Rotate the normals by speed every frameusing UnityEngine;public class ExampleClass : MonoBehaviour
{
    float speed = 100.0f;    // Update is called once per frame
    void Update()
    {
        // obtain the normals from the Mesh
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        Vector3[] normals = mesh.normals;        // edit the normals in an external array
        Quaternion rotation = Quaternion.AngleAxis(Time.deltaTime * speed, Vector3.up);
        for (int i = 0; i < normals.Length; i++)
            normals[i] = rotation * normals[i];        // assign the array of normals to the mesh
        mesh.normals = normals;
    }
}
```





**Note:** To make changes to the [normals](Mesh-normals.html) it is important to
          copy the normals from the [Mesh](Mesh.html). Once the [normals](Mesh-normals.html) have been copied and
          changed the [normals](Mesh-normals.html) can be reassigned back to the [Mesh](Mesh.html).





**Note:** [normals](Mesh-normals.html) are assigned to vertices, not triangles.


            

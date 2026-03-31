This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).TRS




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















## Declaration

public static [Matrix4x4](Matrix4x4.html) TRS([Vector3](Vector3.html) pos,
[Quaternion](Quaternion.html) q,
[Vector3](Vector3.html) s);






### Description



Creates a translation, rotation and scaling matrix.





The returned matrix is such that it places objects at position `pos`,
oriented in rotation `q` and scaled by `s`.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Translate, rotate and scale a mesh. Try altering
    // the parameters in the inspector while running
    // to see the effect they have.    public Vector3 translation;
    public Vector3 eulerAngles;
    public Vector3 scale = new Vector3(1, 1, 1);
    MeshFilter mf;
    Vector3[] origVerts;
    Vector3[] newVerts;
    void Start()
    {
        // Get the Mesh Filter component, save its original vertices
        // and make a new vertex array for processing.
        mf = GetComponent<MeshFilter> ();
        origVerts = mf.mesh.vertices;
        newVerts = new Vector3[origVerts.Length];
    }
    void Update()
    {
        // Set a Quaternion from the specified Euler angles.
        Quaternion rotation = Quaternion.Euler(eulerAngles.x, eulerAngles.y, eulerAngles.z);        // Set the translation, rotation and scale parameters.
        Matrix4x4 m = Matrix4x4.TRS(translation, rotation, scale);        // For each vertex...
        for (int i = 0; i < origVerts.Length; i++)
        {
            // Apply the matrix to the vertex.
            newVerts[i] = m.MultiplyPoint3x4(origVerts[i]);
        }        // Copy the transformed vertices back to the mesh.
        mf.mesh.vertices = newVerts;
    }
}
```





Additional resources: [TRS](Matrix4x4.TRS.html), [Rotate](Matrix4x4.Rotate.html), [Scale](Matrix4x4.Scale.html), [Translate](Matrix4x4.Translate.html), [SetTRS](Matrix4x4.SetTRS.html) functions.


            

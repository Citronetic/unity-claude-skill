This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).MultiplyPoint3x4




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

public [Vector3](Vector3.html) MultiplyPoint3x4([Vector3](Vector3.html) point);






### Description



Transforms a position by this matrix (fast).





Returns a position `v` transformed by the current transformation matrix.
This function is a faster version of [MultiplyPoint](Matrix4x4.MultiplyPoint.html); but it can only
handle regular 3D transformations. `MultiplyPoint` is slower, but can handle
projective transformations as well.

Additional resources: [MultiplyPoint](Matrix4x4.MultiplyPoint.html), [MultiplyVector](Matrix4x4.MultiplyVector.html).


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Stretch a mesh at an arbitrary angle around the X axis.    // Angle and amount of stretching.
    float rotAngle;
    float stretch;
    MeshFilter mf;
    Vector3[] origVerts;
    Vector3[] newVerts;
    void Start()
    {
        // Get the Mesh Filter component, save its original vertices
        // and make a new vertex array for processing.
        mf = GetComponent< MeshFilter > ();
        origVerts = mf.mesh.vertices;
        newVerts = new Vector3[origVerts.Length];
    }
    void Update()
    {
        // Create a rotation matrix from a Quaternion.
        Quaternion rot = Quaternion.Euler(rotAngle, 0, 0);
        Matrix4x4 m = Matrix4x4.TRS(Vector3.zero, rot, Vector3.one);        // Get the inverse of the matrix (ie, to undo the rotation).
        Matrix4x4 inv = m.inverse;        // For each vertex...
        for (var i = 0; i < origVerts.Length; i++)
        {
            // Rotate the vertex and scale it along its new Y axis.
            var pt = m.MultiplyPoint3x4(origVerts[i]);
            pt.y *= stretch;            // Return the vertex to its original rotation (but with the
            // scaling still applied).
            newVerts[i] = inv.MultiplyPoint3x4(pt);
        }        // Copy the transformed vertices back to the mesh.
        mf.mesh.vertices = newVerts;
    }
}
```


            

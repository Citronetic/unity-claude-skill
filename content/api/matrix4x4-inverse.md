This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).inverse




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












                    public [Matrix4x4](Matrix4x4.html) inverse;






### Description



The inverse of this matrix. (Read Only)





Inverted matrix is such that if multiplied by the original would result
in [identity](Matrix4x4-identity.html) matrix.

If as matrix transforms vectors in a particular way,
then the inverse matrix can transform them back. For example,
Transform's [Transform.worldToLocalMatrix](Transform-worldToLocalMatrix.html) and [Transform.localToWorldMatrix](Transform-localToWorldMatrix.html)
are inverses of each other.

For regular 3D transformation matrices, it can be faster to use [Inverse3DAffine](Matrix4x4.Inverse3DAffine.html) method.

You can not invert a matrix with a [determinant](Matrix4x4-determinant.html) of zero.
If you attempt this, `inverse` returns [Matrix4x4.zero](Matrix4x4-zero.html) instead.


              


```
using UnityEngine;// Stretch a mesh at an arbitrary angle around the X axis
[RequireComponent(typeof(MeshFilter))]
public class ExampleScript : MonoBehaviour
{
    // Angle and amount of stretching
    public float rotAngle = 30;
    public float stretch = 3;
    MeshFilter mf;
    Vector3[] origVerts;
    Vector3[] newVerts;    void Start()
    {
        // Get the Mesh Filter component, save its original vertices
        // and make a new vertex array for processing.
        mf = GetComponent<MeshFilter>();
        origVerts = mf.mesh.vertices;
        newVerts = new Vector3[origVerts.Length];
    }    void Update()
    {
        // Create a rotation matrix from a Quaternion
        Quaternion rot = Quaternion.Euler(rotAngle, 0, 0);
        Matrix4x4 m = Matrix4x4.TRS(Vector3.zero, rot, Vector3.one);        // Get the inverse of the matrix: undo the rotation
        Matrix4x4 inv = m.inverse;        // For each vertex:
        for (var i = 0; i < origVerts.Length; i++)
        {
            // Rotate the vertex and scale it along its new Y axis
            Vector3 pt = m.MultiplyPoint3x4(origVerts[i]);
            pt.y *= stretch;            // Return the vertex to its original rotation (but with the
            // scaling still applied).
            newVerts[i] = inv.MultiplyPoint3x4(pt);
        }        // Assign the transformed vertices to the mesh
        mf.mesh.vertices = newVerts;
    }
}
```





Additional resources: [Inverse3DAffine](Matrix4x4.Inverse3DAffine.html), [determinant](Matrix4x4-determinant.html).


            

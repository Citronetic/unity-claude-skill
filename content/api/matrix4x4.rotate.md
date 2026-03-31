This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).Rotate




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

public static [Matrix4x4](Matrix4x4.html) Rotate([Quaternion](Quaternion.html) q);






### Description



Creates a rotation matrix.


              


```
// Translate, rotate and scale a mesh. Try varying
    // the parameters in the inspector while running
    // to see the effect they have.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour {
    public Vector3 eulerAngles;
    private MeshFilter mf;
    private Vector3[] origVerts;
    private Vector3[] newVerts;    void Start() {
        mf = GetComponent<MeshFilter>();
        origVerts = mf.mesh.vertices;
        newVerts = new Vector3[origVerts.Length];
    }    void Update() {
        Quaternion rotation = Quaternion.Euler(eulerAngles.x, eulerAngles.y, eulerAngles.z);
        Matrix4x4 m = Matrix4x4.Rotate(rotation);
        int i = 0;
        while (i < origVerts.Length) {
            newVerts[i] = m.MultiplyPoint3x4(origVerts[i]);
            i++;
        }
        mf.mesh.vertices = newVerts;
    }
}
```





Additional resources: [TRS](Matrix4x4.TRS.html), [Scale](Matrix4x4.Scale.html), [Translate](Matrix4x4.Translate.html), [SetTRS](Matrix4x4.SetTRS.html) functions.


            

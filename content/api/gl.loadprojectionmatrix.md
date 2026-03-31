This version of Unity is unsupported.



# [GL](GL.html).LoadProjectionMatrix




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

public static void LoadProjectionMatrix([Matrix4x4](Matrix4x4.html) mat);






### Description



Load an arbitrary matrix to the current projection matrix.





This function overrides current camera's projection parameters, so most often you want
to save and restore projection matrix using [GL.PushMatrix](GL.PushMatrix.html) and [GL.PopMatrix](GL.PopMatrix.html). The model and view matrix remain
unchanged. Beware that the view matrix of the camera typically performs a scaling of -1 along the z axis, which might
have to be taken into account depending on your use case.

The loaded projection matrix is expected to project into the API-agnostic clip volume defined by the following
boundaries:

**1.** x = -1..1 (left..right)

**2.** y = -1..1 (bottom..top)

**3.** z = -1..1 (near..far)

Unity might combine the matrix with an additional transformation to map to the convention of the actual graphics
API. The resulting matrix can be obtained through [GL.GetGPUProjectionMatrix](GL.GetGPUProjectionMatrix.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Matrix4x4 projMtrx = Matrix4x4.identity;    void OnPostRender()
    {
        GL.PushMatrix();
        GL.LoadProjectionMatrix(projMtrx);
        // Do your drawing here...
        GL.PopMatrix();
    }
}
```





Additional resources: [GL.LoadOrtho](GL.LoadOrtho.html).


            

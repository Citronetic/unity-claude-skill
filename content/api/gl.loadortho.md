This version of Unity is unsupported.



# [GL](GL.html).LoadOrtho




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

public static void LoadOrtho();






### Description



Helper function to set up an orthograhic projection.





Loads an orthographic projection into the projection matrix and loads an identity into the
model and view matrices.

The resulting projection performs the following mappings:

**1.** x = 0..1 to x = -1..1 (left..right)

**2.** y = 0..1 to y = -1..1 (bottom..top)

**3.** z = 1..-100 to z = -1..1 (near..far)

This is equivalent to the following operations:


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnPostRender()
    {
        // ...        GL.LoadOrtho();        // is equivalent to:        GL.LoadIdentity();
        var proj = Matrix4x4.Ortho(0, 1, 0, 1, -1, 100);
        GL.LoadProjectionMatrix(proj);        // ...
    }
}
```





Changing the model, view or projection matrices overrides the current rendering matrices.
It is good practice to save and restore these matrices using [GL.PushMatrix](GL.PushMatrix.html) and [GL.PopMatrix](GL.PopMatrix.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a triangle under an already drawn triangle
    Material mat;    void OnPostRender()
    {
        if (!mat)
        {
            Debug.LogError("Please Assign a material on the inspector");
            return;
        }
        GL.PushMatrix();
        mat.SetPass(0);
        GL.LoadOrtho();
        GL.Color(Color.red);
        GL.Begin(GL.TRIANGLES);
        GL.Vertex3(0.25f, 0.1351f, 0);
        GL.Vertex3(0.25f, 0.3f, 0);
        GL.Vertex3(0.5f, 0.3f, 0);
        GL.End();        GL.Color(Color.yellow);
        GL.Begin(GL.TRIANGLES);
        GL.Vertex3(0.5f, 0.25f, -1);
        GL.Vertex3(0.5f, 0.1351f, -1);
        GL.Vertex3(0.1f, 0.25f, -1);
        GL.End();        GL.PopMatrix();
    }
}
```





Additional resources: [GL.LoadProjectionMatrix](GL.LoadProjectionMatrix.html), [Matrix4x4.Ortho](Matrix4x4.Ortho.html).


            

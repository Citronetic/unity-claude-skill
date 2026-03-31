This version of Unity is unsupported.



# [GL](GL.html).LoadPixelMatrix




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

public static void LoadPixelMatrix();






### Description



Setup a matrix for pixel-correct rendering.





Loads an orthographic projection into the projection matrix and loads an identity into the
model and view matrices. The projection matrix is such that the X and Y coordinates map directly to pixels. The
coordinate (0,0) is at the bottom left corner of current camera's viewport. The Z coordinates go from 1 at the near
plane to -100 at the far plane.

Changing the model, view or projection matrices overrides the current rendering matrices.
It is good practice to save and restore these matrices using [GL.PushMatrix](GL.PushMatrix.html) and [GL.PopMatrix](GL.PopMatrix.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a red triangle using pixels as coordinates to paint on.
    Material mat;    void OnPostRender()
    {
        if (!mat)
        {
            Debug.LogError("Please Assign a material on the inspector");
            return;
        }
        GL.PushMatrix();
        mat.SetPass(0);
        GL.LoadPixelMatrix();        GL.Begin(GL.TRIANGLES);
        GL.Color(Color.red);
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(0, Screen.height / 2, 0);
        GL.Vertex3(Screen.width / 2, Screen.height / 2, 0);
        GL.End();        GL.PopMatrix();
    }
}
```




---








## Declaration

public static void LoadPixelMatrix(float left,
float right,
float bottom,
float top);






### Description



Setup a matrix for pixel-correct rendering.





Loads an orthographic projection into the projection matrix and loads an identity into the
model and view matrices. The projection matrix is such that the X and Y coordinates map directly to pixels. The
(left,bottom) is at the bottom left corner of current camera's viewport; and (top,right) is at the top right corner of
current camera's viewport. The Z coordinates go from 1 at the near plane to -1 at the far plane.

Changing the model, view or projection matrices overrides the current rendering matrices.
It is good practice to save and restore these matrices using [GL.PushMatrix](GL.PushMatrix.html) and [GL.PopMatrix](GL.PopMatrix.html).


            

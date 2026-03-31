This version of Unity is unsupported.



# [GL](GL.html).TRIANGLES




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












                    public static int TRIANGLES;






### Description



Mode for [Begin](GL.Begin.html): draw triangles.





Draws triangles using each set of 3 vertices passed. If you pass 3 vertices, one triangle is drawn, where each vertex becomes one corner of the triangle. If you pass 6 vertices, 2 triangles will be drawn.

To set up the screen for drawing in 2D, use [GL.LoadOrtho](GL.LoadOrtho.html) or [GL.LoadPixelMatrix](GL.LoadPixelMatrix.html).
To set up the screen for drawing in 3D, use [GL.LoadIdentity](GL.LoadIdentity.html) followed by [GL.MultMatrix](GL.MultMatrix.html) with the desired transformation matrix.

Additional resources: [GL.Begin](GL.Begin.html), [GL.End](GL.End.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a triangle that covers the middle of the screen
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
        GL.Begin(GL.TRIANGLES);
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(1, 1, 0);
        GL.Vertex3(0, 1, 0);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

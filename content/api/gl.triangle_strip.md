This version of Unity is unsupported.



# [GL](GL.html).TRIANGLE_STRIP




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












                    public static int TRIANGLE_STRIP;






### Description



Mode for [Begin](GL.Begin.html): draw triangle strip.





Draws triangles between each vertex passed, from the beginning to the end. If you pass five vertices, A, B, C, D and E, three triangles are drawn. The first triangle is drawn between the first 3 vertices. All subsequent triangles use the previous 2 vertices, plus the next additional vertex. In this example, the three drawn triangles will be A, B, C, followed by B, C, D, and finally C, D, E.

To set up the screen for drawing in 2D, use [GL.LoadOrtho](GL.LoadOrtho.html) or [GL.LoadPixelMatrix](GL.LoadPixelMatrix.html).
To set up the screen for drawing in 3D, use [GL.LoadIdentity](GL.LoadIdentity.html) followed by [GL.MultMatrix](GL.MultMatrix.html) with the desired transformation matrix.

Additional resources: [GL.Begin](GL.Begin.html), [GL.End](GL.End.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws 2 triangles in the left side of the screen
    // that look like a square    Material mat;    void OnPostRender()
    {
        if (!mat)
        {
            Debug.LogError("Please Assign a material on the inspector");
            return;
        }
        GL.PushMatrix();
        mat.SetPass(0);
        GL.LoadOrtho();
        GL.Begin(GL.TRIANGLE_STRIP);
        GL.Color(new Color(0, 0, 0, 1));
        GL.Vertex3(0.25f, 0.5f, 0);
        GL.Vertex3(0, 0.5f, 0);
        GL.Vertex3(0.25f, 0.25f, 0);
        GL.Vertex3(0, 0.25f, 0);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

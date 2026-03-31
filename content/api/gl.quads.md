This version of Unity is unsupported.



# [GL](GL.html).QUADS




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












                    public static int QUADS;






### Description



Mode for [Begin](GL.Begin.html): draw quads.





Draws quads using each set of 4 vertices passed. If you pass 4 vertices, one quad is drawn, where each vertex becomes one corner of the quad. If you pass 8 vertices, 2 quads will be drawn.

To set up the screen for drawing in 2D, use [GL.LoadOrtho](GL.LoadOrtho.html) or [GL.LoadPixelMatrix](GL.LoadPixelMatrix.html).
To set up the screen for drawing in 3D, use [GL.LoadIdentity](GL.LoadIdentity.html) followed by [GL.MultMatrix](GL.MultMatrix.html) with the desired transformation matrix.

Additional resources: [GL.Begin](GL.Begin.html), [GL.End](GL.End.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draw red a rombus on the screen
    // and also draw a small cyan Quad in the left corner
    Material mat;
    void OnPostRender()
    {
        if (!mat)
        {
            Debug.LogError("Please Assign a material on the inspector");
            return;
        }
        GL.PushMatrix();
        mat.SetPass(0);
        GL.LoadOrtho();
        GL.Begin(GL.QUADS);
        GL.Color(Color.red);
        GL.Vertex3(0, 0.5f, 0);
        GL.Vertex3(0.5f, 1, 0);
        GL.Vertex3(1, 0.5f, 0);
        GL.Vertex3(0.5f, 0, 0);        GL.Color(Color.cyan);
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(0, 0.25f, 0);
        GL.Vertex3(0.25f, 0.25f, 0);
        GL.Vertex3(0.25f, 0, 0);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

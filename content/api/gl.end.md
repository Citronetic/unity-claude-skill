This version of Unity is unsupported.



# [GL](GL.html).End




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

public static void End();






### Description



End drawing 3D primitives.





In OpenGL this matches `glEnd`; on other graphics APIs the same
functionality is emulated.

Additional resources: [GL.Begin](GL.Begin.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a Triangle, a Quad and a line
    // with different colors    Material mat;
    void  OnPostRender()
    {
        if (!mat)
        {
            Debug.LogError("Please Assign a material on the inspector");
            return;
        }
        GL.PushMatrix();
        mat.SetPass(0);
        GL.LoadOrtho();        GL.Begin(GL.TRIANGLES); // Triangle
        GL.Color(new Color(1, 1, 1, 1));
        GL.Vertex3(0.50f, 0.25f, 0);
        GL.Vertex3(0.25f, 0.25f, 0);
        GL.Vertex3(0.375f, 0.5f, 0);
        GL.End(); // End drawing Triangle        GL.Begin(GL.QUADS); // Quad
        GL.Color(new Color(0.5f, 0.5f, 0.5f, 1));
        GL.Vertex3(0.5f, 0.5f, 0);
        GL.Vertex3(0.5f, 0.75f, 0);
        GL.Vertex3(0.75f, 0.75f, 0);
        GL.Vertex3(0.75f, 0.5f, 0);
        GL.End(); // End drawing quad        GL.Begin(GL.LINES); // Line
        GL.Color(new Color(0, 0, 0, 1));
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(0.75f, 0.75f, 0);
        GL.End(); // End drawing Line        GL.PopMatrix();
    }
}
```


            

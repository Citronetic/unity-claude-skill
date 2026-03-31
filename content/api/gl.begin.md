This version of Unity is unsupported.



# [GL](GL.html).Begin




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

public static void Begin(int mode);






### Parameters



| Parameter | Description |
| --- | --- |
| mode | Primitives to draw: can be TRIANGLES, TRIANGLE_STRIP, QUADS or LINES. |





### Description



Begin drawing 3D primitives.





In OpenGL this matches `glBegin`; on other graphics APIs the same
functionality is emulated. Between GL.Begin and [GL.End](GL.End.html) it is valid to
call [GL.Vertex](GL.Vertex.html), [GL.Color](GL.Color.html), [GL.TexCoord](GL.TexCoord.html) and other immediate mode drawing
functions.

You should be careful about culling when drawing primitives yourself. The culling rules
may be different depending on which graphics API the game is running. In most cases the
safest way is to use `Cull Off` command in the shader.

Additional resources: [GL.End](GL.End.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a Triangle, a Quad and a line
    // with different colors    Material mat;    void OnPostRender()
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
        GL.End();        GL.Begin(GL.QUADS); // Quad
        GL.Color(new Color(0.5f, 0.5f, 0.5f, 1));
        GL.Vertex3(0.5f, 0.5f, 0);
        GL.Vertex3(0.5f, 0.75f, 0);
        GL.Vertex3(0.75f, 0.75f, 0);
        GL.Vertex3(0.75f, 0.5f, 0);
        GL.End();        GL.Begin(GL.LINES); // Line
        GL.Color(new Color(0, 0, 0, 1));
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(0.75f, 0.75f, 0);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

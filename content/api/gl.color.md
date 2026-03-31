This version of Unity is unsupported.



# [GL](GL.html).Color




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

public static void Color([Color](Color.html) c);






### Description



Sets current vertex color.





In OpenGL this matches `glColor4f(c.r,c.g,c.b,c.a)`; on other graphics APIs the same
functionality is emulated.

In order for per-vertex colors to work reliably across different hardware, you have to use
a shader that binds in the color channel. See [BindChannels](../Manual/SL-BindChannels.html) documentation.

This function can only be called between [GL.Begin](GL.Begin.html) and [GL.End](GL.End.html) functions.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a red line from the bottom right
    // to the top left of the Screen
    // And a yellow line from the bottom left
    // to the top right of the Screen
    Material mat;    void OnPostRender()
    {
        if (!mat)
        {
            Debug.LogError("Please Assign a material on the inspector");
            return;
        }
        GL.PushMatrix();
        mat.SetPass(0);
        GL.LoadOrtho();        GL.Begin(GL.LINES);
        GL.Color(Color.red);
        GL.Vertex3(1, 0, 0);
        GL.Vertex3(0, 1, 0);
        GL.Color(Color.yellow);
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(1, 1, 0);
        GL.End();        GL.PopMatrix();
    }
}
```


            

This version of Unity is unsupported.



# [GL](GL.html).Vertex3




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

public static void Vertex3(float x,
float y,
float z);






### Description



Submit a vertex.





In OpenGL this matches `glVertex3f(x,y,z)`; on other graphics APIs the same
functionality is emulated.

This function can only be called between [GL.Begin](GL.Begin.html) and [GL.End](GL.End.html) functions.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a line from the bottom right
    // to the top left of the Screen
    // Using GL.Vertex
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
        GL.Begin(GL.LINES);
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(1, 1, 0);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

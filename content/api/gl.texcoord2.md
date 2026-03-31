This version of Unity is unsupported.



# [GL](GL.html).TexCoord2




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

public static void TexCoord2(float x,
float y);






### Description



Sets current texture coordinate (x,y) for all texture units.





In OpenGL this matches `glMultiTexCoord` for all texture units or `glTexCoord`
when no multi-texturing is available. On other graphics APIs the same
functionality is emulated.

This function can only be called between [GL.Begin](GL.Begin.html) and [GL.End](GL.End.html) functions.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a Quad in the middle of the screen and
    // Adds the material's Texture to it.    Material mat;
    void OnPostRender()
    {
        if (!mat)
        {
            Debug.LogError("Please Assign a material on the inspector");
            return;
        }
        GL.PushMatrix();
        mat.SetPass(1);
        GL.LoadOrtho();
        GL.Begin(GL.QUADS);
        GL.TexCoord2(0, 0);
        GL.Vertex3(0.25f, 0.25f, 0);
        GL.TexCoord2(0, 1);
        GL.Vertex3(0.25f, 0.75f, 0);
        GL.TexCoord2(1, 1);
        GL.Vertex3(0.75f, 0.75f, 0);
        GL.TexCoord2(1, 0);
        GL.Vertex3(0.75f, 0.25f, 0);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

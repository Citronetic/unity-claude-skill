This version of Unity is unsupported.



# [GL](GL.html).TexCoord3




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

public static void TexCoord3(float x,
float y,
float z);






### Description



Sets current texture coordinate (x,y,z) for all texture units.





In OpenGL this matches `glMultiTexCoord` for all texture units or `glTexCoord`
when no multi-texturing is available. On other graphics APIs the same
functionality is emulated.

The Z component is used only when:

**1.** You access a cubemap (which you access with a vector coordinate, hence x,y & z).

**2.** You do "projective texturing", where the X & Y coordinates are divided by Z to get the final coordinate. This would be mostly useful for water reflections and similar things.

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
        GL.TexCoord3(0, 0, 0);
        GL.Vertex3(0.25f, 0.25f, 0);
        GL.TexCoord3(0, 1, 0);
        GL.Vertex3(0.25f, 0.75f, 0);
        GL.TexCoord3(1, 1, 0);
        GL.Vertex3(0.75f, 0.75f, 0);
        GL.TexCoord3(1, 0, 0);
        GL.Vertex3(0.75f, 0.25f, 0);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

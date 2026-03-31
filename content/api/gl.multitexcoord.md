This version of Unity is unsupported.



# [GL](GL.html).MultiTexCoord




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

public static void MultiTexCoord(int unit,
[Vector3](Vector3.html) v);






### Description



Sets current texture coordinate (v.x,v.y,v.z) to the actual texture `unit`.





In OpenGL this matches `glMultiTexCoord` for the given texture unit
if multi-texturing is available. On other graphics APIs the same
functionality is emulated.

The Z component is used only when:

**1.** You access a cubemap (which you access with a vector coordinate, hence x,y & z).

**2.** You do "projective texturing", where the X & Y coordinates are divided by Z to get the final coordinate. This would be mostly useful for water reflections and similar things.

This function can only be called between [GL.Begin](GL.Begin.html) and [GL.End](GL.End.html) functions.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Changes between two textures assigned to a material
    // When pressed space
    Material mat;
    bool flagTex = true;    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (flagTex)
            {
                flagTex = false;
            }
            else
            {
                flagTex = true;
            }
        }
    }    void OnPostRender()
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
        if (flagTex)
        {
            GL.MultiTexCoord(0, new Vector3(0, 0, 0)); // main texture
        }
        else
        {
            GL.MultiTexCoord(1, new Vector3(0, 0, 0)); // second texture
        }
        GL.Vertex3(0.25f, 0.25f, 0);
        if (flagTex)
        {
            GL.MultiTexCoord(0, new Vector3(0, 1, 0));
        }
        else
        {
            GL.MultiTexCoord(1, new Vector3(0, 1, 0));
        }
        GL.Vertex3(0.25f, 0.75f, 0);
        if (flagTex)
        {
            GL.MultiTexCoord(0, new Vector3(1, 1, 0));
        }
        else
        {
            GL.MultiTexCoord(1, new Vector3(1, 1, 0));
        }
        GL.Vertex3(0.75f, 0.75f, 0);
        if (flagTex)
        {
            GL.MultiTexCoord(0, new Vector3(1, 0, 0));
        }
        else
        {
            GL.MultiTexCoord(1, new Vector3(1, 0, 0));
        }
        GL.Vertex3(0.75f, 0.25f, 0);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

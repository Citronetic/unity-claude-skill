This version of Unity is unsupported.



# [GL](GL.html).Viewport




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

public static void Viewport([Rect](Rect.html) pixelRect);






### Description



Set the rendering viewport.





All rendering is constrained to be inside the passed `pixelRect`.
If the Viewport is modified, all the rendered content inside of it gets stretched.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draw a red Quad that covers all the view port, and the when space is pressed
    // the viewport gets expanded to the whole screen and stretch the contents inside
    Material mat;
    bool stretch = false;    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (stretch)
            {
                stretch = false;
            }
            else
            {
                stretch = true;
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
        mat.SetPass(0);
        GL.LoadPixelMatrix();
        if (stretch)
        {
            GL.Viewport(new Rect(0, 0, Screen.width, Screen.height));
        }
        else
        {
            GL.Viewport(new Rect(0, 0, Screen.width / 2, Screen.height));
        }
        GL.Color(Color.red);
        GL.Begin(GL.QUADS);
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(0, Screen.height, 0);
        GL.Vertex3(Screen.width, Screen.height, 0);
        GL.Vertex3(Screen.width, 0, 0);
        GL.Color(Color.yellow);
        GL.End();
        GL.Begin(GL.TRIANGLES);
        GL.Vertex3(Screen.width / 2, Screen.height / 4, 1);
        GL.Vertex3(Screen.width / 4, Screen.height / 2, 1);
        GL.Vertex3(Screen.width - Screen.width / 4, Screen.height / 2, 1);
        GL.End();
        GL.PopMatrix();
    }
}
```


            

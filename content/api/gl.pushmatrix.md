This version of Unity is unsupported.



# [GL](GL.html).PushMatrix




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

public static void PushMatrix();






### Description



Saves the model, view and projection matrices to the top of the matrix stack.





Changing the model, view or projection matrices overrides the current rendering matrices.
It is good practice to save and restore these matrices using [GL.PushMatrix](GL.PushMatrix.html) and [GL.PopMatrix](GL.PopMatrix.html).

Additional resources: [PopMatrix](GL.PopMatrix.html) function.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draw a yellow line from the botton left to the
    // top right of the screen
    Material mat;    void OnPostRender()
    {
        if (!mat)
        {
            Debug.LogError("Please Assign a material on the inspector");
            return;
        }
        GL.PushMatrix(); // Save the current state
        mat.SetPass(0);
        GL.LoadPixelMatrix();
        GL.Color(Color.yellow);
        GL.Begin(GL.LINES);
        GL.Vertex3(0, 0, 0);
        GL.Vertex3(Screen.width, Screen.height, 0);
        GL.End();
        GL.PopMatrix(); // Pop changes.
    }
}
```


            

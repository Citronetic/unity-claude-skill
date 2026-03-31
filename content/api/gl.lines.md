This version of Unity is unsupported.



# [GL](GL.html).LINES




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












                    public static int LINES;






### Description



Mode for [Begin](GL.Begin.html): draw lines.





Draws lines between each pair of vertices passed. If you pass four vertices, A, B, C and D, two lines are drawn: one between A and B, and one between C and D.

To set up the screen for drawing in 2D, use [GL.LoadOrtho](GL.LoadOrtho.html) or [GL.LoadPixelMatrix](GL.LoadPixelMatrix.html).
To set up the screen for drawing in 3D, use [GL.LoadIdentity](GL.LoadIdentity.html) followed by [GL.MultMatrix](GL.MultMatrix.html) with the desired transformation matrix.

Additional resources: [GL.Begin](GL.Begin.html), [GL.End](GL.End.html).


              


```
//Attach this script to a GameObject with a Camera componentusing UnityEngine;public class Example : MonoBehaviour
{
    // Draws a line from "startVertex" var to the curent mouse position.
    public Material mat;
    Vector3 startVertex;
    Vector3 mousePos;    void Start()
    {
        startVertex = Vector3.zero;
    }    void Update()
    {
        mousePos = Input.mousePosition;
        // Press space to update startVertex
        if (Input.GetKeyDown(KeyCode.Space))
        {
            startVertex = new Vector3(mousePos.x / Screen.width, mousePos.y / Screen.height, 0);
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
        GL.LoadOrtho();        GL.Begin(GL.LINES);
        GL.Color(Color.red);
        GL.Vertex(startVertex);
        GL.Vertex(new Vector3(mousePos.x / Screen.width, mousePos.y / Screen.height, 0));
        GL.End();        GL.PopMatrix();
    }
}
```


            

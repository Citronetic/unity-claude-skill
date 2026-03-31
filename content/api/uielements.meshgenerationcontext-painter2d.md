This version of Unity is unsupported.



# [MeshGenerationContext](UIElements.MeshGenerationContext.html).painter2D




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












                    public [UIElements.Painter2D](UIElements.Painter2D.html) painter2D;






### Description



The painter object used to issue 2D drawing commands. Use this object to draw vector shapes such as lines, arcs and Bezier curves.


              


```
// This example draws a Bezier curve using the Painter2D class.using UnityEngine;
using UnityEngine.UIElements;[RequireComponent(typeof(UIDocument))]
public class Painter2DExample : MonoBehaviour
{
    public void OnEnable()
    {
        var doc = GetComponent<UIDocument>();
        doc.rootVisualElement.generateVisualContent += Draw;
    }    void Draw(MeshGenerationContext ctx)
    {
        var painter = ctx.painter2D;
        painter.lineWidth = 10.0f;
        painter.lineCap = LineCap.Round;
        painter.strokeColor = Color.red;        painter.BeginPath();
        painter.MoveTo(new Vector2(10, 10));
        painter.BezierCurveTo(new Vector2(100, 100), new Vector2(200, 0), new Vector2(300, 100));
        painter.Stroke();
    }
}
```


            

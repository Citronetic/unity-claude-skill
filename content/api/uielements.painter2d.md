This version of Unity is unsupported.



# Painter2D





class in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



















### Description



Object to draw 2D vector graphics.





The example below demonstrates how to use the Painter2D class to draw content in a [VisualElement](UIElements.VisualElement.html) with
 the [VisualElement.generateVisualContent](UIElements.VisualElement-generateVisualContent.html) callback.


 You can also create a standalone [Painter2D.Painter2D](UIElements.Painter2D-ctor.html) object to draw content offscreen,
  and use the [Painter2D.SaveToVectorImage](UIElements.Painter2D.SaveToVectorImage.html) method to save the painter content in a [VectorImage](UIElements.VectorImage.html) asset.


              


```
using UnityEngine;
 using UnityEngine.UIElements; [RequireComponent(typeof(UIDocument))]
 public class Painter2DExample : MonoBehaviour
 {
     public void OnEnable()
     {
         var doc = GetComponent<UIDocument>();
         doc.rootVisualElement.generateVisualContent += Draw;
     }     void Draw(MeshGenerationContext ctx)
     {
         var painter = ctx.painter2D;
         painter.lineWidth = 10.0f;
         painter.lineCap = LineCap.Round;
         painter.strokeGradient = new Gradient() {
             colorKeys = new GradientColorKey[] {
                 new GradientColorKey() { color = Color.red, time = 0.0f },
                 new GradientColorKey() { color = Color.blue, time = 1.0f }
             }
         };
         painter.BeginPath();
         painter.MoveTo(new Vector2(10, 10));
         painter.BezierCurveTo(new Vector2(100, 100), new Vector2(200, 0), new Vector2(300, 100));
         painter.Stroke();
     }
 }
```





### Properties



| Property | Description |
| --- | --- |
| fillColor | The color used for fill paths when using Fill. |
| lineCap | The cap to use when drawing paths using Stroke. |
| lineJoin | The join to use when drawing paths using Stroke. |
| lineWidth | The line width of draw paths when using Stroke. |
| miterLimit | When using LineJoin.Miter joins, this defines the limit on the ratio of the miter length to the
 stroke width before converting the miter to a bevel. |
| strokeColor | The color of draw paths when using Stroke. |
| strokeGradient | The stroke gradient to use when using Stroke. |





### Constructors



| Constructor | Description |
| --- | --- |
| Painter2D | Initializes an instance of Painter2D. |





### Public Methods



| Method | Description |
| --- | --- |
| Arc | Adds an arc to the current sub-path to the provided position, radius and angles. |
| ArcTo | Adds an arc to the current sub-path to the provided position using a control point. |
| BeginPath | Begins a new path and empties the list of recorded sub-paths. |
| BezierCurveTo | Adds a cubic bezier curve to the current sub-path to the provided position using two control points. |
| Clear | When created as a detached painter, clears the current content. Does nothing otherwise. |
| ClosePath | Closes the current sub-path with a straight line. If the sub-path is already closed, this does nothing. |
| Dispose | Dispose the Painter2D object and free its internal unmanaged resources. |
| Fill | Fills the currently defined path. |
| LineTo | Adds a straight line to the current sub-path to the provided position. |
| MoveTo | Begins a new sub-path at the provied coordinate. |
| QuadraticCurveTo | Adds a quadratic bezier curve to the current sub-path to the provided position using a control point. |
| SaveToVectorImage | Saves the content of this Painter2D to a VectorImage object. |
| Stroke | Strokes the currently defined path. |


            

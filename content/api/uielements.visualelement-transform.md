This version of Unity is unsupported.


                  **Method group is Obsolete**





# [VisualElement](UIElements.VisualElement.html).transform




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













                        **Obsolete**
                        When writing the value, use VisualElement.style.translate, VisualElement.style.rotate or VisualElement.style.scale instead. When reading the value, use VisualElement.resolvedStyle.translate, scale and rotate.

                    public [UIElements.ITransform](UIElements.ITransform.html) transform;






### Description



Returns a transform styles object for this VisualElement.





The transform styles object contains the position, rotation, scale style properties of this VisualElement.
 **Note**: This transform object is different and separate from the GameObject Transform MonoBehaviour.
 The three interface members write to the visual element's inline style and read from the resolved style.
 However, the [VisualElement.style](UIElements.VisualElement-style.html) API offers more features and is the recommended approach.
 For example, you can set translate and position as percentages through the [VisualElement.style](UIElements.VisualElement-style.html) API.


The following example reads the current position, rotation, and scale from the resolvedStyle of a
 VisualElement, then updates the style properties with these values.


              


```
var visualElement = new VisualElement();
         Vector3 position = visualElement.resolvedStyle.translate;
         visualElement.style.translate = new Translate(position.x, position.y, position.z);
         Quaternion rotation = visualElement.resolvedStyle.rotate.ToQuaternion();
         visualElement.style.rotate = new Rotate(rotation);
         Vector3 scale = visualElement.resolvedStyle.scale.value;
         visualElement.style.scale = new Scale((Vector2) scale);
```


            

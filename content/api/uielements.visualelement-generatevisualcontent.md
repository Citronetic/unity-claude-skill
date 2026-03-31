This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).generateVisualContent




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












                    public Action<MeshGenerationContext> generateVisualContent;






### Description



Delegate function to generate the visual content of a visual element.





Use this delegate to generate custom geometry in the content region of the [VisualElement](UIElements.VisualElement.html).
 You can use the [MeshGenerationContext.painter2D](UIElements.MeshGenerationContext-painter2D.html) object to generate visual content,
 or use the [MeshGenerationContext.Allocate](UIElements.MeshGenerationContext.Allocate.html) method to manually allocate a mesh and then fill in the vertices and indices.

 This delegate is called during the initial creation of the [VisualElement](UIElements.VisualElement.html) and whenever a repaint is needed.
 This delegate isn't called on every frame refresh. To force a repaint, call [VisualElement.MarkDirtyRepaint](UIElements.VisualElement.MarkDirtyRepaint.html).

 **Note**: When you execute code in a handler to this delegate, don't update any property of the [VisualElement](UIElements.VisualElement.html), as this can
 alter the generated content and cause unwanted side effects, such as lagging or missed updates. To avoid this, treat the [VisualElement](UIElements.VisualElement.html)
 as read-only within the delegate.


 Additional resources: [MeshGenerationContext](UIElements.MeshGenerationContext.html)


            

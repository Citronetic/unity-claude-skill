This version of Unity is unsupported.



# MeshWriteData





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



Represents the vertex and index data allocated for drawing the content of a [VisualElement](UIElements.VisualElement.html).





You can use this object to fill the values for the vertices and indices only during a callback to the [VisualElement.generateVisualContent](UIElements.VisualElement-generateVisualContent.html) delegate. Do not store the passed [MeshWriteData](UIElements.MeshWriteData.html) outside the scope of [VisualElement.generateVisualContent](UIElements.VisualElement-generateVisualContent.html) as Unity could recycle it for other callbacks.





### Properties



| Property | Description |
| --- | --- |
| indexCount | The number of indices successfully allocated for VisualElement content drawing. |
| vertexCount | The number of vertices successfully allocated for VisualElement content drawing. |





### Public Methods



| Method | Description |
| --- | --- |
| SetAllIndices | Fills the values of the allocated indices with values copied directly from an array. Each 3 consecutive indices form a single triangle. |
| SetAllVertices | Fills the values of the allocated vertices with values copied directly from an array.
 When this method is called, it is not possible to use SetNextVertex to fill the allocated vertices array. |
| SetNextIndex | Assigns the value of the next index of the allocated indices list. |
| SetNextVertex | Assigns the value of the next vertex of the allocated vertices list. |


            

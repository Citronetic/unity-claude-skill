This version of Unity is unsupported.



# HandleDragAndDropArgs





struct in
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



Information about a drag-and-drop operation in progress.
 See [BaseVerticalCollectionView.dragAndDropUpdate](UIElements.BaseVerticalCollectionView-dragAndDropUpdate.html) and [BaseVerticalCollectionView.handleDrop](UIElements.BaseVerticalCollectionView-handleDrop.html).





### Properties



| Property | Description |
| --- | --- |
| childIndex | The child index under the parentId that the drag-and-drop operation targets. Used only for trees. |
| dragAndDropData | Data stored for the drag-and-drop operation. |
| dropPosition | The type of drop position. |
| insertAtIndex | The index at which the drop operation wants to happen. |
| parentId | The new parent targeted by the drag-and-drop operation. Used only for trees. |
| position | The world position of the pointer. |
| target | The target of the drop. There is only a target when hovering over an item. DropPosition.OverItem |


            

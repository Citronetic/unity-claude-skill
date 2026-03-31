This version of Unity is unsupported.



# [TreeView<T0>](IMGUI.Controls.TreeView_1.html).HandleDragAndDrop




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

protected [DragAndDropVisualMode](DragAndDropVisualMode.html) HandleDragAndDrop(DragAndDropArgs<TIdentifier> args);






### Parameters



| Parameter | Description |
| --- | --- |
| args | Drag and drop arguments. |





### Description



Override this function to control the drag and drop behavior of the TreeView.





This function is called continously when a drag and drop operation is active and the cursor is over the TreeView. Note that the drag and drop operation can have been initiated outside the TreeView.

Use the state in [DragAndDrop](DragAndDrop.html) to determine the objects for the drag and drop. This function returns a [DragAndDropVisualMode](DragAndDropVisualMode.html) value that controls the cursor state.

You control TreeView drag and drop in the following order:

1) override [CanStartDrag](IMGUI.Controls.TreeView_1.CanStartDrag.html) to enable dragging TreeViewItems.

2) override [SetupDragAndDrop](IMGUI.Controls.TreeView_1.SetupDragAndDrop.html) to set which TreeViewItems are dragged.

3) override [HandleDragAndDrop](IMGUI.Controls.TreeView_1.HandleDragAndDrop.html) to control the drag and drop behavior of the TreeView.


            

This version of Unity is unsupported.



# [TreeView](IMGUI.Controls.TreeView.html).SetupDragAndDrop




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

protected void SetupDragAndDrop([IMGUI.Controls.TreeView.SetupDragAndDropArgs](IMGUI.Controls.TreeView.SetupDragAndDropArgs.html) args);






### Description



This function is called when [CanStartDrag](IMGUI.Controls.TreeView.CanStartDrag.html) returns true.





Override this function to set the global [DragAndDrop](DragAndDrop.html) state and set which items can be dragged and dropped. Use [FindRows](IMGUI.Controls.TreeView.FindRows.html) to convert the dragged IDs to TreeViewItems if needed.

You control TreeView drag and drop in the following order:

1) override [CanStartDrag](IMGUI.Controls.TreeView.CanStartDrag.html) to enable dragging TreeViewItems.

2) override [SetupDragAndDrop](IMGUI.Controls.TreeView.SetupDragAndDrop.html) to set which TreeViewItems are dragged.

3) override [HandleDragAndDrop](IMGUI.Controls.TreeView.HandleDragAndDrop.html) to control the drag and drop behavior of the TreeView.

Additional resources: [DragAndDrop](DragAndDrop.html).


            

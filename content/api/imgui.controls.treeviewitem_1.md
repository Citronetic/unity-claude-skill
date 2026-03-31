This version of Unity is unsupported.



# TreeViewItem<T0>





class in
          UnityEditor.IMGUI.Controls


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



The TreeViewItem is used to build the tree representation of a tree data structure.





The TreeViewItem can be derived from to add custom data.

Additional resources: [TreeView<T0>](IMGUI.Controls.TreeView_1.html).





### Properties



| Property | Description |
| --- | --- |
| children | The list of child items of this TreeViewItem. |
| depth | The depth refers to how many ancestors this item has, and corresponds to the number of horizontal ‘indents’ this item has. |
| displayName | Name shown for this item when rendered. |
| hasChildren | Returns true if children has any items. |
| icon | If set, this icon will be rendered to the left of the displayName. The icon is rendered at 16x16 points by default. |
| id | Unique ID for an item. |
| parent | The parent of this TreeViewItem. If it is null then it is considered the root of the TreeViewItem tree. |





### Constructors



| Constructor | Description |
| --- | --- |
| TreeViewItem_1 | TreeViewItem constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| AddChild | Helper method that adds the child TreeViewItem to the children list and sets the parent property on the child. |


            

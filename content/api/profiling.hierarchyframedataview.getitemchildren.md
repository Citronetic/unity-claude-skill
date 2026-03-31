This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemChildren




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

public void GetItemChildren(int id,
List<int> outChildren);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| outChildren | List filled with item child identifiers as a result of a method call. |





### Description



Retrieves a list of hierarchy item children.





The result is written to *outChildren* list which is resized if necessary.
The list contains identifiers of item children in order defined by sorting parameters.
Identifier defines a specific tree view item in the current frame hierarchy. Different frames have different identifiers for the tree items.

*GetItemChildren* call builds next hierarchy level making child data available for retrieval.

Additional resources: TreeViewItem.children.


            

This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemDescendantsThatHaveChildren




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

public void GetItemDescendantsThatHaveChildren(int id,
List<int> outChildren);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| outChildren | List filled with item all child identifiers which have children. |





### Description



Use to retrieve a list of a hierarchy item descendants which have other children.





The result is written to *outChildren* list which is resized if necessary.
The call builds the whole hierarchy view tree and can be expensive.

Additional resources: TreeView.GetDescendantsThatHaveChildren.


            

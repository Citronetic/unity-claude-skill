This version of Unity is unsupported.



# [TreeView<T0>](IMGUI.Controls.TreeView_1.html).GetAncestors




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

protected IList<TIdentifier> GetAncestors(TIdentifier id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | TreeViewItem ID. |





### Returns



**IList<TIdentifier>**
        List of all the ancestors of a given item with ID id.





### Description



This method is e.g. used for revealing items that are currently under a collapsed item.





It is called automatically from TreeView methods such as RevealItem. If the full item tree have not been built in BuildRoot(), you should override this method to use your backend data to find the correct ancestors for the given item otherwise RevealItem will fail.

Default behavior: The item with ID id is found by searching from the rootItem through all its descendants. Once found, its parent and its parent’s parent, etc. are collected as ancestors. This efault behavior assumes the full tree has been built.

Additional resources: [GetDescendantsThatHaveChildren](IMGUI.Controls.TreeView_1.GetDescendantsThatHaveChildren.html).


            

This version of Unity is unsupported.



# [TreeView<T0>](IMGUI.Controls.TreeView_1.html).BuildRoot




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

protected TreeViewItem<TIdentifier> BuildRoot();






### Returns



**TreeViewItem<TIdentifier>**
        The root of the tree. This item can later be accessed by 'rootItem'.





### Description



Abstract method that is required to be implemented. By default this method should create the full tree of TreeViewItems and return the root.





This method together with [BuildRows](IMGUI.Controls.TreeView_1.BuildRows.html) are responsible for initializing the TreeView. A TreeView can be created using two distinct approaches: 1) Create the root and the full tree of items. 2) Create the root and the rows.

Approach 1 is the default since the TreeView then has automatic handling of building the rows, ancestor information etc. Approach 2 is desirable for very large data-sets or for data that change often. See more info in [BuildRows](IMGUI.Controls.TreeView_1.BuildRows.html).

Each TreeViewItem needs to be constructed with a unique integer ID (unique among all the items in the TreeView) and the ID needs to be consistent the same for same data element regardles of expanded state. The ID is used for finding items in the tree, for the selection state, expanded state and navigation.

For a properly initialized TreeView all the TreeViewItems need to have initialized the ‘parent’, ‘children’ and ‘depth’ properties. Depending on the tree data model it can be useful to either set the parent and children properties or the depth property and then use either SetupParentsAndChildrenFromDepths or SetupDepthsFromParentsAndChildren to set the uninitialized properties for all the rows in one call.

Additional resources: [BuildRows](IMGUI.Controls.TreeView_1.BuildRows.html), [SetupParentsAndChildrenFromDepths](IMGUI.Controls.TreeView_1.SetupParentsAndChildrenFromDepths.html), [SetupDepthsFromParentsAndChildren](IMGUI.Controls.TreeView_1.SetupDepthsFromParentsAndChildren.html), [TreeViewItem<T0>](IMGUI.Controls.TreeViewItem_1.html).


            

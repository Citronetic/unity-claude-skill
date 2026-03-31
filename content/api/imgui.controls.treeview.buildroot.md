This version of Unity is unsupported.


                  **Method group is Obsolete**





# [TreeView](IMGUI.Controls.TreeView.html).BuildRoot




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













                        **Obsolete**
                        TreeView is now deprecated. You can likely now use TreeView<int> instead and not think more about it. But if you were using that identifier to store InstanceID data, you should instead opt to upgrade your TreeViews to use TreeView<InstanceID> to get the proper typing.




## Declaration

protected TreeViewItem BuildRoot();






### Returns



**TreeViewItem**
        The root of the tree. This item can later be accessed by 'rootItem'.





### Description



Abstract method that is required to be implemented. By default this method should create the full tree of TreeViewItems and return the root.





This method together with [BuildRows](UIElements.TreeView.BuildRows.html) are responsible for initializing the TreeView. A TreeView can be created using two distinct approaches: 1) Create the root and the full tree of items. 2) Create the root and the rows.

Approach 1 is the default since the TreeView then has automatic handling of building the rows, ancestor information etc. Approach 2 is desirable for very large data-sets or for data that change often. See more info in [BuildRows](UIElements.TreeView.BuildRows.html).

Each TreeViewItem needs to be constructed with a unique integer ID (unique among all the items in the TreeView) and the ID needs to be consistent the same for same data element regardles of expanded state. The ID is used for finding items in the tree, for the selection state, expanded state and navigation.

For a properly initialized TreeView all the TreeViewItems need to have initialized the ‘parent’, ‘children’ and ‘depth’ properties. Depending on the tree data model it can be useful to either set the parent and children properties or the depth property and then use either SetupParentsAndChildrenFromDepths or SetupDepthsFromParentsAndChildren to set the uninitialized properties for all the rows in one call.

Additional resources: [BuildRows](UIElements.TreeView.BuildRows.html), [SetupParentsAndChildrenFromDepths](UIElements.TreeView.SetupParentsAndChildrenFromDepths.html), [SetupDepthsFromParentsAndChildren](UIElements.TreeView.SetupDepthsFromParentsAndChildren.html), TreeViewItem.


            

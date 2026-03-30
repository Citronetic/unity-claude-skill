This version of Unity is unsupported.



# [TreeView](IMGUI.Controls.TreeView.html).RowGUI




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

protected void RowGUI([IMGUI.Controls.TreeView.RowGUIArgs](IMGUI.Controls.TreeView.RowGUIArgs.html) args);






### Parameters



| Parameter | Description |
| --- | --- |
| args | Row data. |





### Description



Override this method to add custom GUI content for the rows in the TreeView.





This method is called once per visible row. The *See Also* section below links to methods and properties that can be used to tweak where the default icon, text and foldout arrow are rendered and other useful information when doing custom row content.

If the TreeView is used in combination with a [MultiColumnHeader](IMGUI.Controls.MultiColumnHeader.html) then use the methods of RowGUIArgs to access information for the columns. See the manual for examples.

Additional resources: [GetContentIndent](IMGUI.Controls.TreeView.GetContentIndent.html), [GetFoldoutIndent](IMGUI.Controls.TreeView.GetFoldoutIndent.html).


            

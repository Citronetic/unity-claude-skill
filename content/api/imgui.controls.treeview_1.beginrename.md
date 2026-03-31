This version of Unity is unsupported.



# [TreeView<T0>](IMGUI.Controls.TreeView_1.html).BeginRename




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

public bool BeginRename(TreeViewItem<TIdentifier> item);






## Declaration

public bool BeginRename(TreeViewItem<TIdentifier> item,
float delay);






### Parameters



| Parameter | Description |
| --- | --- |
| item | Item to rename. |
| delay | Delay in seconds until the rename overlay shows. |





### Returns



**bool**
        Returns true if renaming was started. Returns false if renaming was already active.





### Description



Shows the rename overlay for a TreeViewItem.





This renames the [TreeViewItem<T0>.displayName](IMGUI.Controls.TreeViewItem_1-displayName.html) string.


            

This version of Unity is unsupported.



# [MultiColumnHeader](IMGUI.Controls.MultiColumnHeader.html).ColumnHeaderGUI




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

protected void ColumnHeaderGUI([IMGUI.Controls.MultiColumnHeaderState.Column](IMGUI.Controls.MultiColumnHeaderState.Column.html) column,
[Rect](Rect.html) headerRect,
int columnIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| column | Column header data. |
| headerRect | Rect for column header. |
| columnIndex | Column index. |





### Description



Override to customize the GUI of a single column header.





This method is called for each column in the MultiColumnHeader. Call base.ColumnHeaderGUI to ensure default GUI handling.


            

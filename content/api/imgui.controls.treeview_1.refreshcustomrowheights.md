This version of Unity is unsupported.



# [TreeView<T0>](IMGUI.Controls.TreeView_1.html).RefreshCustomRowHeights




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

protected void RefreshCustomRowHeights();






### Description



Refreshes the cache of custom row rects based on the heights returned by [GetCustomRowHeight](IMGUI.Controls.TreeView_1.GetCustomRowHeight.html).





This method calls [GetCustomRowHeight](IMGUI.Controls.TreeView_1.GetCustomRowHeight.html) for each of the current rows and caches the results. It is called automatically by the TreeView after [BuildRows](IMGUI.Controls.TreeView_1.BuildRows.html) is called to ensure heights are in sync with the rows. Calling this method manually is needed when row heights changes dynamically e.g after a user action changes the content of a row.


            

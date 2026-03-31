This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).ProjectWindowItemInstanceCallback




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

public delegate void ProjectWindowItemInstanceCallback(int instanceID,
[Rect](Rect.html) selectionRect);






### Description



Delegate to be called for every visible list item in the ProjectWindow on every OnGUI event. Use this if you if you want to extend the functionality of the Project window. For example, to display information or tools relating to the assets or sub-assets that are visible.





Additional resources: [ProjectWindowItemCallback](EditorApplication.ProjectWindowItemCallback.html), [EditorApplication.projectWindowItemInstanceOnGUI](EditorApplication-projectWindowItemInstanceOnGUI.html).


            

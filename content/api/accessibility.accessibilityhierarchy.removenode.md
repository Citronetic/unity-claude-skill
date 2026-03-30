This version of Unity is unsupported.



# [AccessibilityHierarchy](Accessibility.AccessibilityHierarchy.html).RemoveNode




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

public void RemoveNode([Accessibility.AccessibilityNode](Accessibility.AccessibilityNode.html) node,
bool removeChildren);






### Parameters



| Parameter | Description |
| --- | --- |
| node | The node to remove. |
| removeChildren | Default value is true. If removeChildren is false, Unity grafts the child nodes to the parent. |





### Description



Removes the node from the hierarchy. Can also optionally remove nodes under the given node depending on the value of
 the removeChildren parameter.


            

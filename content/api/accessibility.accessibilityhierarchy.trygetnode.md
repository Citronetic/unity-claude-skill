This version of Unity is unsupported.



# [AccessibilityHierarchy](Accessibility.AccessibilityHierarchy.html).TryGetNode




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

public bool TryGetNode(int id,
out [Accessibility.AccessibilityNode](Accessibility.AccessibilityNode.html) node);






### Parameters



| Parameter | Description |
| --- | --- |
| id | The ID of the node to retrieve. |
| node | The valid node with the associated ID, or null if no such node exists in this hierarchy. |





### Returns



**bool**
        Returns true if a node is found and false otherwise.





### Description



Tries to get the node in this hierarchy that has the given ID.


            

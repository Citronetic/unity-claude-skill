This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).RemoveAt




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

public void RemoveAt(int index);






### Description



Removes a child, at the provided index, from the list of children of the current element.





Removes the element from both the child list and the layout list. This also removes and invalidates the rendering data of the element at the index
 and its descendants. As a result, this is an O(n) operation where n is the total number of
 descendants.

 If the index is out of range, it throws an exception.

 **Note**: Avoid removing an element during a layout pass to prevent invalid operation exceptions and potential side effects.


            

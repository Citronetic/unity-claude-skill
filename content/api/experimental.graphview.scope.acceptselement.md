This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [Scope](Experimental.GraphView.Scope.html).AcceptsElement




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

public bool AcceptsElement([Experimental.GraphView.GraphElement](Experimental.GraphView.GraphElement.html) element,
ref string reasonWhyNotAccepted);






### Parameters



| Parameter | Description |
| --- | --- |
| element | The element to add. |
| reasonWhyNotAccepted | The reason why the specified element cannot be added to the Scope. |





### Returns



**bool**
        Returns true if the specified element is accepted by the Scope. Returns false otherwise.





### Description



Whether the GraphElement can be added to this scope.


            

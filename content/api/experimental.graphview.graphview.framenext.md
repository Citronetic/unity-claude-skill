This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [GraphView](Experimental.GraphView.GraphView.html).FrameNext




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

public [Experimental.GraphView.EventPropagation](Experimental.GraphView.EventPropagation.html) FrameNext();






## Declaration

public [Experimental.GraphView.EventPropagation](Experimental.GraphView.EventPropagation.html) FrameNext(Func<GraphElement,bool> predicate);






### Parameters



| Parameter | Description |
| --- | --- |
| predicate | The predicate used to sort the list of all existing graph element. |





### Returns



**EventPropagation**
        Continue if no elements in graph, Stop otherwise.





### Description



Focus view on the next element after the one currently selected.


            

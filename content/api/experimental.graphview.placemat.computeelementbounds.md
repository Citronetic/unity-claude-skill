This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [Placemat](Experimental.GraphView.Placemat.html).ComputeElementBounds




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

public static bool ComputeElementBounds(ref [Rect](Rect.html) pos,
List<GraphElement> elements,
[Experimental.GraphView.Placemat.MinSizePolicy](Experimental.GraphView.Placemat.MinSizePolicy.html) ensureMinSize);






### Parameters



| Parameter | Description |
| --- | --- |
| pos | The position, if computed. |
| elements | The list of elements. |
| ensureMinSize | Whether to consider the minimum size of the placemat while computing the bounds. |





### Returns



**bool**
        Returns true if bounds were computed, or false otherwise.





### Description



Calculates the bounds of a list of graph elements.


            

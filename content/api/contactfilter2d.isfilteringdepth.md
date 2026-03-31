This version of Unity is unsupported.



# [ContactFilter2D](ContactFilter2D.html).IsFilteringDepth




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

public bool IsFilteringDepth([GameObject](GameObject.html) obj);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The GameObject used to check the z-position (depth) of Transform.position. |





### Returns



**bool**
        Returns true when `obj` is excluded by the filter and false if otherwise.





### Description



Checks if the [Transform](Transform.html) for `obj` is within the depth range to be filtered.





Filtering is defined as including or excluding objects based upon a specific condition.  Depth filtering checks the z-position of a [GameObject](GameObject.html) [Transform.position](Transform-position.html) and includes it when it is within the depth range and excludes it if otherwise.
IsFilteringDepth returns true when [useDepth](ContactFilter2D-useDepth.html) is set to true and the `obj` transform's z-position is outside the depth defined by [minDepth](ContactFilter2D-minDepth.html) and [maxDepth](ContactFilter2D-maxDepth.html). This indicates the `obj` is filtered which means it should be excluded. IsFilteringDepth returns false if otherwise.
**Note:**: Setting [useOutsideDepth](ContactFilter2D-useOutsideDepth.html) to true inverts the function behavior and it returns opposite results.
Additional resources: [useDepth](ContactFilter2D-useDepth.html), ::ref:minDepth & [maxDepth](ContactFilter2D-maxDepth.html).


            

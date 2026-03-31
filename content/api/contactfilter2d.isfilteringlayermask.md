This version of Unity is unsupported.



# [ContactFilter2D](ContactFilter2D.html).IsFilteringLayerMask




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

public bool IsFilteringLayerMask([GameObject](GameObject.html) obj);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The GameObject used to check the GameObject.layer. |





### Returns



**bool**
        Returns true when `obj` is excluded by the filter and false if otherwise.





### Description



Checks if the [GameObject.layer](GameObject-layer.html) for `obj` is included in the [layerMask](ContactFilter2D-layerMask.html) to be filtered.





Filtering is defined as including or excluding objects based upon a specific condition.  Layer mask filtering checks the [GameObject.layer](GameObject-layer.html) and includes it when it is within the layer mask and excludes it if otherwise.
IsFilteringLayerMask returns true when [useLayerMask](ContactFilter2D-useLayerMask.html) is set to true and the `obj` layer mask is not included by [layerMask](ContactFilter2D-layerMask.html). This indicates the `obj` is filtered which means it should be excluded. IsFilteringLayerMask returns false if otherwise.

Additional resources: [useDepth](ContactFilter2D-useDepth.html), ::ref:minDepth & [maxDepth](ContactFilter2D-maxDepth.html).


            

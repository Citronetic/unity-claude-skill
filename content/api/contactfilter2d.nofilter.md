This version of Unity is unsupported.



# [ContactFilter2D](ContactFilter2D.html).NoFilter




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

public [ContactFilter2D](ContactFilter2D.html) NoFilter();






### Returns



**ContactFilter2D**
        A copy of the contact filter set to not filter any [ContactPoint2D](ContactPoint2D.html).





### Description



Sets the contact filter to not filter any [ContactPoint2D](ContactPoint2D.html).





When you are using a function that requires a [ContactFilter2D](ContactFilter2D.html), but you don't want to perform any filtering, then use this function to return a [ContactFilter2D](ContactFilter2D.html) that turns off any filtering.

Call this function to set the contact filter to [layerMask](ContactFilter2D-layerMask.html) = [Physics2D.AllLayers](Physics2D.AllLayers.html), [minDepth](ContactFilter2D-minDepth.html) = [Mathf.Infinity](Mathf.Infinity.html), [maxDepth](ContactFilter2D-maxDepth.html) = [Mathf.Infinity](Mathf.Infinity.html), [minNormalAngle](ContactFilter2D-minNormalAngle.html) = [Mathf.Infinity](Mathf.Infinity.html) and [maxNormalAngle](ContactFilter2D-maxNormalAngle.html) = [Mathf.Infinity](Mathf.Infinity.html).


            

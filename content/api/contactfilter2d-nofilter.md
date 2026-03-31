This version of Unity is unsupported.



# [ContactFilter2D](ContactFilter2D.html).noFilter




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












                    public static [ContactFilter2D](ContactFilter2D.html) noFilter;






### Description



Returns a new contact filter with a state where it will not filter any contacts.





The returned filter has the following state:



          - [useTriggers](ContactFilter2D-useTriggers.html) = `true`

          - [useLayerMask](ContactFilter2D-useLayerMask.html) = `false`

          - [layerMask](ContactFilter2D-layerMask.html) = [Physics2D.AllLayers](Physics2D.AllLayers.html)





          - [useDepth](ContactFilter2D-useDepth.html) = `false`

          - [useOutsideDepth](ContactFilter2D-useOutsideDepth.html) = `false`

          - [minDepth](ContactFilter2D-minDepth.html) = -[Mathf.Infinity](Mathf.Infinity.html)

          - [maxDepth](ContactFilter2D-maxDepth.html) = [Mathf.Infinity](Mathf.Infinity.html)





          - [useNormalAngle](ContactFilter2D-useNormalAngle.html) = `false`

          - [useOutsideNormalAngle](ContactFilter2D-useOutsideNormalAngle.html) = `false`

          - [minNormalAngle](ContactFilter2D-minNormalAngle.html) = `0.0f`

          - [maxNormalAngle](ContactFilter2D-maxNormalAngle.html) = [ContactFilter2D.NormalAngleUpperLimit](ContactFilter2D.NormalAngleUpperLimit.html).




            

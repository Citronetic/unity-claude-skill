This version of Unity is unsupported.



# [ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html).numIterationsEnclosingSphere




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












                    public int numIterationsEnclosingSphere;






### Description







When [ScriptableCullingParameters.conservativeEnclosingSphere](Rendering.ScriptableCullingParameters-conservativeEnclosingSphere.html) is `true`, the algorithm for calculating the position and size of the culling sphere is a conservative iterative solution. This property controls the number of iterations used in the method.

                    Default value is 64.

                    Increasing the number of iterations will reduce the culling sphere to be closer to the absolute minimun enclosing sphere, but will also require more CPU computation. Reducing the number of iterations will make the culling sphere larger.

                    Additional resources: [ScriptableCullingParameters.conservativeEnclosingSphere](Rendering.ScriptableCullingParameters-conservativeEnclosingSphere.html), [ShadowSplitData.cullingSphere](Rendering.ShadowSplitData-cullingSphere.html).


            

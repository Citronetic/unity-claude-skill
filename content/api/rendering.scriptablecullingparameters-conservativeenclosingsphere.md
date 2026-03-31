This version of Unity is unsupported.



# [ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html).conservativeEnclosingSphere




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












                    public bool conservativeEnclosingSphere;






### Description



This property enables a conservative method for calculating the size and position of the minimal enclosing sphere around the frustum cascade corner points for shadow culling.





The default value is `false` (disabled) to give control over enabling this method to the render pipeline for compatibility.

                    The high level shadow mapping algorithms require a culling sphere for each frustum cascade slice which contains the entire individual cascade volume.

                    When this property is set to `false`, the shadow culling implementation uses spheres that are smaller than the cascade volume and also misaligned, which causes shadow casters to be culled in the corners of the cascades erroneously.

                    When this property is set to `true`, the shadow culling implementation uses spheres which contain the entire cascade within the culling sphere. The methods uses a conservative and iterative solution, and the number of iterations can be set using [ScriptableCullingParameters.numIterationsEnclosingSphere](Rendering.ScriptableCullingParameters-numIterationsEnclosingSphere.html).

                    Setting this property to `true` may slightly increase the culling sphere size, which will cause the shadow map to cover a larger world space and increase perspective aliasing.

                    Additional resources: [ShadowSplitData.cullingSphere](Rendering.ShadowSplitData-cullingSphere.html).


            

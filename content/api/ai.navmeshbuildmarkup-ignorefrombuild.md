This version of Unity is unsupported.



# [NavMeshBuildMarkup](AI.NavMeshBuildMarkup.html).ignoreFromBuild




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












                    public bool ignoreFromBuild;






### Description



Use this to specify whether the GameObject and its children should be ignored.





If you set this to `true`, the GameObject and its children will not be included as part of the NavMesh.

                Set [overrideIgnore](AI.NavMeshBuildMarkup-overrideIgnore.html) to `true` in order for this property to have the intended effect. When `overrideIgnore` is `false` this property inherits the value from the markup of a parent object, if that exists, otherwise it is set to `false`.


            

This version of Unity is unsupported.



# [NavMeshBuildMarkup](AI.NavMeshBuildMarkup.html).overrideIgnore




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












                    public bool overrideIgnore;






### Description



Set this to `true` in order to enable the [ignoreFromBuild](AI.NavMeshBuildMarkup-ignoreFromBuild.html) property.





In the case when a `NavMeshBuildMarkup` is used to change only the area type of an object, `overrideIgnore` should be set to `false` so that the `ignoreFromBuild` property will not have any effect.

                If none of the objects in a hierarchy are marked with `ignoreFromBuild` set to `true` then no objects in that hierarchy will be ignored while building the NavMesh.


            

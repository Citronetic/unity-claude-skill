This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# Lightmapping





class in
          UnityEditor.Experimental


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



















### Description



Experimental lightmapping features.





Additional resources: [Lightmapping](Lightmapping.html).





### Static Properties



| Property | Description |
| --- | --- |
| probesIgnoreDirectEnvironment | If enabled ignores the direct contribution from the environment lighting in baked probes. |
| probesIgnoreIndirectEnvironment | If enabled ignores the indirect contribution from the environment lighting in baked probes. |





### Static Methods



| Method | Description |
| --- | --- |
| Bake | Starts a synchronous lighting bake job for the target Scene. |
| BakeAsync | Starts an asynchronous lighting bake job for the target Scene. |
| GetAdditionalBakedProbes | Retrieve the bake result of additional probes. |
| GetCustomBakeResults | Retrieve the custom bake results. |
| GetCustomBakeResultsNoCopy | Retrieve the custom bake results. |
| SetAdditionalBakedProbes | Submit additional probe positions to be baked using an identifier. |
| SetCustomBakeInputs | Set the custom bake inputs. |
| SetLightDirty | Manually sets a light as dirty. |





### Events



| Event | Description |
| --- | --- |
| additionalBakedProbesCompleted | Event which is called when additional probe bakes have completed and results are ready to be fetched. |


            

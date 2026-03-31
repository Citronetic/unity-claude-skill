This version of Unity is unsupported.



# NavMeshBuildMarkup





struct in
          UnityEngine.AI



/



Implemented in:[UnityEngine.AIModule](UnityEngine.AIModule.html)


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



The NavMesh build markup allows you to control how certain objects are treated during the NavMesh build process, specifically when collecting sources for building.





You can override the area type or specify that certain objects should be excluded from collected sources. The markup can be applied hierarchically or to only the specified object. Additional resources: [NavMeshBuilder.CollectSources](AI.NavMeshBuilder.CollectSources.html).





### Properties



| Property | Description |
| --- | --- |
| applyToChildren | Use this to specify if the GameObject's children also use these markup settings. |
| area | The area type to use when override area is enabled. |
| generateLinks | Use this to specify whether the GameObject and its children should be included in the link generation process. |
| ignoreFromBuild | Use this to specify whether the GameObject and its children should be ignored. |
| overrideArea | Use this to specify whether the area type of the GameObject and its children should be overridden by the area type specified in this struct. |
| overrideGenerateLinks | Use this to specify whether the default links generation condition for the GameObject and its children should be overridden by the generateLinks option specified in this struct. |
| overrideIgnore | Set this to true in order to enable the ignoreFromBuild property. |
| root | Use this to specify which GameObject (including the GameObject’s children) the markup should be applied to. |


            

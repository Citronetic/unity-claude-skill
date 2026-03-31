This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).GetSettingsByID




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

public static [AI.NavMeshBuildSettings](AI.NavMeshBuildSettings.html) GetSettingsByID(int agentTypeID);






### Parameters



| Parameter | Description |
| --- | --- |
| agentTypeID | The ID to look for. |





### Returns



**NavMeshBuildSettings**
        The settings found.





### Description



Returns an existing entry of NavMesh build settings.





If no previously-created settings match the provided agent type ID, the returned [NavMeshBuildSettings](AI.NavMeshBuildSettings.html) struct will have the agentTypeID set to -1. See also: [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).

**Note:** A default entry will always exist for the agentTypeID being 0.


            

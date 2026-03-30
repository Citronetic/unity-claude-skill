This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).GetSettingsByIndex




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

public static [AI.NavMeshBuildSettings](AI.NavMeshBuildSettings.html) GetSettingsByIndex(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index to retrieve from. |





### Returns



**NavMeshBuildSettings**
        The found settings.





### Description



Returns an existing entry of NavMesh build settings by its ordered index.





If the index is outside the valid range (0, GetSettingsCount-1), the returned NavMeshBuildSettings struct will have the agentTypeID set to -1.

Additional resources: [NavMeshBuildSettings](AI.NavMeshBuildSettings.html) and [GetSettingsCount](AI.NavMesh.GetSettingsCount.html).


            

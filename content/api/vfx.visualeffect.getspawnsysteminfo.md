This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).GetSpawnSystemInfo




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

public [VFX.VFXSpawnerState](VFX.VFXSpawnerState.html) GetSpawnSystemInfo(string name);






## Declaration

public void GetSpawnSystemInfo(int nameID,
[VFX.VFXSpawnerState](VFX.VFXSpawnerState.html) spawnState);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The system ID. This is the same ID that Shader.PropertyToID returns. |
| spawnState | A modified  VFXSpawnerState instance. |





### Description



Gets state on a spawn system.





Use [VFXSpawnerState](VFX.VFXSpawnerState.html) as parameter to avoid an allocation.


            

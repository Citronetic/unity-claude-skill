This version of Unity is unsupported.



# [RaycastCommand](RaycastCommand.html).ScheduleBatch




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleBatch(NativeArray<RaycastCommand> commands,
NativeArray<RaycastHit> results,
int minCommandsPerJob,
int maxHits,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| commands | A NativeArray of the RaycastCommands to perform. |
| results | A NativeArray of the RaycastHits where the results of the commands are stored. |
| minCommandsPerJob | The minimum number of commands to perform in a single job. |
| dependsOn | A JobHandle of a job which must be completed before the raycast starts. |
| maxHits | The maximum number of Colliders the ray can hit. |





### Returns



**JobHandle**
        The JobHandle of the job which will perform the raycasts.





### Description



Schedule a batch of raycasts to perform in a job.




---








## Declaration

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleBatch(NativeArray<RaycastCommand> commands,
NativeArray<RaycastHit> results,
int minCommandsPerJob,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| commands | A NativeArray of the RaycastCommands to perform. |
| results | A NativeArray of the RaycastHits where the results of the commands are stored. |
| minCommandsPerJob | The minimum number of commands to perform in a single job. |
| dependsOn | A JobHandle of a job which must be completed before the raycast starts. |





### Returns



**JobHandle**
        The JobHandle of the job which will perform the raycasts.





### Description



Schedule a batch of raycasts to perform in a job.





By default maxHits in this variant is set to 1.


            

This version of Unity is unsupported.



# [SpherecastCommand](SpherecastCommand.html).ScheduleBatch




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleBatch(NativeArray<SpherecastCommand> commands,
NativeArray<RaycastHit> results,
int minCommandsPerJob,
int maxHits,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| commands | A NativeArray of SpherecastCommands to perform. |
| results | A NattiveArray of RaycastHit where the result of commands are stored. |
| minCommandsPerJob | The minimum number of commands to perform in a job. |
| dependsOn | A JobHandle of the job that must be completed before performing the sphere casts. |
| maxHits | The maximum number of Colliders the SphereCast can hit. |





### Returns



**JobHandle**
        Returns a JobHandle of the job that will perform the sphere casts.





### Description



Schedules a batch of sphere casts to perform in a job.




---








## Declaration

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleBatch(NativeArray<SpherecastCommand> commands,
NativeArray<RaycastHit> results,
int minCommandsPerJob,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| commands | A NaviveArray of SpherecastCommands to perform. |
| results | A NavtiveArray of RaycastHit where the result of commands are stored. |
| minCommandsPerJob | The minimum number of commands to perform in a job. |
| dependsOn | A JobHandle of the job that must be completed before performing the sphere casts. |





### Returns



**JobHandle**
        Returns a JobHandle of the job that will perform the sphere casts.





### Description



Schedules a batch of sphere casts to perform in a job.





By default maxHits in this variant is set to 1.


            

This version of Unity is unsupported.



# [OverlapSphereCommand](OverlapSphereCommand.html).ScheduleBatch




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleBatch(NativeArray<OverlapSphereCommand> commands,
NativeArray<ColliderHit> results,
int minCommandsPerJob,
int maxHits,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| commands | A NativeArray of the OverlapSphereCommands to perform. |
| results | A NativeArray of the ColliderHits where the results of the commands are stored. |
| minCommandsPerJob | The minimum number of commands to perform in a single job. |
| maxHits | The maximum number of Colliders the overlap can hit. |
| dependsOn | A JobHandle of a job which must be completed before the overlap sphere starts. |





### Returns



**JobHandle**
        The JobHandle of the job which will perform the overlap sphere.





### Description



Schedule a batch of overlap sphere commands to perform in a job.


            

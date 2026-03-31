This version of Unity is unsupported.



# [BoxcastCommand](BoxcastCommand.html).ScheduleBatch




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleBatch(NativeArray<BoxcastCommand> commands,
NativeArray<RaycastHit> results,
int minCommandsPerJob,
int maxHits,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| commands | A NativeArray of the BoxcastCommand to perform. |
| results | A NativeArray of RaycastHit where the result of commands are stored. |
| minCommandsPerJob | The minimum number of commands to perform in a single job. |
| maxHits | The maximum number of Colliders the BoxCast can hit. |
| dependsOn | A JobHandle of a job that must be completed before performing the box casts. |





### Returns



**JobHandle**
        Returns a JobHandle of the job that will perform the box casts.





### Description



Schedules a batch of boxcasts to be performed in a job.




---








## Declaration

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleBatch(NativeArray<BoxcastCommand> commands,
NativeArray<RaycastHit> results,
int minCommandsPerJob,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| commands | A NativeArray of the BoxcastCommand to perform. |
| results | A NativeArray of RaycastHit where the result of commands are stored. |
| minCommandsPerJob | The minimum number of commands to perform in a single job. |
| dependsOn | A JobHandle of a job that must be completed before performing the box casts. |





### Returns



**JobHandle**
        Returns a JobHandle of the job that will perform the box casts.





### Description



Schedules a batch of boxcasts to be performed in a job.





By default maxHits in this variant is set to 1.


            

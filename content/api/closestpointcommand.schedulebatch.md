This version of Unity is unsupported.



# [ClosestPointCommand](ClosestPointCommand.html).ScheduleBatch




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

public static [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) ScheduleBatch(NativeArray<ClosestPointCommand> commands,
NativeArray<Vector3> results,
int minCommandsPerJob,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependsOn);






### Parameters



| Parameter | Description |
| --- | --- |
| commands | A NativeArray of the ClosestPointCommands to perform. |
| results | A NativeArray of the Vector3 where the results of the commands are stored. |
| minCommandsPerJob | The minimum number of jobs which should be performed in a single job. |
| dependsOn | A JobHandle of a job which must be completed before the closest point starts. |





### Returns



**JobHandle**
        The JobHandle of the job that performs the closest point commands.





### Description



Schedule a batch of closest points which are performed in a job.


            

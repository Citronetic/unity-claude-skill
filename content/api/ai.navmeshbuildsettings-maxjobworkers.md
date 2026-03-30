This version of Unity is unsupported.



# [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).maxJobWorkers




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












                    public uint maxJobWorkers;






### Description



The maximum number of worker threads that the build process can utilize when building a NavMesh with these settings.





A value between 1 and [JobsUtility.JobWorkerCount](Unity.Jobs.LowLevel.Unsafe.JobsUtility.JobWorkerCount.html) (inclusive) causes the build process to schedule all of the work within that number of jobs when building a NavMesh. Each job computes as many NavMesh tiles as it can grab, after it has finished computing the previous tiles.

A value of 0 or higher than `JobsUtility.JobWorkerCount` causes the build process to use all of the available worker threads. In this case, it computes each tile in its own separate job. The build process also computes each tile in a separate job when the number of tiles that need computing is less than the number of worker threads.

The default value is 0.

Additional resources: [tileSize](AI.NavMeshBuildSettings-tileSize.html).


            

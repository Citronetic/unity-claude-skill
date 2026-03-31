This version of Unity is unsupported.



# [ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html).maximumPortalCullingJobs




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












                    public int maximumPortalCullingJobs;






### Description



This parameter controls how many active jobs contribute to occlusion culling.





The value must be in the range of 1 to 16.  The default value is 6. The best amount of jobs depends on your scene.

                    When the culling system performs culling in the scene, it can divide the area on the screen into a grid. Each job handles a cell in the grid.

                    The higher the job count, the more cells are in the grid and the smaller they are. If you have more jobs with smaller workloads, Unity performs better by culling faster.

                    **Note:** Each job has some overhead, so adding more jobs does not always increase performance. It takes a little effort to start a [thread](../Manual/JobSystemOverview#multithreading.html) and join the results. If your performance is low, try adjusting this value to a lower number.

                    Additional resources: [ScriptableCullingParameters.cullingJobsLowerLimit](Rendering.ScriptableCullingParameters-cullingJobsLowerLimit.html), [ScriptableCullingParameters.cullingJobsUpperLimit](Rendering.ScriptableCullingParameters-cullingJobsUpperLimit.html).


            

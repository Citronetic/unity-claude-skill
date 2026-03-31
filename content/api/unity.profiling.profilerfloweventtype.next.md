This version of Unity is unsupported.



# [ProfilerFlowEventType](Unity.Profiling.ProfilerFlowEventType.html).Next




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



















### Description



Use for the flow continuation point.





An example of a flow start point is job scheduling. For instance, [IJobExtensions.Schedule](Unity.Jobs.IJobExtensions.Schedule.html) generates an implicit [Begin](Unity.Profiling.ProfilerFlowEventType.Begin.html) Profiler flow event and [IJob.Execute](Unity.Jobs.IJob.Execute.html) generates an implicit [Next](Unity.Profiling.ProfilerFlowEventType.Next.html) event.


              


```
using System;
using System.Threading;
using Unity.Profiling;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;public class Example
{
    static readonly ProfilerMarker k_ScheduleTasksMarker = new ProfilerMarker("Schedule Task");
    static readonly ProfilerMarker k_TaskMarker = new ProfilerMarker("Task");    static void EmitFlowEventAndChainThread(uint flowId)
    {
        // Mark the next k_TaskMarker as a beginning of the flow
        ProfilerUnsafeUtility.FlowEvent(flowId, ProfilerFlowEventType.Next);
        using (k_TaskMarker.Auto())
        {
            // Do work
        }
    }    static void ScheduleTask()
    {
        using (k_ScheduleTasksMarker.Auto())
        {
            var flowId = ProfilerUnsafeUtility.CreateFlow(ProfilerUnsafeUtility.CategoryScripts);
            // Mark the parent k_ScheduleTasksMarker as a beginning of the flow
            ProfilerUnsafeUtility.FlowEvent(flowId, ProfilerFlowEventType.Begin);
            var thread = new Thread(() => EmitFlowEventAndChainThread(flowId));
            thread.Start();
        }
    }
}
```





Additional resources: [ProfilerUnsafeUtility.FlowEvent](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.FlowEvent.html).


            

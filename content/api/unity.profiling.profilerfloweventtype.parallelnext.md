This version of Unity is unsupported.



# [ProfilerFlowEventType](Unity.Profiling.ProfilerFlowEventType.html).ParallelNext




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



Use for the parallel flow continuation point.





All parallel flow instances are equivalent and connected to the same [Begin](Unity.Profiling.ProfilerFlowEventType.Begin.html) or [Next](Unity.Profiling.ProfilerFlowEventType.Next.html) events that happened previously.
An example of a flow start point is job scheduling. For instance, [IJobParallelForExtensions.Schedule](Unity.Jobs.IJobParallelForExtensions.Schedule.html) generates an implicit [Begin](Unity.Profiling.ProfilerFlowEventType.Begin.html) Profiler flow event and [IJobParallelFor.Execute](Unity.Jobs.IJobParallelFor.Execute.html) generates an implicit [ParallelNext](Unity.Profiling.ProfilerFlowEventType.ParallelNext.html) event.


              


```
using System;
using System.Threading;
using Unity.Profiling;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;public class Example
{
    static readonly ProfilerMarker k_ScheduleParallelTasksMarker = new ProfilerMarker("Schedule Parallel Tasks");
    static readonly ProfilerMarker k_ParallelTaskMarker = new ProfilerMarker("Parallel Task");    static void EmitFlowEventAndChainThread(uint flowId)
    {
        // Mark the next k_ParallelTaskMarker as a beginning of the flow
        ProfilerUnsafeUtility.FlowEvent(flowId, ProfilerFlowEventType.ParallelNext);
        using (k_ParallelTaskMarker.Auto())
        {
            // Do work
        }
    }    static void ScheduleParallelTask()
    {
        using (k_ScheduleParallelTasksMarker.Auto())
        {
            var flowId = ProfilerUnsafeUtility.CreateFlow(ProfilerUnsafeUtility.CategoryScripts);
            // Mark the parent k_ScheduleParallelTasksMarker as a beginning of the flow
            ProfilerUnsafeUtility.FlowEvent(flowId, ProfilerFlowEventType.Begin);
            var thread = new Thread(() => EmitFlowEventAndChainThread(flowId));
            thread.Start();
        }
    }
}
```





Additional resources: [ProfilerUnsafeUtility.FlowEvent](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.FlowEvent.html).


            

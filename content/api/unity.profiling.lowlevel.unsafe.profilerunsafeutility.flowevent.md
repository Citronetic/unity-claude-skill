This version of Unity is unsupported.



# [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).FlowEvent




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

public static void FlowEvent(uint flowId,
[Unity.Profiling.ProfilerFlowEventType](Unity.Profiling.ProfilerFlowEventType.html) flowEventType);






### Parameters



| Parameter | Description |
| --- | --- |
| flowId | Profiler flow identifier. |
| flowEventType | Flow event type. |





### Description



Add flow event to a Profiler sample.





Use Profiler flow events to highlight the dependencies between task execution on different threads.

Flow event works in conjunction with [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).


              


```
using System;
using System.Threading;
using Unity.Profiling;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;public class Example
{
    public const int k_NumberOfTasks = 4;    static readonly ProfilerMarker k_ScheduleParallelTasksMarker = new ProfilerMarker("Schedule Parallel Tasks");
    static readonly ProfilerMarker k_ParallelTaskMarker = new ProfilerMarker("Parallel Task");
    static readonly ProfilerMarker k_TaskSyncMarker = new ProfilerMarker("Sync Task");    static void EmitFlowEventAndChainThread(uint flowId)
    {
        // Mark the next k_ParallelTaskMarker as a beginning of the flow
        ProfilerUnsafeUtility.FlowEvent(flowId, ProfilerFlowEventType.ParallelNext);
        using (k_ParallelTaskMarker.Auto())
        {
            // Do work
        }
    }    static void ScheduleParallelTask()
    {
        uint flowId;
        var threads = new Thread[k_NumberOfTasks];
        using (k_ScheduleParallelTasksMarker.Auto())
        {
            flowId = ProfilerUnsafeUtility.CreateFlow(ProfilerUnsafeUtility.CategoryScripts);
            // Mark the parent k_ScheduleParallelTasksMarker as a beginning of the flow
            ProfilerUnsafeUtility.FlowEvent(flowId, ProfilerFlowEventType.Begin);
            for (var i = 0; i < k_NumberOfTasks; ++i)
            {
                var thread = new Thread(() => EmitFlowEventAndChainThread(flowId));
                thread.Start();
                threads[i] = thread;
            }
        }        using (k_TaskSyncMarker.Auto())
        {
            // Mark the parent k_TaskSyncMarker as a beginning of the flow
            ProfilerUnsafeUtility.FlowEvent(flowId, ProfilerFlowEventType.End);
            for (var i = 0; i < k_NumberOfTasks; ++i)
                threads[i].Join();
        }
    }
}
```





You must use `FlowEvent` together with a [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).

To mark the sample as a beginning or end of a flow, use `FlowEvent` with [ProfilerFlowEventType.Begin](Unity.Profiling.ProfilerFlowEventType.Begin.html) and [ProfilerFlowEventType.End](Unity.Profiling.ProfilerFlowEventType.End.html) events within a scope that is instrumented with [ProfilerMarker.Begin](Unity.Profiling.ProfilerMarker.Begin.html) and [ProfilerMarker.End](Unity.Profiling.ProfilerMarker.End.html), or within the `using` scope of [ProfilerMarker.Auto](Unity.Profiling.ProfilerMarker.Auto.html).

To mark the sample as a flow continuation point, use `FlowEvent` with [ProfilerFlowEventType.Next](Unity.Profiling.ProfilerFlowEventType.Next.html) and [ProfilerFlowEventType.ParallelNext](Unity.Profiling.ProfilerFlowEventType.ParallelNext.html) before a call to [ProfilerMarker.Begin](Unity.Profiling.ProfilerMarker.Begin.html) or [ProfilerMarker.Auto](Unity.Profiling.ProfilerMarker.Auto.html).

**Note:**
Unity Job System automatically marks up job scheduling, execution and wait points.

Additional resources: [CreateFlow](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CreateFlow.html), [CPU Usage Profiler module](../Manual/ProfilerCPU.html).


            

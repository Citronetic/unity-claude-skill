This version of Unity is unsupported.



# ReadOnlyAttribute





class in
          Unity.Collections



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Marks a member of a struct used in a job as read-only.





Native containers are read-write by default when used in a job. This means that you can't schedule two jobs that reference the same containers
simultaneously. Add the ReadOnly attribute to a native container field in a job struct to mark the container as read-only. This allows two jobs to run in parallel and
read data from the same native container.

Additional resources: [IJob](Unity.Jobs.IJob.html), [IJobParallelFor](Unity.Jobs.IJobParallelFor.html).


              


```
using Unity.Jobs;
using Unity.Collections;
using UnityEngine;public struct MyJob : IJob
{
    [ReadOnly]
    public NativeArray<int> input;    public NativeArray<int> output;    public void Execute()
    {
        for (var i = 0; i < output.Length; ++i)
            output[i] = input[i];
    }
}public class ParallelReplicator : MonoBehaviour
{
    public void Update()
    {
        const int n = 10000;
        var original = new NativeArray<int>(n, Allocator.Persistent);
        var clone1 = new NativeArray<int>(n, Allocator.Persistent);
        var clone2 = new NativeArray<int>(n, Allocator.Persistent);        var job1 = new MyJob
        {
            input = original,
            output = clone1
        };
        var job2 = new MyJob
        {
            input = original,
            output = clone2
        };        var jobX = new MyJob
        {
            input = original,
            output = clone2
        };        // Run the jobs in parallel.
        var jobs = JobHandle.CombineDependencies(job1.Schedule(), job2.Schedule());        // jobX.Schedule(); // Not allowed, throws exception because job2 is writing into clone2.        jobs.Complete();        jobX.Schedule().Complete(); // Allowed, because job2 has been completed by now.        original.Dispose();
        clone1.Dispose();
        clone2.Dispose();
    }
}
```


            

This version of Unity is unsupported.



# BoxcastCommand





struct in
          UnityEngine



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


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



Use this struct to set up a box cast command to be performed asynchronously during a job.





When you use this struct to schedule a batch of box casts, the box casts will are performed asynchronously and in parallel. The results of each box cast is written to the results buffer. Since the results are written asynchronously, you cannot accesss the results buffer until the job is completed.

The results for a command at index N in the command buffer are stored at index N * maxHits in the results buffer.

Boxcast command also allows you to control whether or not Trigger colliders and back-face triangles generate a hit. Use [QueryParameters](QueryParameters.html) to control hit flags.

Note: Only BatchQuery.ExecuteBoxcastJob is logged into the profiler. Query count information is not logged.

Additional resources: Physics.Boxcast.


              


```
using Unity.Collections;
using Unity.Jobs;
using UnityEngine;public class BoxcastCommandExample : MonoBehaviour
{
    void Start()
    {
        // Perform a single boxcast using BoxcastCommand and wait for it to complete
        // Set up the command and result buffers
        var results = new NativeArray<RaycastHit>(2, Allocator.TempJob);
        var commands = new NativeArray<BoxcastCommand>(1, Allocator.TempJob);        // Set the data of the first command
        Vector3 center = Vector3.zero;
        Vector2 halfExtents = Vector3.one * 0.5f;
        Quaternion orientation = Quaternion.identity;
        Vector3 direction = Vector3.forward;        commands[0] = new BoxcastCommand(center, halfExtents, orientation, direction, QueryParameters.Default);        // Schedule the batch of boxcasts
        var handle = BoxcastCommand.ScheduleBatch(commands, results, 1, 2, default(JobHandle));        // Wait for the batch processing job to complete
        handle.Complete();        // If batchedHit.collider is not null there was a hit
        foreach (var hit in results)
        {
            if (hit.collider != null)
            {
                // Do something with results
            }
        }        // Dispose the buffers
        results.Dispose();
        commands.Dispose();
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| center | The center of the box. |
| direction | The direction in which to sweep the box. |
| distance | The maximum distance of the sweep. |
| halfExtents | The half size of the box in each dimension. |
| orientation | The rotation of the box. |
| physicsScene | The physics scene this command is run in. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces. |





### Constructors



| Constructor | Description |
| --- | --- |
| BoxcastCommand | Creates a BoxcastCommand. |





### Static Methods



| Method | Description |
| --- | --- |
| ScheduleBatch | Schedules a batch of boxcasts to be performed in a job. |


            

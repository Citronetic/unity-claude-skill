This version of Unity is unsupported.



# ClosestPointCommand





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



Struct used to set up a closest point command to be performed asynchronously during a job.

When you use this struct to schedule a batch of closest commands, they are performed asynchronously and in parallel to each other. The results of the closest points are written to the results buffer. Because the results are written asynchronously, the results buffer cannot be accessed until the job has been completed.

The result for a command at index N in the command buffer is stored at index N in the results buffer.





Additional resources: [Physics.ClosestPoint](Physics.ClosestPoint.html).


              


```
using Unity.Collections;
using Unity.Jobs;
using UnityEngine;public class ClosestPoint : MonoBehaviour
{
    private void Start()
    {
        var collider = new GameObject().AddComponent<BoxCollider>();
        // Perform a single closest point using ClosestPointCommand and wait for it to complete
        // Set up the command and result buffers
        var results = new NativeArray<Vector3>(1, Allocator.TempJob);        var commands = new NativeArray<ClosestPointCommand>(1, Allocator.TempJob);        commands[0] = new ClosestPointCommand(Vector3.one * 5, collider.GetInstanceID(), Vector3.zero, Quaternion.identity, collider.transform.lossyScale);        // Schedule the batch of closest points
        JobHandle handle = ClosestPointCommand.ScheduleBatch(commands, results, 1, default(JobHandle));        // Wait for the batch processing job to complete
        handle.Complete();        // Copy the result. If the point is inside of the Collider, it is returned as a result
        Vector3 closestPoint = results[0];        // Dispose of the buffers
        results.Dispose();
        commands.Dispose();
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| colliderInstanceID | The ID of the Collider that you find the closest point on. |
| point | Location you want to find the closest point to. |
| position | The position of the Collider. |
| rotation | The rotation of the Collider. |
| scale | The global scale of the Collider. |





### Constructors



| Constructor | Description |
| --- | --- |
| ClosestPointCommand | Create a ClosestPointCommand using Instance ID of the Collider. |





### Static Methods



| Method | Description |
| --- | --- |
| ScheduleBatch | Schedule a batch of closest points which are performed in a job. |


            

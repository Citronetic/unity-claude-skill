This version of Unity is unsupported.



# [RaycastHit](RaycastHit.html).colliderInstanceID




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












                    public int colliderInstanceID;






### Description



Instance ID of the [Collider](Collider.html) that was hit.





Provides a reference to the collider that was hit in a way that is accessible from jobs.
For more information on creating jobs see [Create Jobs](../Manual/JobSystemCreatingJobs.html).


              


```
using Unity.Collections;
using Unity.Jobs;
using UnityEngine;public class BatchExample : MonoBehaviour
{
    public struct CollisionJob : IJob
    {
        public int colliderID;
        public NativeArray<RaycastHit> results;        public void Execute()
        {
            // This is where we check what we collided with and do any appropriate actions
            // If you tried accessing RaycastHit.collider you would get an error
            if (colliderID == results[0].colliderInstanceID)
                Debug.Log("Detected the a hit with the requested collider");
        }
    }
    void Start()
    {
        // We create the raycast command buffer and an array to store the RaycastHits
        NativeArray<RaycastCommand> commands = new NativeArray<RaycastCommand>(1, Allocator.TempJob);
        NativeArray<RaycastHit> results = new NativeArray<RaycastHit>(1, Allocator.TempJob);        var boxCollider = new GameObject().AddComponent<BoxCollider>();        // Create a new command for the buffer, pointing at the collider we created
        commands[0] = new RaycastCommand(Vector3.up * 2, Vector3.down);        // Schedule the commands in the buffer and store results in the 'results' array
        var batchHandle = RaycastCommand.ScheduleBatch(commands, results, 1, 1);        // This job is for doing something on the other thread when the collider of interest was hit
        var job = new CollisionJob();
        job.colliderID = boxCollider.GetInstanceID();
        job.results = results;        //Schedule the job to start after batchHandle has finished
        var jobHandle = job.Schedule(batchHandle);
        jobHandle.Complete();        commands.Dispose();
        results.Dispose();
    }
}
```


            

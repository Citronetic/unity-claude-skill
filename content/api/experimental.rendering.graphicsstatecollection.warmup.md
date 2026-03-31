This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [GraphicsStateCollection](Experimental.Rendering.GraphicsStateCollection.html).WarmUp




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

public [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) WarmUp([Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependency);






### Parameters



| Parameter | Description |
| --- | --- |
| dependency | Job to wait for. |





### Returns



**JobHandle**
        Handle to prewarming job.





### Description



Prewarms all shader variants in this collection using associated graphics states.





This will result in the GPU representation of the stored shader variants being created.

The JobHandle returned by this method can be used to control if the creation of GPU representations occurs synchronously or asynchronously.

The example below will perform the warm up asynchronously.


              


```
using UnityEngine;
using UnityEngine.Experimental.Rendering;
using Unity.Jobs;public class WarmUpExample : MonoBehaviour
{
    public GraphicsStateCollection graphicsStateCollection;    void Start()
    {
        JobHandle handle = graphicsStateCollection.WarmUp();
    }
}
```





Below is an example of how to wait on the completion of the job handle in order to perform operations synchronously.


              


```
using UnityEngine;
using UnityEngine.Experimental.Rendering;
using Unity.Jobs;public class WarmUpSynchronousExample : MonoBehaviour
{
    public GraphicsStateCollection graphicsStateCollection;    void Start()
    {
        JobHandle handle = graphicsStateCollection.WarmUp();
        handle.Complete();
    }
}
```





Prewarming can also be linked to other jobs using the input dependency and returned JobHandle.


              


```
using UnityEngine;
using UnityEngine.Experimental.Rendering;
using Unity.Jobs;public class WarmUpSynchronousExample : MonoBehaviour
{
    struct PostWarmUpJob : IJob
    {
        public void Execute()
        {
            Debug.Log("WarmUp is complete");
        }
    }    public GraphicsStateCollection graphicsStateCollection;
    public JobHandle inputJobHandle;    void Start()
    {
        JobHandle handle = graphicsStateCollection.WarmUp(inputJobHandle);        var job = new PostWarmUpJob();
        job.Schedule(handle);
    }
}
```


            

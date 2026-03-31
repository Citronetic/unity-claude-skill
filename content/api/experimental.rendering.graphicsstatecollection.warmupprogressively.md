This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [GraphicsStateCollection](Experimental.Rendering.GraphicsStateCollection.html).WarmUpProgressively




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

public [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) WarmUpProgressively(int count,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependency);






### Parameters



| Parameter | Description |
| --- | --- |
| count | The maximum number of variants to warm up. |
| dependency | Job to wait for. |





### Returns



**JobHandle**
        Handle to prewarming job.





### Description



Prewarms the given number of shader variant permutations using associated graphics states.


              


```
using UnityEngine;
using UnityEngine.Experimental.Rendering;
using Unity.Jobs;public class GraphicsStateCollectionWarmup : MonoBehaviour
{
    public GraphicsStateCollection graphicsStateCollection;
    public int statesToWarmup;    void Start()
    {
        JobHandle handle = graphicsStateCollection.WarmUpProgressively(statesToWarmup);
    }
}
```


            

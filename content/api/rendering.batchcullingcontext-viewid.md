This version of Unity is unsupported.



# [BatchCullingContext](Rendering.BatchCullingContext.html).viewID




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












                    public [Rendering.BatchPackedCullingViewID](Rendering.BatchPackedCullingViewID.html) viewID;






### Description



The ID of the object from which the culling is invoked. Usage example: store culling-related data for each object.


              


```
// Example of per-view data, indexed by view IDusing System;
using UnityEngine;public class CullingExample : MonoBehaviour
{
    private BatchRendererGroup batchRendererGroup;
    private Dictionary<BatchPackedCullingViewID, MyViewData> myPerViewData = new Dictionary<BatchPackedCullingViewID, MyViewData>();    void Start()
    {
        batchRendererGroup = new BatchRendererGroup(this.OnPerformCulling, IntPtr.Zero);
    }    public JobHandle OnPerformCulling(
        BatchRendererGroup rendererGroup,
        BatchCullingContext cullingContext,
        BatchCullingOutput cullingOutput,
        IntPtr userContext)
    {
        if (!myPerViewData.ContainsKey(cullingContext.viewID))
        {
            // If the data doesn't exist for the current view, create it.
            myPerViewData[cullingContext.viewID] = new MyViewData();
        }
        MyViewData currentViewData = myPerViewData[cullingContext.viewID];        // Do stuff with the current view's data.        /* You can also get the instance ID of the current view's gameObject
           (for example, Camera, Light, etc.) as follows: */
        int instanceID = cullingContext.viewID.GetInstanceID();        /* The slice index depends on the view type.
           For example, for Cameras, the slice index is always zero.
           For cascaded shadow maps, it equals the index of the cascade. */
        int sliceIndex = cullingContext.viewID.GetSliceIndex();
    }
}
```


            

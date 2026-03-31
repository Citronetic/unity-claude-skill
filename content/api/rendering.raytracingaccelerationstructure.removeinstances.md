This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).RemoveInstances




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

public void RemoveInstances(int layerMask,
[Rendering.RayTracingAccelerationStructure.RayTracingModeMask](Rendering.RayTracingAccelerationStructure.RayTracingModeMask.html) rayTracingModeMask);






### Parameters



| Parameter | Description |
| --- | --- |
| layerMask | A 32-bit mask that specifies which layers to remove ray tracing instances from. |
| rayTracingModeMask | A mask that speficies which RayTracingModes ray tracing instances must have in order to be removed. |





### Description



Removes ray tracing instances from the [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html) using filtering based on layer and [RayTracingMode](Experimental.Rendering.RayTracingMode.html).





Additional resources: [RayTracingModeMask](Rendering.RayTracingAccelerationStructure.RayTracingModeMask.html), [AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [AddInstances](Rendering.RayTracingAccelerationStructure.AddInstances.html), [RemoveInstance](Rendering.RayTracingAccelerationStructure.RemoveInstance.html), [ClearInstances](Rendering.RayTracingAccelerationStructure.ClearInstances.html).


              


```
using UnityEngine.Rendering;
using static UnityEngine.Rendering.RayTracingAccelerationStructure;RayTracingAccelerationStructure rtas  = new RayTracingAccelerationStructure();// Add ray tracing instances using AddInstance, AddInstances or CullInstances methods.// Remove all ray tracing instances using dynamic geometries that are on Layer 1 or Layer 2.
rtas.RemoveInstances((1 << 1) | (1 << 2), RayTracingModeMask.DynamicGeometry | RayTracingModeMask.DynamicGeometryManualUpdate);// Remove all ray tracing instances.
rtas.RemoveInstances(-1, RayTracingModeMask.Everything);
```


            

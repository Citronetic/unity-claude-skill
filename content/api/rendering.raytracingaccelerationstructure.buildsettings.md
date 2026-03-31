This version of Unity is unsupported.



# BuildSettings





struct in
          UnityEngine.Rendering



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



Contains options for building a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





This struct packages together parameters for the [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html) and [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html) methods. Use the different parameters to control or optimize how Unity builds the acceleration structure.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class RayTracingManager : MonoBehaviour
{
    // References to renderers that will be ray traced
    public Renderer[] sceneRenderers;    private RayTracingAccelerationStructure rtas;
    private bool isInitialized = false;    void Start()
    {
        InitializeRayTracing();
    }    void OnDestroy()
    {
        // Clean up acceleration structure
        if (rtas != null)
        {
            rtas.Dispose();
            rtas = null;
        }
    }    void Update()
    {
        if (!isInitialized || rtas == null)
            return;        // Rebuild acceleration structure each frame to handle dynamic objects
        UpdateAccelerationStructure();
    }    private void BuildAccelerationStructure()
    {
        if (Camera.main == null)
            return;        var buildSettings = new RayTracingAccelerationStructure.BuildSettings(
            // Build the acceleration structure for maximum ray tracing performance...
            RayTracingAccelerationStructureBuildFlags.PreferFastTrace,
            // ...and with camera-relative ray tracing.
            Camera.main.transform.position
        );        rtas.Build(buildSettings);
    }    private void InitializeRayTracing()
    {
        if (sceneRenderers == null || sceneRenderers.Length == 0)
        {
            Debug.LogError("ERROR: No renderers assigned for ray tracing.");
            return;
        }        // Create acceleration structure
        rtas = new RayTracingAccelerationStructure();        // Configure submesh flags
        RayTracingSubMeshFlags[] subMeshFlags = new RayTracingSubMeshFlags[1];
        subMeshFlags[0] = RayTracingSubMeshFlags.Enabled | RayTracingSubMeshFlags.ClosestHitOnly;        // Add all renderers to acceleration structure
        foreach (var renderer in sceneRenderers)
        {
            if (renderer != null)
            {
                rtas.AddInstance(
                    renderer,          // Renderer to add
                    subMeshFlags,      // Hit shader setup
                    true,              // Disable triangle culling
                    false,             // Consider front triangles as clockwise relative to the ray direction
                    0xff,              // Instance mask (all bits set)
                    0                  // Layer value
                );
            }
        }        // Perform initial build
        BuildAccelerationStructure();
        isInitialized = true;
    }    private void UpdateAccelerationStructure()
    {
        // Update transform of all instances
        foreach (var renderer in sceneRenderers)
        {
            if (renderer != null)
            {
                rtas.UpdateInstanceTransform(renderer);
            }
        }        // Rebuild the structure
        BuildAccelerationStructure();
    }
}
```





Additional resources:: [Build](Rendering.RayTracingAccelerationStructure.Build.html), [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html).





### Properties



| Property | Description |
| --- | --- |
| buildFlags | The build flags Unity uses to build a RayTracingAccelerationStructure. |
| relativeOrigin | The relative origin of ray tracing instances. |


            

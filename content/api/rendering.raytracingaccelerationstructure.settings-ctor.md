This version of Unity is unsupported.



# RayTracingAccelerationStructure.Settings Constructor




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

public RayTracingAccelerationStructure.Settings();






## Declaration

public RayTracingAccelerationStructure.Settings([Rendering.RayTracingAccelerationStructure.ManagementMode](Rendering.RayTracingAccelerationStructure.ManagementMode.html) sceneManagementMode,
[Rendering.RayTracingAccelerationStructure.RayTracingModeMask](Rendering.RayTracingAccelerationStructure.RayTracingModeMask.html) rayTracingModeMask,
int layerMask);






## Declaration

public RayTracingAccelerationStructure.Settings([Rendering.RayTracingAccelerationStructure.ManagementMode](Rendering.RayTracingAccelerationStructure.ManagementMode.html) sceneManagementMode,
[Rendering.RayTracingAccelerationStructure.RayTracingModeMask](Rendering.RayTracingAccelerationStructure.RayTracingModeMask.html) rayTracingModeMask,
int layerMask,
[Rendering.RayTracingAccelerationStructureBuildFlags](Rendering.RayTracingAccelerationStructureBuildFlags.html) buildFlagsStaticGeometries,
[Rendering.RayTracingAccelerationStructureBuildFlags](Rendering.RayTracingAccelerationStructureBuildFlags.html) buildFlagsDynamicGeometries);






### Parameters



| Parameter | Description |
| --- | --- |
| sceneManagementMode | Whether Unity or the user manages a RayTracingAccelerationStructure. |
| rayTracingModeMask | The mask that determines which ray tracing instances are added to the RayTracingAccelerationStructure based on their RayTracingMode. |
| layerMask | The mask that determines which ray tracing instances are added to the RayTracingAccelerationStructure based on their layer. |
| buildFlagsStaticGeometries | The flags Unity uses when it builds acceleration structures associated with static geometries. |
| buildFlagsDynamicGeometries | The flags Unity uses when it builds acceleration structures associated with dynamic geometries. |





### Description



Initializes and returns an instance of RayTracingAccelerationStructure.Settings from the given configuration.


            

This version of Unity is unsupported.



# Settings





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



Defines whether Unity or the user updates a RayTracingAccelerationStructure. Also provides additional filtering and acceleration structure build options.





### Properties



| Property | Description |
| --- | --- |
| buildFlagsDynamicGeometries | The flags Unity uses when it builds acceleration structures associated with dynamic geometries. |
| buildFlagsStaticGeometries | The flags Unity uses when it builds acceleration structures associated with static geometries. |
| enableCompaction | Set to true to enable acceleration structure compaction for static geometries. |
| layerMask | A 32-bit mask that specifies which layers a ray tracing instance must be on in order to be added to the RayTracingAccelerationStructure. |
| managementMode | An enum that determines whether Unity or the user updates a RayTracingAccelerationStructure. |
| rayTracingModeMask | Flags that determine which RayTracingModes ray tracing instances must use to be added to a RayTracingAccelerationStructure. |





### Constructors



| Constructor | Description |
| --- | --- |
| RayTracingAccelerationStructure.Settings | Initializes and returns an instance of RayTracingAccelerationStructure.Settings from the given configuration. |


            

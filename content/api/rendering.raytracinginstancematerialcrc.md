This version of Unity is unsupported.



# RayTracingInstanceMaterialCRC





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



A Material instance id and CRC hash value pair. This information is returned by a [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) call.





Additional resources: [RayTracingInstanceCullingFlags](Rendering.RayTracingInstanceCullingFlags.html), [Material.ComputeCRC](Material.ComputeCRC.html), [RayTracingInstanceCullingResults](Rendering.RayTracingInstanceCullingResults.html).





### Properties



| Property | Description |
| --- | --- |
| crc | The CRC hash value of a Material that was computed during a RayTracingAccelerationStructure.CullInstances call. |
| instanceID | The Material instance id whose Material CRC was computed during the RayTracingAccelerationStructure.CullInstances call. |


            

This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).AddInstancesIndirect




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

public int AddInstancesIndirect(ref [Rendering.RayTracingMeshInstanceConfig](Rendering.RayTracingMeshInstanceConfig.html) config,
[GraphicsBuffer](GraphicsBuffer.html) instanceMatrices,
int maxInstanceCount,
[GraphicsBuffer](GraphicsBuffer.html) argsBuffer,
uint argsOffset = 0,
uint id);






## Declaration

public int AddInstancesIndirect(ref [Rendering.RayTracingGeometryInstanceConfig](Rendering.RayTracingGeometryInstanceConfig.html) config,
[GraphicsBuffer](GraphicsBuffer.html) instanceMatrices,
int maxInstanceCount,
[GraphicsBuffer](GraphicsBuffer.html) argsBuffer,
uint argsOffset = 0,
uint id);






### Parameters



| Parameter | Description |
| --- | --- |
| config | The common parameters that these ray tracing instances use. |
| instanceMatrices | The GraphicsBuffer to contain transformation matrices. |
| maxInstanceCount | The maximum number of ray tracing instances to add to the RayTracingAccelerationStructure. |
| argsBuffer | The GraphicsBuffer containing 2 uint values at argsOffset byte offset: start instance and instance count. |
| argsOffset | The offset, in bytes, into argsBuffer where indirect arguments are stored. |
| id | An optional instance ID value that you can access in HLSL with the InstanceID() function. Unity assigns consecutive instance IDs to each mesh instance, starting with the value of id. |





### Returns



**int**
        The value representing a handle that you can use to perform later actions (e.g. [RemoveInstance](Rendering.RayTracingAccelerationStructure.RemoveInstance.html)), or 0 if the instances are not added successfully.





### Description



Adds an array of ray tracing instances to the RayTracingAccelerationStructure where the instance matrices are specified using a GraphicsBuffer.





The config function argument specifies the relevant source geometry and associated parameters for all ray tracing instances. The source geometry can be either specified using a [Mesh](Mesh.html) or GraphicsBuffers containing vertex and index data.

The world transformation matrices for ray tracing instances are specified using the instanceMatrices function argument. Only 4x4 floating-point matrices are supported where the elements are stored using column-major layout (the same as Matrix4x4 layout). The buffer must be created using the  [GraphicsBuffer.Target.Structured](GraphicsBuffer.Target.Structured.html) or [GraphicsBuffer.Target.Append](GraphicsBuffer.Target.Append.html) flags. You can specify the contents of the buffer by simply calling instanceMatrices.SetData(Matrix4x4[]) or you can employ a more advanced algorithm where the matrix buffer is filled in a compute shader in a GPU-driven rendering pipeline, for example.

The `maxInstanceCount` argument is necessary to let Unity to allocate GPU memory for the acceleration structure used for ray tracing. The final number of valid ray tracing instances added to the acceleration structure depends on both the `maxInstanceCount` value and the `argsBuffer` values (start instance and instance count). An internal compute shader handles the process of adding instances, that shader is executed for each `AddInstanceIndirect` call when the acceleration structure is built.

When `AddInstancesIndirect` is used, Unity enables the `INSTANCING_ON` shader keyword. To declare the shader keyword in HLSL, add the line `#pragma multi_compile _ INSTANCING_ON` in the shader pass specified in [RayTracingShader.SetShaderPass](Rendering.RayTracingShader.SetShaderPass.html) or [CommandBuffer.SetRayTracingShaderPass](Rendering.CommandBuffer.SetRayTracingShaderPass.html).
To access per-instance data relative to this array of ray tracing instances, use `InstanceIndex() - unity_BaseInstanceID` as an instance index in HLSL.

When you have added all required instances, use [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html) or [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html) to build the acceleration structure on the GPU.

This functionality doesn't have any special hardware requirements in addition to ray tracing support requirements ([SystemInfo.supportsRayTracing](SystemInfo-supportsRayTracing.html) must be true). In DirectX Raytracing (DXR), this function causes all ray tracing instances in the array to use only one shader record from the shader table, which reduces the CPU overhead on the render thread for binding GPU resources to hit shaders.

This method returns a single instance handle which you can use later to perform actions that affect all ray tracing instances added using this method.

Additional resources: [RayTracingAccelerationStructure.RemoveInstance](Rendering.RayTracingAccelerationStructure.RemoveInstance.html), [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html), [GraphicsBuffer.CopyCount](GraphicsBuffer.CopyCount.html).


            

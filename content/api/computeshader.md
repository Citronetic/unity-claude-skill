This version of Unity is unsupported.



# ComputeShader





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



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




                [Switch to Manual](../Manual/class-ComputeShader.html)














### Description



Compute Shader asset.





Compute shaders are programs that run on the GPU outside of the normal rendering pipeline.
They correspond to compute shader assets in the project (.compute files).

Compute shader support can be queried runtime using [SystemInfo.supportsComputeShaders](SystemInfo-supportsComputeShaders.html). See [Compute Shaders](../Manual/class-ComputeShader.html) overview for more info about platforms supporting compute shaders.

Additional resources: [ComputeBuffer](ComputeBuffer.html) class, [Compute Shaders](../Manual/class-ComputeShader.html) overview.





### Properties



| Property | Description |
| --- | --- |
| enabledKeywords | An array containing the local shader keywords that are currently enabled for this compute shader. |
| keywordSpace | The local keyword space of this compute shader. |
| shaderKeywords | An array containing names of the local shader keywords that are currently enabled for this compute shader. |





### Public Methods



| Method | Description |
| --- | --- |
| DisableKeyword | Disables a local shader keyword for this compute shader. |
| Dispatch | Execute a compute shader. |
| DispatchIndirect | Execute a compute shader. |
| EnableKeyword | Enables a local shader keyword for this compute shader. |
| FindKernel | Find ComputeShader kernel index. |
| GetKernelThreadGroupSizes | Get kernel thread group sizes. |
| HasKernel | Checks whether a shader contains a given kernel. |
| IsKeywordEnabled | Checks whether a local shader keyword is enabled for this compute shader. |
| IsSupported | Allows you to check whether the current end user device supports the features required to run the specified compute shader kernel. |
| SetBool | Set a bool parameter. |
| SetBuffer | Sets an input or output compute buffer. |
| SetConstantBuffer | Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the ComputeShader. |
| SetFloat | Set a float parameter. |
| SetFloats | Set multiple consecutive float parameters at once. |
| SetInt | Set an integer parameter. |
| SetInts | Set multiple consecutive integer parameters at once. |
| SetKeyword | Sets the state of a local shader keyword for this compute shader. |
| SetMatrix | Set a Matrix parameter. |
| SetMatrixArray | Set a Matrix array parameter. |
| SetRayTracingAccelerationStructure | Sets a RayTracingAccelerationStructure to be used for Inline Ray Tracing (Ray Queries). |
| SetTexture | Set a texture parameter. |
| SetTextureFromGlobal | Set a texture parameter from a global texture property. |
| SetVector | Set a vector parameter. |
| SetVectorArray | Set a vector array parameter. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            

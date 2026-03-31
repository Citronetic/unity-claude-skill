This version of Unity is unsupported.



# RayTracingShader





class in
          UnityEngine.Rendering



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



















### Description



A shader for GPU ray tracing.





This shader should contain at least a `raygeneration` shader.





### Properties



| Property | Description |
| --- | --- |
| maxRecursionDepth | The maximum number of ray bounces this shader can trace (Read Only). |





### Public Methods



| Method | Description |
| --- | --- |
| Dispatch | Dispatches this RayTracingShader. |
| DispatchIndirect | Dispatches this RayTracingShader. |
| SetAccelerationStructure | Sets the value for RayTracingAccelerationStructure property of this RayTracingShader. |
| SetBool | Sets the value of a boolean uniform. |
| SetBuffer | Binds an input or output compute buffer. |
| SetConstantBuffer | Binds a constant buffer created through a ComputeBuffer or a GraphicsBuffer. |
| SetFloat | Sets the value of a float uniform. |
| SetFloats | Sets the values for a float array uniform. |
| SetInt | Sets the value of a int uniform. |
| SetInts | Sets the values for a int array uniform. |
| SetMatrix | Sets the value of a matrix uniform. |
| SetMatrixArray | Sets a matrix array uniform. |
| SetShaderPass | Selects which Shader Pass to use when executing ray/geometry intersection shaders. |
| SetTexture | Binds a texture resource. This can be a input or an output texture (UAV). |
| SetTextureFromGlobal | Binds a global texture to a RayTracingShader. |
| SetVector | Sets the value for a vector uniform. |
| SetVectorArray | Sets a vector array uniform. |





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





            

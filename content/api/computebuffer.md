This version of Unity is unsupported.



# ComputeBuffer





class in
          UnityEngine



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



GPU data buffer, mostly for use with compute shaders.





[ComputeShader](ComputeShader.html) programs often need arbitrary data to be read & written into memory buffers.
ComputeBuffer class is exactly for that - you can create & fill them from script code,
and use them in compute shaders or regular shaders.

Compute buffers are always supported in compute shaders. Compute shader support can be queried runtime using [SystemInfo.supportsComputeShaders](SystemInfo-supportsComputeShaders.html). See the [Compute Shaders](../Manual/class-ComputeShader.html) Manual page for more information about platforms supporting compute shaders. In regular graphics shaders the compute buffer support requires minimum [shader model 4.5](../Manual/SL-ShaderCompileTargets.html).

For a ComputeBuffer that uses a counter, Metal and Vulkan platforms don't have native counters and use separate small buffers that act as counters internally. These small buffers are bound separately from the ComputeBuffer and count towards the limit of possible buffers bound (31 for Metal, based on the device for Vulkan).

On the shader side, ComputeBuffers with default [ComputeBufferType](ComputeBufferType.html) map to `StructuredBuffer<T>` and `RWStructuredBuffer<T>` in HLSL.

Additional resources: [ComputeShader](ComputeShader.html) class, [Shader.SetGlobalBuffer](Shader.SetGlobalBuffer.html), [Material.SetBuffer](Material.SetBuffer.html), [Compute Shaders](../Manual/class-ComputeShader.html) overview.





### Properties



| Property | Description |
| --- | --- |
| count | Number of elements in the buffer (Read Only). |
| name | The debug label for the compute buffer (setter only). |
| stride | Size of one element in the buffer in bytes (Read Only). |





### Constructors



| Constructor | Description |
| --- | --- |
| ComputeBuffer | Create a Compute Buffer. |





### Public Methods



| Method | Description |
| --- | --- |
| BeginWrite | Begins a write operation to the buffer |
| EndWrite | Ends a write operation to the buffer |
| GetData | Read data values from the buffer into an array. The array can only use blittable types. |
| GetNativeBufferPtr | Retrieve a native (underlying graphics API) pointer to the buffer. |
| IsValid | Returns true if this compute buffer is valid and false otherwise. |
| Release | Release a Compute Buffer. |
| SetCounterValue | Sets counter value of append/consume buffer. |
| SetData | Set the buffer with values from an array. |





### Static Methods



| Method | Description |
| --- | --- |
| CopyCount | Copy counter value of append/consume buffer into another buffer. |


            

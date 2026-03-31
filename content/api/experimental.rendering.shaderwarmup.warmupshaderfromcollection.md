This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [ShaderWarmup](Experimental.Rendering.ShaderWarmup.html).WarmupShaderFromCollection




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

public static void WarmupShaderFromCollection([ShaderVariantCollection](ShaderVariantCollection.html) collection,
[Shader](Shader.html) shader,
[Experimental.Rendering.ShaderWarmupSetup](Experimental.Rendering.ShaderWarmupSetup.html) setup);






### Description



Prewarms the shader variants for a given [Shader](Shader.html) that are in a given [ShaderVariantCollection](ShaderVariantCollection.html), using a given rendering configuration.





For information on shader loading and prewarming, including a list of different prewarming techniques, see [Shader loading](../Manual/shader-loading.html).

Unity needs more information to correctly build GPU representations of the shader variants ('pipeline state objects' or PSOs) if your application runs on one of the following graphics APIs:



          - DirectX 12

          - Metal

          - Vulkan





If Unity has this information, it's more likely the prewarmed variants match what the GPU needs when it renders your Scene.

To provide Unity with more information, you can do the following:



          - Use the `setup` parameter to specify the vertex data layout you use with the shader.

          - Before you call `WarmupShader`, set the render state so it's as close as possible to the state you use with the shader. For example, set the [format of the render target](RenderTextureFormat.html), or use [render state commands](../Manual/shader-shaderlab-commands.html) to set states such as blend mode.





Unity also asynchronously prewarms shader variants using multiple background threads, if your application runs on a platform that supports it. Unity uses as many threads as it can. In your built application, you can use the `-max-async-pso-job-count` [command line argument](../Manual/PlayerCommandLineArguments.html) to set the number of threads Unity uses.

Additional resources: [ShaderWarmup.WarmupShader](Experimental.Rendering.ShaderWarmup.WarmupShader.html), [Shader.WarmupAllShaders](Shader.WarmupAllShaders.html), [ShaderVariantCollection.WarmUp](ShaderVariantCollection.WarmUp.html), [Shader loading](../Manual/shader-loading.html)


            

This version of Unity is unsupported.



# [ShaderUtil](ShaderUtil.html).RestoreAsyncCompilation




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

public static void RestoreAsyncCompilation([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd);






### Parameters



| Parameter | Description |
| --- | --- |
| cmd | Target CommandBuffer. |





### Description



Restores the previous Shader compilation mode in this CommandBuffer scope.





The Editor compiles Shader Variants on-demand, the first time rendering requires a particular Shader Variant. By default, asynchronous Shader compilation is only enabled for requests that originate from the Game View or Scene View. With [SetAsyncCompilation](ShaderUtil.SetAsyncCompilation.html), you can add commands to the [CommandBuffer](Rendering.CommandBuffer.html) that control the Shader compilation during the execution of the buffer. With this method, *RestoreAsyncCompilation*, you can restore the previous compilation mode.

Additional resources: [SetAsyncCompilation](ShaderUtil.SetAsyncCompilation.html), [allowAsyncCompilation](ShaderUtil-allowAsyncCompilation.html), [anythingCompiling](ShaderUtil-anythingCompiling.html), [IsPassCompiled](ShaderUtil.IsPassCompiled.html), [CompilePass](ShaderUtil.CompilePass.html).


            

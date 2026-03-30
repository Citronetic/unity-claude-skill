This version of Unity is unsupported.



# [ShaderUtil](ShaderUtil.html).allowAsyncCompilation




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












                    public static bool allowAsyncCompilation;






### Description



When true, asynchronous Shader compilation is allowed at the current call site.





The Editor compiles Shader Variants on-demand, the first time rendering requires a particular Shader Variant. By default, asynchronous Shader compilation is only enabled for requests that originate from the Game View or Scene View. With this property, you can control the compilation more precisely. For example, you can allow asynchronous compilation for custom Editor tools. You can also force synchronous compilation on parts of rendering where asynchronous compilation would be used by default. This property takes effect immediately. For [CommandBuffer](Rendering.CommandBuffer.html) based control, see [SetAsyncCompilation](ShaderUtil.SetAsyncCompilation.html).

Additional resources: [SetAsyncCompilation](ShaderUtil.SetAsyncCompilation.html), [RestoreAsyncCompilation](ShaderUtil.RestoreAsyncCompilation.html), [anythingCompiling](ShaderUtil-anythingCompiling.html), [IsPassCompiled](ShaderUtil.IsPassCompiled.html), [CompilePass](ShaderUtil.CompilePass.html).


            

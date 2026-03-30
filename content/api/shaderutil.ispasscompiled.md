This version of Unity is unsupported.



# [ShaderUtil](ShaderUtil.html).IsPassCompiled




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

public static bool IsPassCompiled([Material](Material.html) material,
int pass);






### Parameters



| Parameter | Description |
| --- | --- |
| material | The Material to check against. |
| pass | The index of the Shader pass to check. |





### Description



Checks if the Shader variant for the given pass in the Material has already been compiled.





The Editor can compile Shaders asynchronously. You can use this method to check if the Editor has already compiled the particular Shader Variant needed for the specific pass of the Material.

Additional resources: :ref::CompilePass, [allowAsyncCompilation](ShaderUtil-allowAsyncCompilation.html), [anythingCompiling](ShaderUtil-anythingCompiling.html), [SetAsyncCompilation](ShaderUtil.SetAsyncCompilation.html), [RestoreAsyncCompilation](ShaderUtil.RestoreAsyncCompilation.html).


            

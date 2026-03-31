This version of Unity is unsupported.



# [ShaderUtil](ShaderUtil.html).CompilePass




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

public static void CompilePass([Material](Material.html) material,
int pass,
bool forceSync);






### Parameters



| Parameter | Description |
| --- | --- |
| material | Target Material. |
| pass | Index of the target Shader pass. |
| forceSync | Forces the script execution to wait until the compilation has finished. Optional. |





### Description



Request the Editor to compile the Shader Variant needed for the specific pass of the given Material.





Additional resources: [IsPassCompiled](ShaderUtil.IsPassCompiled.html), [allowAsyncCompilation](ShaderUtil-allowAsyncCompilation.html), [anythingCompiling](ShaderUtil-anythingCompiling.html), [SetAsyncCompilation](ShaderUtil.SetAsyncCompilation.html), [RestoreAsyncCompilation](ShaderUtil.RestoreAsyncCompilation.html).


            

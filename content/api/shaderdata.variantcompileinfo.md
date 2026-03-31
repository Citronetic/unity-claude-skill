This version of Unity is unsupported.



# VariantCompileInfo





struct in
          UnityEditor


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



Represents the results of compiling a variant using [ShaderData.Pass.CompileVariant](ShaderData.Pass.CompileVariant.html).





### Properties



| Property | Description |
| --- | --- |
| Attributes | Vertex attributes the compiled variant uses (Read Only). |
| ConstantBuffers | Constant buffers the compiled variant uses (Read Only). Some platforms don't have constant buffers; however, Unity reports all global constants/uniforms in a single constant buffer. |
| Messages | Stores errors and warnings produced during compilation (Read Only). |
| ShaderData | Stores the raw platform-specific bytecode for the compiled shader (Read Only). |
| Success | Indicates whether the variant compilation succeeded (Read Only). If it did, it is true. Otherwise, this is false and ShaderData.VariantCompileInfo.Messages contains the errors. |
| TextureBindings | Texture bindings the compiled variant uses (Read Only). |


            

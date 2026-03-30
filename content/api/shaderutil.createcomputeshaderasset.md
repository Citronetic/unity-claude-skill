This version of Unity is unsupported.



# [ShaderUtil](ShaderUtil.html).CreateComputeShaderAsset




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

public static [ComputeShader](ComputeShader.html) CreateComputeShaderAsset([AssetImporters.AssetImportContext](AssetImporters.AssetImportContext.html) context,
string source);






### Parameters



| Parameter | Description |
| --- | --- |
| context | The context object the asset system uses to register shader dependencies. |
| source | The string that contains a shader written in HLSL code. |





### Description



Creates a new [ComputeShader](ComputeShader.html) object from the provided source code string. You can use this method alongside the [ScriptedImporter](AssetImporters.ScriptedImporter.html) to create custom compute shader generation tools in the Editor.


            

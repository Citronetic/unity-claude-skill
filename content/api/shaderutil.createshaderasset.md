This version of Unity is unsupported.



# [ShaderUtil](ShaderUtil.html).CreateShaderAsset




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

public static [Shader](Shader.html) CreateShaderAsset([AssetImporters.AssetImportContext](AssetImporters.AssetImportContext.html) context,
string source,
bool compileInitialShaderVariants);






## Declaration

public static [Shader](Shader.html) CreateShaderAsset(string source,
bool compileInitialShaderVariants);






## Declaration

public static [Shader](Shader.html) CreateShaderAsset(string source);






### Parameters



| Parameter | Description |
| --- | --- |
| context | A context object that the asset system needs to register shader dependencies properly. |
| source | A string that contains a shader written in ShaderLab code. |
| compileInitialShaderVariants | Set to true to compile the ShaderLab code contained in the source string; otherwise false. |





### Description



Creates a new [Shader](Shader.html) object from the provided source code string. You can use this method alongside the [ScriptedImporter](AssetImporters.ScriptedImporter.html) to create custom shader generation tools in the Editor.


            

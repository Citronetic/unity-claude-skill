This version of Unity is unsupported.



# [ShaderUtil](ShaderUtil.html).UpdateShaderAsset




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

public static void UpdateShaderAsset([AssetImporters.AssetImportContext](AssetImporters.AssetImportContext.html) context,
[Shader](Shader.html) shader,
string source,
bool compileInitialShaderVariants);






## Declaration

public static void UpdateShaderAsset([Shader](Shader.html) shader,
string source,
bool compileInitialShaderVariants);






## Declaration

public static void UpdateShaderAsset([Shader](Shader.html) shader,
string source);






### Parameters



| Parameter | Description |
| --- | --- |
| context | A context object that the asset system needs to register shader dependencies properly. |
| source | A string that contains a shader written in ShaderLab code. |
| compileInitialShaderVariants | Set to true to compile the ShaderLab code contained in the source string; otherwise false. |
| shader | The Shader to update. |





### Description



Replaces the existing source code in the specified shader with the source code in the supplied string.


            

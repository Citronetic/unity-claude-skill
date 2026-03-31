This version of Unity is unsupported.



# ShaderVariant





struct in
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



Identifies a specific variant of a shader.





In Unity, many shaders internally have multiple "variants", to account for different light modes, lightmaps, shadows and so on. These variants are indentified by a shader pass type, and a set of shader keywords. See [ShaderVariantCollection](ShaderVariantCollection.html).

Note that creating a ShaderVariant will throw an ArgumentException if shader is null, pass type does not exist or variant with the passed keywords is not found.





### Properties



| Property | Description |
| --- | --- |
| keywords | Array of shader keywords to use in this variant. |
| passType | Pass type to use in this variant. |
| shader | Shader to use in this variant. |





### Constructors



| Constructor | Description |
| --- | --- |
| ShaderVariantCollection.ShaderVariant | Creates a ShaderVariant structure. |


            

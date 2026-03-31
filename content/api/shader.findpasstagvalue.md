This version of Unity is unsupported.



# [Shader](Shader.html).FindPassTagValue




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




                [Switch to Manual](../Manual/class-Shader.html)










## Declaration

public [Rendering.ShaderTagId](Rendering.ShaderTagId.html) FindPassTagValue(int passIndex,
[Rendering.ShaderTagId](Rendering.ShaderTagId.html) tagName);






### Parameters



| Parameter | Description |
| --- | --- |
| passIndex | The index of the pass. |
| tagName | The name of the tag. |





### Description



Searches for the tag specified by `tagName` on the shader's active SubShader and returns the value of the tag.




---








## Declaration

public [Rendering.ShaderTagId](Rendering.ShaderTagId.html) FindPassTagValue(int subshaderIndex,
int passIndex,
[Rendering.ShaderTagId](Rendering.ShaderTagId.html) tagName);






### Parameters



| Parameter | Description |
| --- | --- |
| subshaderIndex | The index of the SubShader. |
| passIndex | The index of the pass. |
| tagName | The name of the tag. |





### Description



Searches for the tag specified by `tagName` on the SubShader specified by `subshaderIndex` and returns the value of the tag.


            

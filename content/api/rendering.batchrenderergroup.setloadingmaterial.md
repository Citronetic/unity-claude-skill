This version of Unity is unsupported.



# [BatchRendererGroup](Rendering.BatchRendererGroup.html).SetLoadingMaterial




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

public void SetLoadingMaterial([Material](Material.html) material);






### Parameters



| Parameter | Description |
| --- | --- |
| material | The material to display while a shader is compiling. If this value is null, Unity does not display anything. |





### Description



Set the loading material for the `BatchRendererGroup`.





When you render with a `BatchRendererGroup` and a shader is currently compiling, Unity doesn't display the default [loading shader](../Manual/shader-error.html). Use this function to display a given material instead.


            

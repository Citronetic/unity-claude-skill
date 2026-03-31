This version of Unity is unsupported.



# [LocalKeyword](Rendering.LocalKeyword.html).isValid




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












                    public bool isValid;






### Description



Specifies whether this local shader keyword is valid (Read Only).





A local shader keyword is invalid if:



          - It doesn't exist in the [local keyword space](Rendering.LocalKeywordSpace.html) of the shader or compute shader you pass into the constructor.

          - If Unity can't find it when you call [LocalKeywordSpace.FindKeyword](Rendering.LocalKeywordSpace.FindKeyword.html).





If you use an invalid local shader keyword as an argument for [Material.EnableKeyword](Material.EnableKeyword.html), [Material.DisableKeyword](Material.DisableKeyword.html), [ComputeShader.EnableKeyword](ComputeShader.EnableKeyword.html), or [ComputeShader.DisableKeyword](ComputeShader.DisableKeyword.html), it has no effect. If you use an invalid local shader keyword as an argument for [Material.IsKeywordEnabled](Material.IsKeywordEnabled.html) or [ComputeShader.IsKeywordEnabled](ComputeShader.IsKeywordEnabled.html), these functions return `false`.

Additional resources: [LocalKeywordSpace](Rendering.LocalKeywordSpace.html), [Material.EnableKeyword](Material.EnableKeyword.html), [Material.DisableKeyword](Material.DisableKeyword.html), [ComputeShader.EnableKeyword](ComputeShader.EnableKeyword.html), [ComputeShader.DisableKeyword](ComputeShader.DisableKeyword.html), [Material.IsKeywordEnabled]], [ComputeShader.IsKeywordEnabled](ComputeShader.IsKeywordEnabled.html).


            

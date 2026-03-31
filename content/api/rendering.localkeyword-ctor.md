This version of Unity is unsupported.



# LocalKeyword Constructor




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

public LocalKeyword([Shader](Shader.html) shader,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| shader | The Shader to use. |
| name | The name of the local shader keyword. |





### Description



Initializes and returns a LocalKeyword struct that represents an existing local shader keyword for a given [Shader](Shader.html).





If the Shader declares a local shader keyword with the given name, Unity creates and returns a `LocalKeyword` struct that represents it. Otherwise, Unity still creates a struct, but throws an error.

Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [IPreprocessShaders.OnProcessShader](Build.IPreprocessShaders.OnProcessShader.html).




---








## Declaration

public LocalKeyword([ComputeShader](ComputeShader.html) shader,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| shader | The ComputeShader to use. |
| name | The name of the local shader keyword. |





### Description



Initializes and returns a LocalKeyword struct that represents an existing local shader keyword for a given [ComputeShader](ComputeShader.html).





If the ComputeShader declares a local shader keyword with the given name, Unity creates and returns a `LocalKeyword` struct that represents it. Otherwise, Unity still creates a struct, but throws an error.

Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [IPreprocessComputeShaders.OnProcessComputeShader](Build.IPreprocessComputeShaders.OnProcessComputeShader.html).


            

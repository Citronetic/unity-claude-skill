This version of Unity is unsupported.



# [MachineLearningOperatorDispatcher](Rendering.MachineLearningOperatorDispatcher.html).Gemm




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

public static void Gemm([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cb,
[Rendering.MachineLearningOperator](Rendering.MachineLearningOperator.html) op,
[ComputeBuffer](ComputeBuffer.html) X,
[ComputeBuffer](ComputeBuffer.html) Y,
[ComputeBuffer](ComputeBuffer.html) Z,
[ComputeBuffer](ComputeBuffer.html) O);






### Parameters



| Parameter | Description |
| --- | --- |
| cb | The command buffer. |
| op | The machine learning operator. |
| X | The first input tensor. |
| Y | The second input tensor. |
| Z | The optional third input tensor. |
| O | The output tensor. |





### Description



Executes the general matrix multiplication (GEMM) operator.


            

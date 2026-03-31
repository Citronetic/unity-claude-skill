This version of Unity is unsupported.



# [MachineLearningOperatorDispatcher](Rendering.MachineLearningOperatorDispatcher.html).Conv




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

public static void Conv([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cb,
[Rendering.MachineLearningOperator](Rendering.MachineLearningOperator.html) op,
[ComputeBuffer](ComputeBuffer.html) X,
[ComputeBuffer](ComputeBuffer.html) K,
[ComputeBuffer](ComputeBuffer.html) B,
[ComputeBuffer](ComputeBuffer.html) O);






### Parameters



| Parameter | Description |
| --- | --- |
| cb | The command buffer. |
| op | The convolution machine learning operator. |
| X | The input tensor. |
| K | The kernel tensor. |
| B | The optional bias tensor. |
| O | The output tensor. |





### Description



Executes the convolution operator.


            

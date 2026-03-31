This version of Unity is unsupported.



# [ParticleSystemVertexStream](ParticleSystemVertexStream.html).ColorPackedAsTwoFloats




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



The color of each particle, packed in a special format to allow decoding on GPUs that do not support bit-packing operations.





To unpack the color, use the following code: `float4 color = float4(floor(colorPacked.x) / 255, frac(colorPacked.x) / 0.999, floor(colorPacked.y) / 255, frac(colorPacked.y) / 0.999);`.


            

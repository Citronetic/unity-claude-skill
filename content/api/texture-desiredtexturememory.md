This version of Unity is unsupported.



# [Texture](Texture.html).desiredTextureMemory




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












                    public static ulong desiredTextureMemory;






### Description



The total amount of texture memory, in bytes, that Unity would use if no constraints are applied.





The `desiredTextureMemory` property provides the total amount of texture memory, in bytes, that Unity would use if no constraints, such as the [Texture memory budget](../Manual/TextureStreaming-configure.html#memory-budget.html), were applied. This value accounts for the memory used by all requested mipmap levels, whether set automatically by Unity or manually by the user. The desired memory matches the used memory until the memory budget is exceeded. Once exceeded, this value can surpass [Texture.targetTextureMemory](Texture-targetTextureMemory.html) as additional memory is required to fulfill all requests.


            

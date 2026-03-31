This version of Unity is unsupported.



# [Font](Font.html).textureRebuilt




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



Set a function to be called when the dynamic font texture is rebuilt.





This lets you set a delegate function to be called when the dynamic font texture is rebuilt. This will happen when new characters added to the font no longer fit into the texture. The font texture will then be rebuilt to fit all needed characters. If you use custom meshes to render characters from the font, you will need to use this callback to regenerate such meshes, as previous UV coordinates from the Font will no longer be valid.
Additional resources: Example at [RequestCharactersInTexture](Font.RequestCharactersInTexture.html).


            

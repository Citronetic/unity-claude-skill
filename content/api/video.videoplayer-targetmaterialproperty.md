This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).targetMaterialProperty




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












                    public string targetMaterialProperty;






### Description



[Material](Material.html) texture property which is targeted when [VideoPlayer.renderMode](Video.VideoPlayer-renderMode.html) is set to Video.VideoTarget.MaterialOverride.





The video is sent to every [Material](Material.html) in the [Renderer](Renderer.html) that has the targeted texture property. When this property is empty, the [VideoPlayer](Video.VideoPlayer.html) uses the name of the material's first [main texture](Material-mainTexture.html). If no main texture is found, the [VideoPlayer](Video.VideoPlayer.html) uses the name of the material's first texture property.


            

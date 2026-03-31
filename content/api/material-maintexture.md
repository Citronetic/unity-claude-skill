This version of Unity is unsupported.



# [Material](Material.html).mainTexture




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




                [Switch to Manual](../Manual/class-Material.html)







                    public [Texture](Texture.html) mainTexture;






### Description



The main texture.





By default, Unity considers a texture with the property name `"_MainTex"` to be the main texture. Use the `[MainTexture]` [ShaderLab Properties attribute](../Manual/SL-Properties.html) to make Unity consider a texture with a different property name to be the main texture.
                    When the main texture is set using the `[MainTexture]` attribute, it is not visible in the Game view when you use the texture streaming [debugging view mode](../Manual/TextureStreaming-API#DebuggingAPI.html) or a custom debug tool.

This is the same as calling [Material.GetTexture](Material.GetTexture.html) or [Material.SetTexture](Material.SetTexture.html) with the property name of the main texture as a parameter.

Additional resources: [SetTexture](Material.SetTexture.html), [GetTexture](Material.GetTexture.html), [ShaderLab: Properties](../Manual/SL-Properties.html), [ShaderPropertyFlags.MainTexture](Rendering.ShaderPropertyFlags.MainTexture.html).


              


```
changeInterval/
```


            

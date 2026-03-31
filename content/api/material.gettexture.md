This version of Unity is unsupported.



# [Material](Material.html).GetTexture




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










## Declaration

public [Texture](Texture.html) GetTexture(string name);






## Declaration

public [Texture](Texture.html) GetTexture(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



Get a named texture.





Many shaders use more than one texture. Use GetTexture to get the `propertyName` texture.

                If the texture is not found, the method writes an error message to the console and returns `null`.

Common texture names used by Unity's builtin shaders:

`"_MainTex"` is the main diffuse texture. This can also be accessed via [mainTexture](Material-mainTexture.html) property.

`"_BumpMap"` is the normal map.

`"_Cube"` is the reflection cubemap.

Additional resources: [mainTexture](Material-mainTexture.html) property, [SetTexture](Material.SetTexture.html),  [Shader.PropertyToID](Shader.PropertyToID.html).


            

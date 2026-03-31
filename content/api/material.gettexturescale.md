This version of Unity is unsupported.



# [Material](Material.html).GetTextureScale




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

public [Vector2](Vector2.html) GetTextureScale(string name);






## Declaration

public [Vector2](Vector2.html) GetTextureScale(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



Gets the placement scale of texture `propertyName`.





Common texture names used by Unity's builtin shaders:

`"_MainTex"` is the main diffuse texture. This can also be accessed via [mainTextureScale](Material-mainTextureScale.html) property.

`"_BumpMap"` is the normal map.

`"_Cube"` is the reflection cubemap.

Additional resources: [mainTextureScale](Material-mainTextureScale.html) property, [SetTextureScale](Material.SetTextureScale.html).


            

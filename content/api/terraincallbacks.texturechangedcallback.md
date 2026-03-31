This version of Unity is unsupported.



# [TerrainCallbacks](TerrainCallbacks.html).TextureChangedCallback




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

public delegate void TextureChangedCallback([Terrain](Terrain.html) terrain,
string textureName,
[RectInt](RectInt.html) texelRegion,
bool synched);






### Parameters



| Parameter | Description |
| --- | --- |
| terrain | The Terrain object that references a changed TerrainData asset. |
| textureName | The name of the texture that changed. |
| texelRegion | The region of the Terrain texture that changed, in texel coordinates. |
| synched | Indicates whether the changes were fully synchronized back to CPU memory. |





### Description



Use this delegate type with [textureChanged](TerrainCallbacks-textureChanged.html) to monitor all the changes to Terrain textures.


            

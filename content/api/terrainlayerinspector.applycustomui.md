This version of Unity is unsupported.



# [TerrainLayerInspector](TerrainLayerInspector.html).ApplyCustomUI




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

public void ApplyCustomUI([ITerrainLayerCustomUI](ITerrainLayerCustomUI.html) customUI,
[Terrain](Terrain.html) terrain);






### Parameters



| Parameter | Description |
| --- | --- |
| customUI | The custom UI object. |
| terrain | The Terrain object. |





### Description



Applies the custom UI for the Terrain Layer object.





The custom UI object is usually the same [ShaderGUI](ShaderGUI.html) object implemented for the Terrain shader. This is because only the Terrain shader defines how to interpret data in a TerrainLayer object. To retrieve the custom UI object, cast the ShaderGUI object to the [ITerrainLayerCustomUI](ITerrainLayerCustomUI.html) interface.


            

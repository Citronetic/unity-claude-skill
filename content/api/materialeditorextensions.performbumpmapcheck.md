This version of Unity is unsupported.



# [MaterialEditorExtensions](MaterialEditorExtensions.html).PerformBumpMapCheck




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

public static void PerformBumpMapCheck([Material](Material.html) material);






### Parameters



| Parameter | Description |
| --- | --- |
| material | The target material. |





### Description



Iterates over all the Material properties with the MaterialProperty.PropFlags.Normal flag and checks that the textures referenced by these properties are imported as [TextureImporterType.NormalMap](TextureImporterType.NormalMap.html).





For example, you can use this method in an [AssetPostprocessor](AssetPostprocessor.html) to check the Material assets that are imported as sub-assets in the resulting prefab.

If the method is invoked in the normal editor workflow, for example, after adding and importing a new asset in Unity, a popup lists the textures to be fixed. You then have the choice of either fixing or ignoring them.

If the method is invoked while the editor is starting or running in batch mode, the textures are automatically fixed for you.

Additional resources: [TextureImporterType](TextureImporterType.html), MaterialProperty.PropFlags.


            

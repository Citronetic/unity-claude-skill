This version of Unity is unsupported.



# InSceneAssetUtility





class in
          UnityEditor


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



Provides methods related to in-scene assets.





In-scene assets are scene objects that are referenced by one or more objects in a scene and are of an asset type. Examples of asset types include, but are not limited to, [Mesh](Mesh.html), [Material](Material.html), and [ScriptableObject](ScriptableObject.html). If in-scene assets are not converted to project assets (with [AssetDatabase.CreateAsset](AssetDatabase.CreateAsset.html), for example), they are serialized inside scene files. This can cause unwanted increases in the scene file size. `InSceneAssetUtility` provides methods to identify and manage such objects.





### Static Methods



| Method | Description |
| --- | --- |
| CollectInSceneAssets | Gets information about in-scene assets referenced by the given GameObjects or scene. |
| CreateAssetFromInSceneAsset | Creates a project asset from the given in-scene asset and saves it at the provided file path. |
| CreateInSceneAssetFromAsset | Creates an in-scene asset object from the given project asset. |
| IsInSceneAsset | Checks if the given object is an in-scene asset. |


            

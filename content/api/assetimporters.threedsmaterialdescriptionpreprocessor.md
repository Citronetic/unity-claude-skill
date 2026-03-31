This version of Unity is unsupported.



# ThreeDSMaterialDescriptionPreprocessor





class in
          UnityEditor.AssetImporters



/



Inherits from:[AssetPostprocessor](AssetPostprocessor.html)


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



This is a default implementation for AssetPostProcessor.OnPreprocessMaterialDescription, this implementation converts material descriptions imported from .3DS assets into materials for the internal rendering pipeline.





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| assetImporter | Reference to the asset importer. |
| assetPath | The path name of the asset being imported. |
| context | The import context. |






### Public Methods

| Method | Description |
| --- | --- |
| GetPostprocessOrder | Returns the execution order priority for this asset postprocessor. |
| GetVersion | Returns the version of the asset postprocessor. |






### Messages

| Message | Description |
| --- | --- |
| OnAssignMaterialModel | Feeds a source material. |
| OnPostprocessAllAssets | This is called after importing of any number of assets is complete (when the Assets progress bar has reached the end). |
| OnPostprocessAnimation | This function is called when an AnimationClip has finished importing. |
| OnPostprocessAssetbundleNameChanged | Handler called when asset is assigned to a different asset bundle. |
| OnPostprocessAudio | Add this function to a subclass to get a notification when an audio clip has completed importing. |
| OnPostprocessCubemap | Add this function to a subclass to get a notification just before a cubemap texture has completed importing. |
| OnPostprocessGameObjectWithAnimatedUserProperties | This function is called when the animation curves for a custom property are finished importing. |
| OnPostprocessGameObjectWithUserProperties | Gets called for each GameObject that had at least one user property attached to it in the imported file. |
| OnPostprocessMaterial | Add this function to a subclass to get a notification when a new Material is created during an import of a ModelImporter. |
| OnPostprocessMeshHierarchy | This function is called when a new transform hierarchy has finished importing. |
| OnPostprocessModel | Add this function to a subclass to get a notification when a model has completed importing. |
| OnPostprocessPrefab | Gets a notification when a Prefab completes importing. |
| OnPostprocessSpeedTree | Add this function to a subclass to get a notification when a SpeedTree asset has completed importing. |
| OnPostprocessSprites | Add this function to a subclass to get a notification when an texture of sprite(s)  has completed importing. |
| OnPostprocessTexture | Add this function to a subclass to get a notification when a texture2D has completed importing just before Unity compresses it. |
| OnPostprocessTexture2DArray | Add this function to a subclass to get a notification when a texture2DArray has completed importing just before Unity compresses it. |
| OnPostprocessTexture3D | Add this function to a subclass to get a notification when a texture3D has completed importing just before Unity compresses it. |
| OnPreprocessAnimation | Add this function to a subclass to get a notification just before animation from a model (.fbx, .mb file etc.) is imported. |
| OnPreprocessAsset | Add this function to a subclass to get a notification just before any Asset is imported. |
| OnPreprocessAudio | Add this function to a subclass to get a notification just before an audio clip is being imported. |
| OnPreprocessCameraDescription | Add this function to a subclass to receive a notification when a camera is imported from a Model Importer. |
| OnPreprocessLightDescription | Add this function to a subclass to recieve a notification when a light is imported from a Model Importer. |
| OnPreprocessMaterialDescription | Add this function to a subclass to recieve a notification when a new material is created during the import of a ModelImporter. |
| OnPreprocessModel | Add this function to a subclass to get a notification just before a model (.fbx, .mb file etc.) is imported. |
| OnPreprocessSpeedTree | Add this function to a subclass to get a notification just before a SpeedTree asset (.spm file) is imported. |
| OnPreprocessTexture | Add this function to a subclass to get a notification just before the texture importer is run. |




            

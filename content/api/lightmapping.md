This version of Unity is unsupported.



# Lightmapping





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



Allows to control the lightmapping job.





Before starting the job the bake settings can be set via [LightingSettings](LightingSettings.html).

Additional resources: [LightingSettings](LightingSettings.html).





### Static Properties



| Property | Description |
| --- | --- |
| bakedGI | This property is now obsolete. Use LightingSettings.bakedGI. |
| bakeOnSceneLoad | Determines whether lighting data should be generated when loading a scene, for scenes that have not already been baked. |
| buildProgress | Returns the current lightmapping build progress or 0 if Lightmapping.isRunning is false. |
| isRunning | Returns true when the bake job is running, false otherwise (Read Only). |
| lightingDataAsset | The lighting data asset used by the active Scene. |
| lightingSettings | The LightingSettings that will be used for the current Scene. Will throw an exception if it is null. |
| lightingSettingsDefaults | Default LightingSettings that Unity uses for Scenes where lightingSettings is not assigned. (Read only) |
| realtimeGI | This property is now obsolete. Use LightingSettings.realtimeGI. |





### Static Methods



| Method | Description |
| --- | --- |
| Bake | Starts a synchronous bake job. |
| BakeAsync | Starts an asynchronous bake job. |
| BakeMultipleScenes | Bakes an array of Scenes. |
| BakeReflectionProbe | Starts a synchronous bake job for the probe. |
| Cancel | Cancels the currently running asynchronous bake job. |
| Clear | Deletes all runtime data for the currently loaded Scenes. |
| ClearDiskCache | Clears the cache used by lightmaps, reflection probes and default reflection. |
| ClearLightingDataAsset | For the currently loaded Scenes, this method deletes the Lighting Data Asset and any linked lightmaps and Reflection Probe assets. |
| GetAdditionalBakeDelegate | Get the currently set additional bake delegate. |
| GetLightingDataAssetForScene | Gets the LightingDataAsset associated with a specific scene. This method will return null if the scene has no LightingDataAsset, or the scene is invalid. |
| GetLightingSettingsForScene | Gets the LightingSettings object of a Scene object. |
| GetTerrainGIChunks | Get how many chunks the terrain is divided into for GI baking. |
| ResetAdditionalBakeDelegate | Resets the additional bake delegate to Unity's default. |
| SetAdditionalBakeDelegate | Set a delegate that bakes additional data. This delegates must set its done parameter to true once baking is finished to unlock the baking pipeline. Must be reset by calling ResetDelegate again. |
| SetLightingDataAssetForScene | Sets the LightingDataAsset associated with a specific scene. |
| SetLightingSettingsForScene | Applies the settings specified in the LightingSettings object to the Scene object. |
| SetLightingSettingsForScenes | Applies the settings specified in the LightingSettings object to an array of Scene objects. |
| Tetrahedralize | Calculates tetrahderons from positions using Delaunay Tetrahedralization. |
| TryGetLightingSettings | Fetches the Lighting Settings for the current Scene. Will return false if it is null. |





### Events



| Event | Description |
| --- | --- |
| bakeCancelled | Event which is called when bake job is cancelled. |
| bakeCompleted | Event which is called when bake job is completed. Only called when LightingSettings.autoGenerate is set to false. |
| bakeStarted | Event which is called when a bake is started. Only called when LightingSettings.autoGenerate is set to false. |
| lightingDataAssetCleared | Event which is called when a LightingData asset is removed from the project. |
| lightingDataCleared | Event which is called when baked Global Illumination data is cleared from the scene and from renderers. |
| lightingDataUpdated | Event which is called when any lighting data is updated as part of the GI backing process. |
| started | Delegate which is called when bake job is started. |





### Delegates



| Delegate | Description |
| --- | --- |
| AdditionalBakeDelegate | Delegate called at the last stage of the baking pipeline. |
| OnCompletedFunction | Delegate used by Lightmapping.completed callback. |
| OnStartedFunction | Delegate used by Lightmapping.started callback. |


            

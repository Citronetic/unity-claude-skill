This version of Unity is unsupported.



# EditorBuildSettings





class in
          UnityEditor



/



Inherits from:[Object](Object.html)


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



This class allows you to modify the Editor [Build Settings](../Manual/BuildSettings.html) via script.





EditorBuildSettings is stored in `ProjectSettings/EditorBuildSettings.asset`. Typically this file should be included in source control.

**Scene List**

The `ProjectSettings/EditorBuildSettings.asset` file contains the global scene list, which defines scenes to be included in the Player build.
This list can be overridden by the active [BuildProfile](Build.Profile.BuildProfile.html).  For more information see [Override settings with build profiles](../Manual/build-profiles-override-settings.html).

**Config Objects**

EditorBuildSettings can be used to persist references to configuration objects.

In this context a config object is an asset, typically a [ScriptableObject](ScriptableObject.html), that contains configuration settings.
The objects listed in EditorBuildSettings are not automatically included in the build, making them ideal for editor-only settings.
These assets could be accessed by custom build scripts, build callbacks, or any other script running in the editor.

API for working with config objects:



          - [EditorBuildSettings.AddConfigObject](EditorBuildSettings.AddConfigObject.html)

          - [EditorBuildSettings.RemoveConfigObject](EditorBuildSettings.RemoveConfigObject.html)

          - [EditorBuildSettings.TryGetConfigObject](EditorBuildSettings.TryGetConfigObject.html)

          - [EditorBuildSettings.GetConfigObjectNames](EditorBuildSettings.GetConfigObjectNames.html)





**Config Object Example**



Consider a package with a ScriptableObject-derived class for quality settings.
You can customize these settings and create multiple assets, with different values for various contexts.
Use [EditorBuildSettings.AddConfigObject](EditorBuildSettings.AddConfigObject.html) to track which asset should be considered as the "active" setting, marked by a distinctive name.
Then a build callback reads settings for the active quality settings by calling [EditorBuildSettings.TryGetConfigObject](EditorBuildSettings.TryGetConfigObject.html) with the designated name.

Note: A similar feature is available for config objects that need to be included in the Player build, making them accessible to scripts running in the Player.  See [PlayerSettings.SetPreloadedAssets](PlayerSettings.SetPreloadedAssets.html) and [PlayerSettings.GetPreloadedAssets](PlayerSettings.GetPreloadedAssets.html).

Additional resources: [EditorBuildSettingsScene](EditorBuildSettingsScene.html), [EditorUserBuildSettings](EditorUserBuildSettings.html), [BuildPlayerOptions](BuildPlayerOptions.html), [SceneManager](SceneManagement.SceneManager.html), [IPreprocessBuildWithReport](Build.IPreprocessBuildWithReport.html).





### Static Properties



| Property | Description |
| --- | --- |
| globalScenes | The list of scenes used by all platform profiles and build profiles that do not override global scenes. |
| scenes | The list of scenes in the active platform profile or build profile to be included in the build. |
| UseParallelAssetBundleBuilding | Enables multi-process AssetBundle building.                Additional resources: BuildPipeline.BuildAssetBundles |





### Static Methods



| Method | Description |
| --- | --- |
| AddConfigObject | Store a reference to a config object by name. |
| GetConfigObjectNames | Return a string array containing the names of all stored config object references. |
| RemoveConfigObject | Remove a config object reference by name. |
| TryGetConfigObject | Retrieve a config object reference by name. |





### Events



| Event | Description |
| --- | --- |
| sceneListChanged | A delegate called whenever EditorBuildSettings.scenes is set. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            

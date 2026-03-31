This version of Unity is unsupported.



# PluginImporter





class in
          UnityEditor



/



Inherits from:[AssetImporter](AssetImporter.html)


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



Represents a plugin importer.





### Properties



| Property | Description |
| --- | --- |
| DefineConstraints | Allows you to specify a list of #define directives which controls whether your plug-in should be included. |
| isNativePlugin | Is plugin native or managed? Note: C++ libraries with CLR support are treated as native plugins, because Unity cannot load such libraries. You can still access them via P/Invoke. |
| isPreloaded | Is a native plugin loaded during startup or on demand? |





### Constructors



| Constructor | Description |
| --- | --- |
| PluginImporter | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| ClearSettings | Clear all plugin settings and set the compatability with Any Platform to true. |
| GetCompatibleWithAnyPlatform | Checks whether a plugin is flagged as being compatible with Any Platform. |
| GetCompatibleWithEditor | Is plugin compatible with editor. |
| GetCompatibleWithPlatform | Is plugin compatible with specified platform. |
| GetEditorData | Returns editor specific data for specified key. |
| GetExcludeEditorFromAnyPlatform | Is Editor excluded when Any Platform is set to true. |
| GetExcludeFromAnyPlatform | Is platform excluded when Any Platform set to true. |
| GetIcon | Gets the custom icon to associate with a MonoScript at import time. |
| GetIsOverridable | Identifies whether or not this plugin will be overridden if a plugin of the same name is placed in your project folder. |
| GetPlatformData | Get platform specific data. |
| SetCompatibleWithAnyPlatform | Sets compatibility with Any Platform. |
| SetCompatibleWithEditor | Sets compatibility with any editor. |
| SetCompatibleWithPlatform | Sets compatibility with the specified platform. |
| SetEditorData | Sets editor specific data. |
| SetExcludeEditorFromAnyPlatform | Exclude Editor from compatible platforms when Any Platform is set to true. |
| SetExcludeFromAnyPlatform | Exclude platform from compatible platforms when Any Platform is set to true. |
| SetIcon | Sets the custom icon to associate with a MonoScript imported by a managed plugin. |
| SetIncludeInBuildDelegate | Setting the delegate function to be called by ShouldIncludeInBuild. |
| SetPlatformData | Sets platform specific data. |
| ShouldIncludeInBuild | Identifies whether or not this plugin should be included in the current build target. |





### Static Methods



| Method | Description |
| --- | --- |
| GetAllImporters | Returns all plugin importers for all platforms. |
| GetImporters | Returns all plugin importers for specfied platform. |





### Delegates



| Delegate | Description |
| --- | --- |
| IncludeInBuildDelegate | Delegate to be used with SetIncludeInBuildDelegate. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| assetBundleName | Get or set the AssetBundle name. |
| assetBundleVariant | Get or set the AssetBundle variant. |
| assetPath | The path name of the asset for this importer. (Read Only) |
| importSettingsMissing | The value is true when no meta file is provided with the imported asset. |
| userData | Get or set any user data. |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| AddRemap | Map a sub-asset from an imported asset (such as an FBX file) to an external Asset of the same type. |
| GetExternalObjectMap | Gets a copy of the external object map used by the AssetImporter. |
| RemoveRemap | Removes an item from the map of external objects. |
| SaveAndReimport | Save asset importer settings if asset importer is dirty. |
| SetAssetBundleNameAndVariant | Set the AssetBundle name and variant. |
| SupportsRemappedAssetType | Checks if the AssetImporter supports remapping the given asset type. |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| GetAtPath | Retrieves the asset importer for the asset at path. |
| GetImportLog | Retrieves logs generated during the import of the asset at path. |
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





            

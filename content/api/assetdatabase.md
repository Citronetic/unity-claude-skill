This version of Unity is unsupported.



# AssetDatabase





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



An Interface for accessing assets and performing operations on assets.





### Static Properties



| Property | Description |
| --- | --- |
| ActiveRefreshImportMode | Gets the refresh import mode currently in use by the asset database. |
| DesiredWorkerCount | The desired number of processes to use when importing assets, during an asset database refresh. |
| GlobalArtifactDependencyVersion | Changes during Refresh if anything has changed that can invalidate any artifact. |
| GlobalArtifactProcessedVersion | Changes whenever a new artifact is added to the artifact database. |
| onImportPackageItemsCompleted | Callback raised whenever a package import successfully completes that lists the items selected to be imported. |





### Static Methods



| Method | Description |
| --- | --- |
| AddObjectToAsset | Adds objectToAdd to an existing asset at path. |
| AllowAutoRefresh | Decrements an internal counter which Unity uses to determine whether to allow automatic AssetDatabase refreshing behavior. |
| AssetPathExists | Check whether an asset exists at the given path in the database. |
| AssetPathToGUID | Get the GUID for the asset at path. |
| CanConnectToCacheServer | Checks the availability of the Cache Server. |
| CanOpenAssetInEditor | Checks if Unity can open an asset in the Editor. |
| CanOpenForEdit | Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable. |
| ClearImporterOverride | Clears the importer override for the asset. |
| ClearLabels | Removes all labels attached to an asset. |
| CloseCacheServerConnection | Closes an active cache server connection. If no connection is active, then it does nothing. |
| Contains | Is object an asset? |
| CopyAsset | Duplicates the asset at path and stores it at newPath. |
| CopyAssets | Duplicates assets in paths and stores them in newPaths. |
| CreateAsset | Creates a new asset in a native Unity format. |
| CreateFolder | Creates a new folder, in the specified parent folder.The parent folder string must start with the "Assets" folder, and all folders within the parent folder string must already exist. For example, when specifying "Assets/ParentFolder1/Parentfolder2/", the new folder will be created in "ParentFolder2" only if ParentFolder1 and ParentFolder2 already exist. |
| DeleteAsset | Deletes the specified asset or folder. |
| DeleteAssets | Lets you delete multiple assets or folders at once with performance benefits under version control. |
| DisallowAutoRefresh | Increments an internal counter which Unity uses to determine whether to allow automatic AssetDatabase refreshing behavior. |
| ExportPackage | Exports the assets identified by assetPathNames to a unitypackage file in fileName. |
| ExtractAsset | Creates an external Asset from an object (such as a Material) by extracting it from within an imported asset (such as an FBX file). |
| FindAssetGUIDs | Searches the asset database with a filter string and returns an array of GUIDs. |
| FindAssets | Search the asset database using the search filter string. |
| ForceReserializeAssets | Forcibly load and re-serialize the given assets, flushing any outstanding data changes to disk. |
| ForceToDesiredWorkerCount | Forces the Editor to use the desired amount of worker processes. Unity will either spawn new worker processes or shut down idle worker processes to reach the desired number. |
| GenerateUniqueAssetPath | Creates a new unique path for an asset. |
| GetAllAssetBundleNames | Return all the AssetBundle names in the asset database. |
| GetAssetBundleDependencies | Given an assetBundleName, returns the list of AssetBundles that it depends on. |
| GetAssetDependencyHash | Returns the hash of all the dependencies of an asset. |
| GetAssetOrScenePath | Returns the path name relative to the project folder where the asset is stored. |
| GetAssetPath | Returns the path name relative to the project folder where the asset is stored. |
| GetAssetPathFromTextMetaFilePath | Gets the path to the asset file associated with a text .meta file. |
| GetAssetPathsFromAssetBundle | Returns an array containing the paths of all assets marked with the specified Asset Bundle name. |
| GetAssetPathsFromAssetBundleAndAssetName | Get the Asset paths for all Assets tagged with assetBundleName and
                named assetName. |
| GetAvailableImporters | Gets the importer types associated with a given Asset path. |
| GetCachedIcon | Retrieves an icon for the asset at the given asset path. |
| GetCacheServerAddress | Gets the IP address of the Cache Server in Editor Settings. |
| GetCacheServerEnableDownload | Gets the Cache Server Download option from Editor Settings. |
| GetCacheServerEnableUpload | Gets the Cache Server Upload option from Editor Settings. |
| GetCacheServerNamespacePrefix | Gets the Cache Server Namespace prefix set in Editor Settings. |
| GetCacheServerPort | Gets the Port number of the Cache Server in Editor Settings. |
| GetCurrentCacheServerIp | Gets the IP address of the Cache Server currently in use by the Editor. |
| GetDefaultImporter | Returns the Default Importer associated with the asset located at the supplied path. When no Importer override is set, then the default importer is used. Additional resources: AssetDatabase.GetImporterOverride, AssetDatabase.ClearImporterOverride. |
| GetDependencies | Returns an array of all the assets that are dependencies of the asset at the specified pathName.Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk. |
| GetImplicitAssetBundleName | Returns the name of the AssetBundle that a given asset belongs to. |
| GetImplicitAssetBundleVariantName | Returns the name of the AssetBundle Variant that a given asset belongs to. |
| GetImporterOverride | Returns the type of the override importer. |
| GetImporterType | Returns the type of importer associated with an asset without loading the asset. |
| GetImporterTypes | Returns the types of importers associated with the specified array of assets, without loading those assets. |
| GetLabels | Returns all labels attached to a given asset. |
| GetMainAssetTypeAtPath | Returns the type of the main asset object at assetPath. |
| GetMainAssetTypeFromGUID | Returns the type of the main asset object with guid. |
| GetScriptableObjectsWithMissingScriptCount | Checks how many unloadable ScriptableObject instances are present in the specified asset. |
| GetSubFolders | Given a path to a directory in the Assets folder, relative to the project folder, this method will return an array of all its subdirectories. |
| GetTextMetaFilePathFromAssetPath | Gets the path to the text .meta file associated with an asset. |
| GetTypeFromPathAndFileID | Gets an object's type from an Asset path and a local file identifier. |
| GetUnusedAssetBundleNames | Return all the unused assetBundle names in the asset database. |
| GUIDFromAssetPath | Get the GUID for the asset at path. |
| GUIDToAssetPath | Gets the corresponding asset path for the supplied GUID, or an empty string if the GUID can't be found. |
| ImportAsset | Import asset at path. |
| ImportPackage | Imports package at packagePath into the current project. |
| InstanceIDsToGUIDs | Sets a NativeArray of UnityEditor.GUIDs for every valid Instance ID that is an asset. |
| IsAssetImportWorkerProcess | Determines whether the current process is an Asset Import Worker process. |
| IsCacheServerEnabled | Checks whether the Cache Server is enabled in Project Settings. |
| IsConnectedToCacheServer | Checks connection status of the Cache Server. |
| IsDirectoryMonitoringEnabled | Reports whether Directory Monitoring is enabled. |
| IsForeignAsset | Determines whether the Asset is a foreign Asset. |
| IsMainAsset | Is asset a main asset in the project window? |
| IsMainAssetAtPathLoaded | Returns true if the main asset object at assetPath is loaded in memory. |
| IsMetaFileOpenForEdit | Query whether an asset's metadata (.meta) file is open for edit in version control. |
| IsNativeAsset | Determines whether the Asset is a native Asset. |
| IsOpenForEdit | Query whether an Asset file is open for editing in version control. |
| IsSubAsset | Does the asset form part of another asset? |
| IsValidFolder | Given a path to a folder, returns true if it exists, false otherwise. |
| LoadAllAssetRepresentationsAtPath | Returns all sub Assets at assetPath. |
| LoadAllAssetsAtPath | Returns an array of all Assets at assetPath. |
| LoadAssetAtPath | Returns the first asset object of type type at given path assetPath. |
| LoadAssetByGUID | Loads an asset object of type type by given GUID assetGUID. |
| LoadMainAssetAtPath | Returns the main asset object at assetPath.The "main" Asset is the Asset at the root of a hierarchy (such as a Maya file which may contain multiples meshes and GameObjects). |
| LoadObjectAsync | Loads a specific Object and its dependencies from an Asset file asynchronously. |
| MakeEditable | Makes a file open for editing in version control. |
| MoveAsset | Move an asset file (or folder) from one folder to another. |
| MoveAssetsToTrash | Lets you move multiple assets or folders to trash at once with performance benefits under version control. |
| MoveAssetToTrash | Moves the specified asset  or folder to the OS trash. |
| OpenAsset | Opens the asset with associated application. |
| Refresh | Import any changed assets. |
| RefreshSettings | Apply pending Editor Settings changes to the Asset pipeline. |
| RegisterCustomDependency | Allows you to register a custom dependency that Assets can be dependent on. If you register a custom dependency, and specify that an Asset is dependent on it, then the Asset will get re-imported if the custom dependency changes. |
| ReleaseCachedFileHandles | Calling this function will release file handles internally cached by Unity. This allows modifying asset or meta files safely thus avoiding potential file sharing IO errors. |
| RemoveAssetBundleName | Remove the assetBundle name from the asset database. The forceRemove flag is used to indicate if you want to remove it even it's in use. |
| RemoveObjectFromAsset | Removes object from its asset (Additional resources: AssetDatabase.AddObjectToAsset). |
| RemoveScriptableObjectsWithMissingScript | Removes any ScriptableObject instances from the given asset file which cannot be loaded because their scripts could not be found. |
| RemoveUnusedAssetBundleNames | Remove all the unused assetBundle names in the asset database. |
| RenameAsset | Rename an asset file. |
| ResetCacheServerReconnectTimer | Resets the internal cache server connection reconnect timer values. The default delay timer value is 1 second, and the max delay value is 5 minutes. Everytime a connection attempt fails it will double the delay timer value, until a maximum time of the max value. |
| SaveAssetIfDirty | Writes all unsaved changes to the specified asset to disk. |
| SaveAssets | Writes all unsaved asset changes to disk. |
| SetImporterOverride | Sets a specific importer to use for the asset. |
| SetLabels | Replaces that list of labels on an asset. |
| SetMainObject | Specifies which object in the asset file should become the main object after the next import. |
| StartAssetEditing | Pauses automatic asset import, allowing you to group several asset imports together into one larger import. |
| StopAssetEditing | Ends the Asset Database's temporary paused state, allowing it to resume normal automatic imports. |
| TryGetAssetFolderInfo | Get AssetDatabase specific information about a folder. |
| TryGetGUIDAndLocalFileIdentifier | Get the GUID and local file id from an object instance id. |
| UnregisterCustomDependencyPrefixFilter | Removes custom dependencies that match the prefixFilter. |
| ValidateMoveAsset | Checks if an asset file can be moved from one folder to another. (Without actually moving the file). |
| WriteImportSettingsIfDirty | Writes the import settings to disk. |





### Events



| Event | Description |
| --- | --- |
| cacheServerConnectionChanged | Unity raises this event when Cache Server connection is changed. |
| importPackageCancelled | Callback raised whenever a package import is cancelled by the user. |
| importPackageCompleted | Callback raised whenever a package import successfully completes. |
| importPackageFailed | Callback raised whenever a package import failed. |
| importPackageStarted | Callback raised whenever a package import starts. |





### Delegates



| Delegate | Description |
| --- | --- |
| ImportPackageCallback | Delegate to be called from AssetDatabase.ImportPackage callbacks. packageName is the name of the package that raised the callback. |
| ImportPackageFailedCallback | Delegate to be called from AssetDatabase.ImportPackage callbacks. packageName is the name of the package that raised the callback. errorMessage is the reason for the failure. |


            

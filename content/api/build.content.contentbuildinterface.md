This version of Unity is unsupported.



# ContentBuildInterface





class in
          UnityEditor.Build.Content


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



Low level interface for building content for Unity.





Note: this class and its members exist to provide low-level support for the **Scriptable Build Pipeline** package. This is intended for internal use only; use the [Scriptable Build Pipeline package](https://docs.unity3d.com/Packages/com.unity.scriptablebuildpipeline@latest/index.html) to implement a fully featured build pipeline. You can install this via the [Unity Package Manager](https://docs.unity3d.com/Packages/com.unity.package-manager-ui@latest/index.html).





### Static Methods



| Method | Description |
| --- | --- |
| ArchiveAndCompress | Create a Unity archive file, containing the content of one or more resource files. |
| CalculateBuildUsageTags | Calculates the build usage of a set of objects. |
| CalculatePlayerDependenciesForGameManagers | Calculates dependency information for various internal Unity game manager classes. |
| CalculatePlayerDependenciesForScene | Calculates the Scene dependency information. |
| CalculatePlayerSerializationHashForType | Returns a unique hash for a given type's serialized layout. |
| GenerateAssetBundleBuilds | Returns an array of AssetBundleBuild structs that detail the current AssetBundle layout, as set through the Inspector and stored in the AssetDatabase. |
| GetGlobalUsageFromActiveScene | Gets information about the lighting and render settings in the active scene. |
| GetGlobalUsageFromGraphicsSettings | Returns the global usage information calculated by the Shader Stripping section of Graphics Settings. |
| GetPlayerAssetRepresentations | Returns a list of visible objects directly contained inside of an asset. |
| GetPlayerDependenciesForObject | Returns a list of objects referenced by an object. |
| GetPlayerDependenciesForObjects | Returns a list of objects referenced by a set of objects. |
| GetPlayerObjectIdentifiersInAsset | Returns a list of objects directly contained inside of an asset. |
| GetPlayerObjectIdentifiersInSerializedFile | Returns a list of objects directly contained inside of a loose serialized file. |
| GetTypeForObject | Returns the System.Type of the ObjectIdentifier specified by objectID. |
| GetTypeForObjects | Returns the System.Type of the ObjectIdentifiers and the referenced SerializeReference class types specified by objectIDs. |
| GetTypesForObject | Returns the System.Type of the ObjectIdentifier and the referenced SerializeReference class types specified by objectID. |
| ObjectIsSupportedInBuild | Returns True if the passed in target object is a valid runtime object. |
| StartProfileCapture | Starts a profile capture to record content build profile events. |
| StopProfileCapture | Returns an array of ContentBuildProfileEvent structs that contain information for each occuring event. Also stops the profile capture. |
| WriteGameManagersSerializedFile | Writes the current settings of internal Unity game manager classes to the 'globalgamemanagers' file on disk. |
| WriteSceneSerializedFile | Writes Scene objects to a serialized file on disk. |
| WriteSerializedFile | Writes objects to a serialized file on disk. |


            

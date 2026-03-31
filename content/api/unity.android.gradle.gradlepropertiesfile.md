This version of Unity is unsupported.



# GradlePropertiesFile





class in
          Unity.Android.Gradle



/



Inherits from:[Unity.Android.Gradle.BaseGradleFile](Unity.Android.Gradle.BaseGradleFile.html)


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



The C# definition of `gradle.properties` file.





For more information about the file, see Android's documentation: [Gradle properties files](https://developer.android.com/studio/build#properties-files)





### Properties



| Property | Description |
| --- | --- |
| JvmArgs | The C# definition of the org.gradle.jvmargs property. |
| Parallel | The C# definition of the org.gradle.parallel property. |
| UnityProjectPath | The C# definition of the unityProjectPath. Path to Unity project. |
| UnityRootPath | The C# definition of the unityRootPath. Path to Unity executable. |
| UnityStreamingAssets | The C# definition of the unityStreamingAssets. List of files that are provided as streaming assets and won't be compressed. |





### Constructors



| Constructor | Description |
| --- | --- |
| GradlePropertiesFile | File constructor. |





### Inherited Members








### Public Methods

| Method | Description |
| --- | --- |
| AddElement | Adds a new element as a child. |
| Clear | Clears the content of this element. |
| GetElement | Gets an element by ID. |
| GetElements | Gets all custom child elements. |
| GetName | Gets the name of the block. In some cases, the name is the signature of the function. |
| GetRaw | Gets the raw value of this block. |
| GetUniqueName | Gets the unique name of the element. |
| RemoveElement | Removes a child element by id. |
| SetRaw | Sets a raw string value to this block. |
| ToString | Gets a serialized value from this block. |
| AddElementDependencies | Adds a list of dependencies by ID to this element. |
| AddElementDependency | Adds a dependency to this element. |
| GetElementDependenciesIDs | Gets a read-only list of element IDs that this element depends on. |
| GetID | Gets the unique ID of this element. |
| Remove | Removes this element from the file. |
| RemoveAllElementDependencies | Remove all element dependencies. |
| RemoveElementDependency | Remove an element dependency. |
| RemoveElementDependencyById | Remove an element dependency by ID. |
| ResolveConflict | Resolve a conflict if another script has already modified the element. |








            

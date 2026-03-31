This version of Unity is unsupported.



# Manifest





class in
          Unity.Android.Gradle.Manifest



/



Inherits from:[Unity.Android.Gradle.Manifest.BaseElement](Unity.Android.Gradle.Manifest.BaseElement.html)


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



The C# definition of the `<manifest>` Android Manifest element.





For more information about the element, see Android's documentation: [Manifest element](https://developer.android.com/guide/topics/manifest/manifest-element)





### Properties



| Property | Description |
| --- | --- |
| Application | Child element <application>. |
| Attributes | The attributes container for the  <manifest>  element. |
| CompatibleScreens | Child element <compatible-screens>. |
| InstrumentationList | List of <instrumentation> child elements. |
| PermissionGroupList | List of <permission-group> child elements. |
| PermissionList | List of <permission> child elements. |
| PermissionTreeList | List of <permission-tree> child elements. |
| QueriesList | List of <queries> child elements. |
| SupportsGlTextureList | List of <supports-gl-texture> child elements. |
| SupportsScreens | Child element <supports-screens>. |
| UsesConfiguration | Child element <uses-configuration>. |
| UsesFeatureList | List of <uses-feature> child elements. |
| UsesPermissionList | List of <uses-permission> child elements. |
| UsesPermissionSdk23List | List of <uses-permission-sdk-23> child elements. |
| UsesSdk | Child element <uses-sdk>. |





### Constructors



| Constructor | Description |
| --- | --- |
| Manifest | Element constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| AddUsesFeature | Adds <uses-feature> element as a child. |
| AddUsesPermission | Adds <uses-permission> element as a child. |
| GetActivitiesWithLauncherIntent | Gets the <activity> elements that contain the LAUNCHER category in an <intent-filter> element. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| CustomElements | Custom child elements. |






### Public Methods

| Method | Description |
| --- | --- |
| AddCustomElement | Adds a new element as a child. |
| GetAllAttributes | Gets all attributes on this element. |
| GetCustomAttribute | Gets a custom attribute by attribute name. |
| GetID | Gets the unique ID of the element. |
| GetName | Gets the element name. |
| GetUniqueName | Gets a unique name of the element. |
| Remove | Removes this element from the file. |
| RemoveCustomAttribute | Removes a custom attribute by name. |
| ResolveConflict | Resolve a conflict if element was already modified by another script. |
| SetCustomAttribute | Sets a custom attribute with name and value. |








            

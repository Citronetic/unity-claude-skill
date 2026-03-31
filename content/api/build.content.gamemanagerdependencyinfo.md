This version of Unity is unsupported.



# GameManagerDependencyInfo





struct in
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



Contains dependency information for internal Unity game manager classes. Call [ContentBuildInterface.WriteGameManagersSerializedFile](Build.Content.ContentBuildInterface.WriteGameManagersSerializedFile.html) or [ContentBuildInterface.CalculatePlayerDependenciesForGameManagers](Build.Content.ContentBuildInterface.CalculatePlayerDependenciesForGameManagers.html) to get an instance of this class.





Note: this class and its members exist to provide low-level support for the **Scriptable Build Pipeline** package. This is intended for internal use only; use the [Scriptable Build Pipeline package](https://docs.unity3d.com/Packages/com.unity.scriptablebuildpipeline@latest/index.html) to implement a fully featured build pipeline. You can install this via the [Unity Package Manager](https://docs.unity3d.com/Packages/com.unity.package-manager-ui@latest/index.html).





### Properties



| Property | Description |
| --- | --- |
| includedTypes | The project-wide identifiers for the game manager classes referenced in this collection of dependency information. |
| managerObjects | The project-wide identifiers for the game manager classes referenced in this collection of dependency information. |
| referencedObjects | The project-wide identifiers for any objects referenced by the manager classes in the managerObjects list. |


            

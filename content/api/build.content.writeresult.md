This version of Unity is unsupported.



# WriteResult





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



Struct containing the results from the ContentBuildPipeline.WriteSerialziedFile and ContentBuildPipeline.WriteSceneSerialziedFile APIs.





Note: this struct and its members exist to provide low-level support for the **Scriptable Build Pipeline** package. This is intended for internal use only; use the [Scriptable Build Pipeline package](https://docs.unity3d.com/Packages/com.unity.scriptablebuildpipeline@latest/index.html) to implement a fully featured build pipeline. You can install this via the [Unity Package Manager](https://docs.unity3d.com/Packages/com.unity.package-manager-ui@latest/index.html).





### Properties



| Property | Description |
| --- | --- |
| externalFileReferences | The collection of externally referenced files. |
| includedSerializeReferenceFQN | SerializeReference instances fully qualified name which were included in the serialized file. |
| includedTypes | Types that were included in the serialized file. |
| resourceFiles | Collection of files written by the ContentBuildInterface.WriteSerializedFile or ContentBuildInterface.WriteSceneSerializedFile APIs. |
| serializedObjects | Collection of objects written to the serialized file. |


            

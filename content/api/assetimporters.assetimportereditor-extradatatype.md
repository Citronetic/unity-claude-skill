This version of Unity is unsupported.



# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).extraDataType




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












                    protected Type extraDataType;






### Description



Override this property to return a type that inherits from ScriptableObject. This makes the AssetImporterEditor aware of serialized data outside of the Importer.





When returning a type that inherits from ScriptableObject, the AssetImporterEditor creates an instance of this type for each [Editor.targets](Editor-targets.html) during Inspector initialization..
This should only be used when you want to manage data outside the ScriptedImporter serialization. See the main [AssetImporterEditor](AssetImporters.AssetImporterEditor.html) page for an example.


            

This version of Unity is unsupported.



# ModelImporterTangents





enumeration


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



Vertex tangent generation options for [ModelImporter](ModelImporter.html).





Tangentss can either be imported from model file, calculated by Unity using several methods (default is MikkTSpace), or not included into imported mesh at all. Vertex tangents are most often used for normal/bump mapping.

Additional resources: [ModelImporter.importTangents](ModelImporter-importTangents.html), [ModelImporterNormals](ModelImporterNormals.html), [Mesh.tangents](Mesh-tangents.html).





### Properties



| Property | Description |
| --- | --- |
| Import | Import vertex tangents from model file. |
| CalculateLegacy | Calculate tangents with legacy algorithm. |
| CalculateLegacyWithSplitTangents | Calculate tangents with legacy algorithm, with splits across UV charts. |
| CalculateMikk | Calculate tangents using MikkTSpace (default). |
| None | Do not import vertex tangents. |


            

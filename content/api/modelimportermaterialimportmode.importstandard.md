This version of Unity is unsupported.



# [ModelImporterMaterialImportMode](ModelImporterMaterialImportMode.html).ImportStandard




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



The model importer imports materials in standard mode using OnPostprocessMaterial callback.





When selected, the model importer generates and populates materials by applying a set of simple default rules.
The ModelImporter will also invoke AssetPostprocessor.OnPostprocessMaterial with each created material.
Note: This is the only option where OnPostprocessMaterial is called.


            

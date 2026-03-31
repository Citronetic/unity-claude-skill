This version of Unity is unsupported.



# [ScriptedImporterAttribute](AssetImporters.ScriptedImporterAttribute.html).overrideFileExtensions




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












                    public string[] overrideFileExtensions;






### Description



List of file name extensions (not including the leading period character) that the scripted importer can handle in addition to the default file name extension(s).





This Importer is registered as a Override Importer candidate for all files with an extensions included in this list.
Casing is ignored. "EXT" is equivalent to "ext" and registers the Default Importer on files with "EXT" or "ext" extensions.
All extensions already listed in the fileExtensions property are ignored.
Use AssetDatabase.GetAvailableImporterOverrides to get a list of available Importers for a specific asset.
The active Importer for a given asset can be set by (a) selecting the importer from the **Importer** drop-down menu in the **AssetImporter** Inspector; or (b) via scripting with the [AssetDatabase.SetImporterOverride](AssetDatabase.SetImporterOverride.html) method.


            

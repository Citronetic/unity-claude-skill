This version of Unity is unsupported.



# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).useAssetDrawPreview




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












                    protected bool useAssetDrawPreview;






### Description



Determines if the asset preview is handled by the AssetEditor or the Importer DrawPreview





We usually want to redirect the DrawPreview to the AssetEditor, but there are few cases we don't want that. If you want to use the Importer DrawPreview, then override useAssetDrawPreview to false.


            

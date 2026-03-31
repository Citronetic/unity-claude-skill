This version of Unity is unsupported.



# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).InitializeExtraDataInstance




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















## Declaration

protected void InitializeExtraDataInstance([Object](Object.html) extraData,
int targetIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| extraData | A ScriptableObject instance of the type provided by AssetImporterEditor.extraDataType. |
| targetIndex | The corresponding Editor.targets index of the provided extraData. |





### Description



This method is called during the initialization process of the Editor, after Awake and before OnEnable.





If the AssetImporterEditor have the [CanEditMultipleObjects](CanEditMultipleObjects.html) attribute and more than one Importer is selected, this method will be called once for each [extraDataTargets](AssetImporters.AssetImporterEditor-extraDataTargets.html) using targetIndex to find the corresponding [Editor.targets](Editor-targets.html) Importer.

Note: Assembly reloading or external changes made to the inspected file in the Editor may trigger this method outside of the initialization loop.
However, you should always reset your data in the given object when it gets called to make sure you stay up to date with the asset file.

See a usage example at [AssetImporterEditor.extraDataType](AssetImporters.AssetImporterEditor-extraDataType.html).


            

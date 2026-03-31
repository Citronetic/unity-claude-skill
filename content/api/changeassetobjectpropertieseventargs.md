This version of Unity is unsupported.



# ChangeAssetObjectPropertiesEventArgs





struct in
          UnityEditor


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



A change of this type indicates that a property of an asset object in memory has changed. This happens for example when [Undo.RecordObject](Undo.RecordObject.html) is used with an instance of an asset (e.g. [Texture](Texture.html)). Note that this only covers changes to asset objects in memory and not changes to assets in the project on disk.





### Properties



| Property | Description |
| --- | --- |
| guid | The GUID of the changed asset. |
| instanceId | The instance ID of the modified asset. |
| scene | The Scene that contains the modified asset. This is usually an invalid scene unless the asset is explicitly associated in a scene (e.g. RenderSettings). |





### Constructors



| Constructor | Description |
| --- | --- |
| ChangeAssetObjectPropertiesEventArgs | Constructs a new instance. |


            

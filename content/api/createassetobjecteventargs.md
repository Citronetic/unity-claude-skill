This version of Unity is unsupported.



# CreateAssetObjectEventArgs





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



A change of this type indicates that an asset object has been created. This happens for example when [Undo.RegisterCreatedObjectUndo](Undo.RegisterCreatedObjectUndo.html) is used with an instance of an asset (e.g. [Texture](Texture.html)). Note that this only covers creation of asset objects in memory and not creation of new assets in the project on disk.





### Properties



| Property | Description |
| --- | --- |
| guid | The GUID of the new asset. |
| instanceId | The instance ID of the modified asset. |
| scene | The Scene that contains the new asset. This is usually an invalid scene unless the asset is explicitly associated in a scene (e.g. RenderSettings). |





### Constructors



| Constructor | Description |
| --- | --- |
| CreateAssetObjectEventArgs | Constructs a new instance. |


            

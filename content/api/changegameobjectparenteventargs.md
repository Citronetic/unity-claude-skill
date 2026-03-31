This version of Unity is unsupported.



# ChangeGameObjectParentEventArgs





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



A change of this type indicates that the parent of a [GameObject](GameObject.html) has changed. This happens when [Undo.SetTransformParent](Undo.SetTransformParent.html) or [SceneManager.MoveGameObjectToScene](SceneManagement.SceneManager.MoveGameObjectToScene.html) is used.





### Properties



| Property | Description |
| --- | --- |
| instanceId | The instance ID of the GameObject whose parent changed. Note that this is not the instance ID of the Transform component. |
| newParentInstanceId | The instance ID of the GameObject that is the new parent of the target. Note that this is not the instance ID of its Transform. |
| newScene | The Scene containing the new parent. This is useful to detect whether a GameObject was moved to another scene or moved to the root of a scene. |
| previousParentInstanceId | The instance ID of the GameObject that was the previous parent of the target. Note that this is not the instance ID of its Transform. |
| previousScene | The scene containing the previous parent. This is useful to detect whether a GameObject was moved to another scene. |





### Constructors



| Constructor | Description |
| --- | --- |
| ChangeGameObjectParentEventArgs | Constructs a new instance. |


            

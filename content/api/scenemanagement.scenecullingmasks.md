This version of Unity is unsupported.



# SceneCullingMasks





class in
          UnityEditor.SceneManagement


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



Masks that control what kind of Scene views and Game views Unity should render a GameObject in.





You can set masks on Scenes via [EditorSceneManager.SetSceneCullingMask](SceneManagement.EditorSceneManager.SetSceneCullingMask.html) and on render batches via [BatchRendererGroup.AddBatch](Rendering.BatchRendererGroup.AddBatch.html).





### Static Properties



| Property | Description |
| --- | --- |
| DefaultSceneCullingMask | Specifies the default culling mask for a Scene.  Use the bits from this Scene culling mask for objects that you want to render in both in the Game view and the Scene view. |
| GameViewObjects | The bits from this mask specify GameObjects that Unity should render in Game view. |
| MainStageSceneViewObjects | The bits from this mask specify GameObjects that Unity should render in Scene views showing the main stage. |


            

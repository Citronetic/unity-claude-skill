This version of Unity is unsupported.



# RenderPipelineEditorUtility





class in
          UnityEditor.Rendering


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



Helper class that contains a utility function on ScriptableRenderPipeline for Editor.





### Static Properties



| Property | Description |
| --- | --- |
| onRenderingLayerCountChanged | An event triggered when the count of defined rendering layers changes. |





### Static Methods



| Method | Description |
| --- | --- |
| GetDerivedTypesSupportedOnCurrentPipeline | Returns the types that're children of T and have a SupportedOnRenderPipelineAttribute corresponding to the render pipeline you're using. Order of the return types is arbitrary. |
| GetPipelineTypeFromPipelineAssetType | Given a RenderPipelineAsset type, returns the corresponding RenderPipeline type. |
| TryAddRenderingLayerName | Add a new Layer to Rendering Layers in the Tags and Layers manager. |
| TryRemoveLastRenderingLayerName | Remove a last Layer to Rendering Layers in the Tags and Layers manager. The default Rendering Layer cannot be removed. |
| TrySetRenderingLayerName | Give a possibility to change a Rendering Layer name. |


            

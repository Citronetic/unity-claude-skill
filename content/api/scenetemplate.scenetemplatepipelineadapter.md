This version of Unity is unsupported.



# SceneTemplatePipelineAdapter





class in
          UnityEditor.SceneTemplate


                  Leave feedback





Implements interfaces:[ISceneTemplatePipeline](SceneTemplate.ISceneTemplatePipeline.html)




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



An adapter that implements all the functions of ISceneTemplatePipeline for easier usage. Use it to partially override a [ISceneTemplatePipeline](SceneTemplate.ISceneTemplatePipeline.html).





### Public Methods



| Method | Description |
| --- | --- |
| AfterTemplateInstantiation | An event called after the Scene template is instantiated, and while the new Scene is still loaded. |
| BeforeTemplateInstantiation | An event called before the Scene template is instantiated. |
| IsValidTemplateForInstantiation | An event called before the New Scene dialog is displayed to determine whether this template is available in the dialog. |


            

This version of Unity is unsupported.



# [ISceneTemplatePipeline](SceneTemplate.ISceneTemplatePipeline.html).IsValidTemplateForInstantiation




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

public bool IsValidTemplateForInstantiation([SceneTemplate.SceneTemplateAsset](SceneTemplate.SceneTemplateAsset.html) sceneTemplateAsset);






### Parameters



| Parameter | Description |
| --- | --- |
| sceneTemplateAsset | A Scene Template asset that is available in New Scene dialog. |





### Returns



**bool**
        True if the Scene template can be instantiated. False otherwise.





### Description



An event called before the New Scene dialog is displayed to determine whether this template is available in the dialog.


            

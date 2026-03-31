This version of Unity is unsupported.



# [SceneTemplateService](SceneTemplate.SceneTemplateService.html).NewTemplateInstantiating




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

public delegate void NewTemplateInstantiating([SceneTemplate.SceneTemplateAsset](SceneTemplate.SceneTemplateAsset.html) sceneTemplateAsset,
string newSceneOutputPath,
bool additiveLoad);






### Parameters



| Parameter | Description |
| --- | --- |
| sceneTemplateAsset | The Scene template to instantiate. |
| newSceneOutputPath | The output path for the new Scene. This can be empty if the scene is created in memory. |
| additiveLoad | Specifies whether to instantiate the Scene template in additive mode. |





### Description



An event called before a Scene template is instantiated.


            

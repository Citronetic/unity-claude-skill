This version of Unity is unsupported.



# [SceneTemplateService](SceneTemplate.SceneTemplateService.html).NewTemplateInstantiated




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

public delegate void NewTemplateInstantiated([SceneTemplate.SceneTemplateAsset](SceneTemplate.SceneTemplateAsset.html) sceneTemplateAsset,
[SceneManagement.Scene](SceneManagement.Scene.html) scene,
[SceneAsset](SceneAsset.html) sceneAsset,
bool additiveLoad);






### Parameters



| Parameter | Description |
| --- | --- |
| sceneTemplateAsset | The Scene template that was instantiated. |
| scene | The template Scene that was instantiated. |
| sceneAsset | The new Scene Asset created by instantiating the Scene template. |
| additiveLoad | Specifies whether the template was instantiated in additive mode. |





### Description



An event called after a Scene template is instantiated.


            

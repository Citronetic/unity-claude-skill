This version of Unity is unsupported.



# [SceneTemplateService](SceneTemplate.SceneTemplateService.html).CreateTemplateFromScene




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

public static [SceneTemplate.SceneTemplateAsset](SceneTemplate.SceneTemplateAsset.html) CreateTemplateFromScene([SceneAsset](SceneAsset.html) sourceSceneAsset,
string sceneTemplatePath);






### Parameters



| Parameter | Description |
| --- | --- |
| sourceSceneAsset | The Scene Asset that serves as the template. |
| sceneTemplatePath | The path to the new Scene template asset. |





### Returns



**SceneTemplateAsset**
        A new Scene template Asset instance.





### Description



Creates a new Scene template bound to a specific Scene. All of the template Scene's dependencies are extracted and set to be referenced.


            

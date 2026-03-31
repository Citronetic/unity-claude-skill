This version of Unity is unsupported.



# SceneTemplateService





class in
          UnityEditor.SceneTemplate


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



A utility class that manages [SceneTemplateAsset](SceneTemplate.SceneTemplateAsset.html) instantiation.





### Static Methods



| Method | Description |
| --- | --- |
| CreateSceneTemplate | Creates a new Scene template at a specific path. The template is not bound to a Scene. |
| CreateTemplateFromScene | Creates a new Scene template bound to a specific Scene. All of the template Scene's dependencies are extracted and set to be referenced. |
| Instantiate | Instantiates a new Scene from a template. |





### Events



| Event | Description |
| --- | --- |
| newSceneTemplateInstantiated | Events fired after a Scene template is instantiated. |
| newSceneTemplateInstantiating | Events fired before a Scene template is instantiated. |





### Delegates



| Delegate | Description |
| --- | --- |
| NewTemplateInstantiated | An event called after a Scene template is instantiated. |
| NewTemplateInstantiating | An event called before a Scene template is instantiated. |


            

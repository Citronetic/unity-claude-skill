This version of Unity is unsupported.



# LocalPhysicsMode





enumeration


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



Provides options for 2D and 3D local physics.





By default, when a [Scene](SceneManagement.Scene.html) is created or loaded, any 2D or 3D physics component added to a GameObject within the Scene is added to the default physics Scene.  Each [Scene](SceneManagement.Scene.html) however has the ability to create and own its own (local) 2D and/or 3D physics Scene.  This option can be used when creating or loading a Scene to specify whether a 2D and/or 3D physics Scene should be created.

When a [Scene](SceneManagement.Scene.html) creates its own 2D and/or 3D physics Scene, the lifetime of the physics Scene(s) is the same as the [Scene](SceneManagement.Scene.html) i.e. if the [Scene](SceneManagement.Scene.html) is destroyed/unloaded then so are any created physics Scenes.

Additional resources: [CreateSceneParameters](SceneManagement.CreateSceneParameters.html), [LoadSceneParameters](SceneManagement.LoadSceneParameters.html),  [SceneManager.CreateScene](SceneManagement.SceneManager.CreateScene.html), [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html) and [SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html).





### Properties



| Property | Description |
| --- | --- |
| None | No local 2D or 3D physics Scene will be created. |
| Physics2D | A local 2D physics Scene will be created and owned by the Scene. |
| Physics3D | A local 3D physics Scene will be created and owned by the Scene. |


            

This version of Unity is unsupported.



# [PhysicsSceneExtensions](PhysicsSceneExtensions.html).GetPhysicsScene




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

public static [PhysicsScene](PhysicsScene.html) GetPhysicsScene([SceneManagement.Scene](SceneManagement.Scene.html) scene);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The Scene from which to return the 3D physics Scene. |





### Returns



**PhysicsScene**
        The 3D physics Scene used by the Scene.





### Description



An extension method that returns the 3D physics Scene from the Scene.





Returns the [PhysicsScene](PhysicsScene.html) that is assigned to the selected [Scene](SceneManagement.Scene.html). The [Scene](SceneManagement.Scene.html) may have created its own local 3D physics Scene in which case this provides access to that. Alternately the [Scene](SceneManagement.Scene.html) may be using the default 3D physics Scene ([Physics.defaultPhysicsScene](Physics-defaultPhysicsScene.html)) in which case that will be returned instead.

Additional resources: [PhysicsScene](PhysicsScene.html) and [Scene](SceneManagement.Scene.html).


            

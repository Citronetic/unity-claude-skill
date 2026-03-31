This version of Unity is unsupported.



# [LightProbes](LightProbes.html).GetSharedLightProbesForScene




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

public static [LightProbes](LightProbes.html) GetSharedLightProbesForScene([SceneManagement.Scene](SceneManagement.Scene.html) scene);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The scene to get the shared light probe data for. |





### Returns



**LightProbes**
        The shared light probe data for the scene.





### Description



Gets the shared `LightProbes` object for a specific scene.





Unless you need to modify an asset, it's not recommended to modify a `LightProbes` object returned by this method. You may affect all currently loaded versions of the scene, or change the light probe data stored in Lighting Data assets.

Use [LightProbes.GetInstantiatedLightProbesForScene](LightProbes.GetInstantiatedLightProbesForScene.html) instead.

Additional resources: [LightProbes.GetInstantiatedLightProbesForScene](LightProbes.GetInstantiatedLightProbesForScene.html).


            

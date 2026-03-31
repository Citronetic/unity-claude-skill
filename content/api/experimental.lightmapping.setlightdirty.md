This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [Lightmapping](Experimental.Lightmapping.html).SetLightDirty




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

public static void SetLightDirty([Light](Light.html) light);






### Parameters



| Parameter | Description |
| --- | --- |
| light | The light to set as dirty. |





### Description



Manually sets a light as dirty.





Use this method to extend the Editor's capabilities so that it can track changes to Additional Light Data components which Scriptable Render Pipelines such as URP and HDRP attach to Lights. If you do not call this method, the Editor is not aware of these Additional Light Data components. Also see the documentation for Experimental.GlobalIllumination.Lightmapping.RequestLightsDelegate, which is the method the Editor uses to track all changes to lights, including those for Built-In Render Pipeline components.


            

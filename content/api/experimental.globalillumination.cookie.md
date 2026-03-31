This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# Cookie





struct in
          UnityEngine.Experimental.GlobalIllumination



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



A helper structure used to initialize a LightDataGI structure with cookie information.





### Properties



| Property | Description |
| --- | --- |
| instanceID | The cookie texture's instance id projected by the light. |
| scale | The uniform scale factor for downscaling cookies during lightmapping. Can be used as an optimization when full resolution cookies are not needed for indirect lighting. |
| sizes | The scale factors controlling how the directional light's cookie is projected into the scene. This parameter should be set to 1 for all other light types. |





### Static Methods



| Method | Description |
| --- | --- |
| Defaults | Returns a default initialized cookie helper struct. |


            

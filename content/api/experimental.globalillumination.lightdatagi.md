This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# LightDataGI





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



The interop structure to pass light information to the light baking backends. There are helper structures for Directional, Point, Spot and Rectangle lights to correctly initialize this structure.





### Properties



| Property | Description |
| --- | --- |
| color | The color of the light. |
| coneAngle | The cone angle for spot lights. |
| cookieID | The cookie texture's instance id projected by the light. |
| cookieScale | The uniform scale factor for downscaling cookies during lightmapping. Can be used as an optimization when full resolution cookies are not needed for indirect lighting. |
| falloff | The falloff model to use for baking point and spot lights. |
| indirectColor | The indirect color of the light. |
| innerConeAngle | The inner cone angle for spot lights. |
| instanceID | The light's instanceID. |
| mode | The lightmap mode for the light. |
| orientation | The orientation of the light. |
| position | The position of the light. |
| range | The range of the light. Unused for directional lights. |
| shadow | Set to 1 for shadow casting lights, 0 otherwise. |
| shape0 | The light's sphere radius for point and spot lights, or the width for rectangle lights. |
| shape1 | The height for rectangle lights. |
| type | The type of the light. |





### Public Methods



| Method | Description |
| --- | --- |
| Init | Initialize the struct with the parameters from the given light type. |
| InitNoBake | Initialize a light so that the baking backends ignore it. |


            

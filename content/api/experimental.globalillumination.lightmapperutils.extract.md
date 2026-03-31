This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [LightmapperUtils](Experimental.GlobalIllumination.LightmapperUtils.html).Extract




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

public static [Experimental.GlobalIllumination.LightMode](Experimental.GlobalIllumination.LightMode.html) Extract([LightmapBakeType](LightmapBakeType.html) baketype);






### Parameters



| Parameter | Description |
| --- | --- |
| baketype | The lights baketype. |





### Returns



**LightMode**
        Returns the light's light mode.





### Description



Extracts informations from Lights.




---








## Declaration

public static void Extract([Light](Light.html) l,
ref [Experimental.GlobalIllumination.DirectionalLight](Experimental.GlobalIllumination.DirectionalLight.html) dir);






## Declaration

public static void Extract([Light](Light.html) l,
ref [Experimental.GlobalIllumination.PointLight](Experimental.GlobalIllumination.PointLight.html) point);






## Declaration

public static void Extract([Light](Light.html) l,
ref [Experimental.GlobalIllumination.SpotLight](Experimental.GlobalIllumination.SpotLight.html) spot);






## Declaration

public static void Extract([Light](Light.html) l,
ref [Experimental.GlobalIllumination.RectangleLight](Experimental.GlobalIllumination.RectangleLight.html) rect);






### Parameters



| Parameter | Description |
| --- | --- |
| l | The input light. |
| dir | Extracts directional light information. |
| point | Extracts point light information. |
| spot | Extracts spot light information. |
| rect | Extracts rectangle light information. |





### Description



Extract type specific information from Lights.


            

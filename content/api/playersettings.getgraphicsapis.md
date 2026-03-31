This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetGraphicsAPIs




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)










## Declaration

public static GraphicsDeviceType[] GetGraphicsAPIs([BuildTarget](BuildTarget.html) platform);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | Platform to get APIs for. |





### Returns



**GraphicsDeviceType[]**
        Array of graphics APIs.





### Description



Get graphics APIs to be used on a build platform.





By default each platform is using "automatic" graphics API detection and picks the best available one (see [GetUseDefaultGraphicsAPIs](PlayerSettings.GetUseDefaultGraphicsAPIs.html)). However it is possible to change that to explicitly limit the graphics APIs used via [SetGraphicsAPIs](PlayerSettings.SetGraphicsAPIs.html).

Additional resources: [SetGraphicsAPIs](PlayerSettings.SetGraphicsAPIs.html), [SetUseDefaultGraphicsAPIs](PlayerSettings.SetUseDefaultGraphicsAPIs.html), [GetUseDefaultGraphicsAPIs](PlayerSettings.GetUseDefaultGraphicsAPIs.html).


            

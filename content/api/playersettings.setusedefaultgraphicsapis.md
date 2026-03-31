This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetUseDefaultGraphicsAPIs




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

public static void SetUseDefaultGraphicsAPIs([BuildTarget](BuildTarget.html) platform,
bool automatic);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | Platform to set the flag for. |
| automatic | Should best available graphics API be used? |





### Description



Should a build platform use automatic graphics API choice.





By default each platform is using "automatic" graphics API detection and picks the best available one. However it is possible to change that to explicitly limit the graphics APIs used, see [SetGraphicsAPIs](PlayerSettings.SetGraphicsAPIs.html).

Additional resources: [GetUseDefaultGraphicsAPIs](PlayerSettings.GetUseDefaultGraphicsAPIs.html), [GetGraphicsAPIs](PlayerSettings.GetGraphicsAPIs.html), [SetGraphicsAPIs](PlayerSettings.SetGraphicsAPIs.html).


            

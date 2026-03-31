This version of Unity is unsupported.



# FSR2CommandInitializationData





struct in
          UnityEngine.AMD



/



Implemented in:[UnityEngine.AMDModule](UnityEngine.AMDModule.html)


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



Represents the initialization state of a [FSR2Context](AMD.FSR2Context.html). You can only use and set this when calling [GraphicsDevice.CreateFeature](AMD.GraphicsDevice.CreateFeature.html).





### Properties



| Property | Description |
| --- | --- |
| displaySizeHeight | The height of the presentation resolution targeted by the upscaling process. |
| displaySizeWidth | The width of the presentation resolution targeted by the upscaling process. |
| ffxFsrFlags | Initialization flags. Additional resources: FfxFsr2InitializationFlags. |
| maxRenderSizeHeight | The maximum height that rendering will be performed at. |
| maxRenderSizeWidth | The maximum width that rendering will be performed at. |





### Public Methods



| Method | Description |
| --- | --- |
| GetFlag | Helper function. Identifies whether an initialization flag is set or unset. See Also: FfxFsr2InitializationFlags. |
| SetFlag | Helper function. Controls the initialization feature flags set. See Also: FfxFsr2InitializationFlags. |


            

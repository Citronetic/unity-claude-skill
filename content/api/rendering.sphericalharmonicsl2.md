This version of Unity is unsupported.



# SphericalHarmonicsL2





struct in
          UnityEngine.Rendering



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



Spherical harmonics up to the second order (3 bands, 9 coefficients).





Spherical harmonics (SH) represent a function or signal over directions, and are commonly used in computer graphics to efficiently evaluate smooth lighting. Unity uses them for [LightProbes](LightProbes.html) and environment lighting.

L2 spherical harmonics is composed of 9 coefficients for each color channel.

Additional resources: [RenderSettings.ambientMode](RenderSettings-ambientMode.html), [RenderSettings.ambientProbe](RenderSettings-ambientProbe.html), [LightProbes](LightProbes.html).





### Properties



| Property | Description |
| --- | --- |
| this[int,int] | Access individual SH coefficients. |





### Public Methods



| Method | Description |
| --- | --- |
| AddAmbientLight | Add an ambient light to the spherical harmonics. |
| AddDirectionalLight | Add a directional light to the spherical harmonics. |
| Clear | Clears the spherical harmonics coefficients to zero. |
| Evaluate | Evaluates the spherical harmonics for each given direction. The directions and results arrays must have the same size. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | Returns true if the spherical harmonics are different. |
| operator * | Scales SH by a given factor. |
| operator + | Adds two spherical harmonics. |
| operator == | Returns true if the spherical harmonics are equal. |


            

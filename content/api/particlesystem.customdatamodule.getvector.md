This version of Unity is unsupported.



# [ParticleSystem.CustomDataModule](ParticleSystem.CustomDataModule.html).GetVector




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




                [Switch to Manual](../Manual/class-ParticleSystem.html)










## Declaration

public [ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) GetVector([ParticleSystemCustomData](ParticleSystemCustomData.html) stream,
int component);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The name of the custom data stream to retrieve the curve from. |
| component | The component index to retrieve the curve for (0-3, mapping to the xyzw components of a Vector4 or float4). |





### Returns



**MinMaxCurve**
        The curve being used to generate custom data.





### Description



Get a [MinMaxCurve](ParticleSystem.MinMaxCurve.html), that is being used to generate custom data.





Additional resources: [ParticleSystem.CustomDataModule.SetVector](ParticleSystem.CustomDataModule.SetVector.html), [ParticleSystem.GetCustomParticleData](ParticleSystem.GetCustomParticleData.html).


            

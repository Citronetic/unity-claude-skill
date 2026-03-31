This version of Unity is unsupported.



# [ParticleSystem.MinMaxGradient](ParticleSystem.MinMaxGradient.html).Evaluate




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

public [Color](Color.html) Evaluate(float time);






## Declaration

public [Color](Color.html) Evaluate(float time,
float lerpFactor);






### Parameters



| Parameter | Description |
| --- | --- |
| time | Normalized time (in the range 0 - 1, where 1 represents 100%) at which to evaluate the gradient. This is valid when ParticleSystem.MinMaxGradient.mode is set to ParticleSystemGradientMode.Gradient or ParticleSystemGradientMode.TwoGradients. |
| lerpFactor | Blend between the two gradients/colors (Valid when ParticleSystem.MinMaxGradient.mode is set to ParticleSystemGradientMode.TwoColors or ParticleSystemGradientMode.TwoGradients). |





### Returns



**Color**
        Calculated gradient/color value.





### Description



Manually query the gradient to calculate colors based on what mode it is in.





This automatically clamps the time and lerpFactor properties between 0 and 1.


            

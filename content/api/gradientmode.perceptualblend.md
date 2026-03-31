This version of Unity is unsupported.



# [GradientMode](GradientMode.html).PerceptualBlend




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



Linearly interpolate between the gradient keys, using a perceptual color space for colors.





This mode finds the two keys adjacent to the requested evaluation time, and interpolates between them.

Color keys are interpolated using a perceptual "[Oklab](https://bottosson.github.io/posts/oklab/)" color space, which often
produces more visually pleasing results than a simple [GradientMode.Blend](GradientMode.Blend.html) interpolation. It is slightly more expensive
to calculate than the simple blend mode though.

Additional resources: [Gradient.mode](Gradient-mode.html), [Gradient.Evaluate](Gradient.Evaluate.html), [Gradient.colorSpace](Gradient-colorSpace.html).


            

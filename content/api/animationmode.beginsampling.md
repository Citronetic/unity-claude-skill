This version of Unity is unsupported.



# [AnimationMode](AnimationMode.html).BeginSampling




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

public static void BeginSampling();






### Description



Initialise the start of the animation clip sampling.





[BeginSampling](AnimationMode.BeginSampling.html) arranges for the ::SampleAnimationClip to
          operate correctly.  Not calling [BeginSampling](AnimationMode.BeginSampling.html) prevents the animation
          data to be sampled.  This function must be called immediately before the
          [SampleAnimationClip](AnimationMode.SampleAnimationClip.html) is called.  See the script example on the [AnimationMode](AnimationMode.html)
          page to see this behaviour.


            

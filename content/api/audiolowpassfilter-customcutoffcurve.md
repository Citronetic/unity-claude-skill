This version of Unity is unsupported.



# [AudioLowPassFilter](AudioLowPassFilter.html).customCutoffCurve




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




                [Switch to Manual](../Manual/class-AudioLowPassFilter.html)







                    public [AnimationCurve](AnimationCurve.html) customCutoffCurve;






### Description



Returns or sets the current custom frequency cutoff curve.





The curve will be scaled so that it is applied over [AudioSource.maxDistance](AudioSource-maxDistance.html) from the AudioSource.

Note that if there is no curve set, or [AudioLowPassFilter.cutoffFrequency](AudioLowPassFilter-cutoffFrequency.html) has been set, a single key AnimationCurve will be returned corresponding to the current cutoff frequency.

Setting the curve will result in the internal AnimationCurve to be rescaled to range from 0..1 for performance reasons. This means calling [AudioLowPassFilter.customCutoffCurve](AudioLowPassFilter-customCutoffCurve.html) will return a potentially different curve to what was just set.


            

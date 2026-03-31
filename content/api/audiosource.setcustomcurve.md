This version of Unity is unsupported.



# [AudioSource](AudioSource.html).SetCustomCurve




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




                [Switch to Manual](../Manual/class-AudioSource.html)










## Declaration

public void SetCustomCurve([AudioSourceCurveType](AudioSourceCurveType.html) type,
[AnimationCurve](AnimationCurve.html) curve);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The curve type that should be set. |
| curve | The curve that should be applied to the given curve type. |





### Description



Set the custom curve for the given AudioSourceCurveType.





The curve will be scaled so that it is applied over [AudioSource.maxDistance](AudioSource-maxDistance.html) from the AudioSource.

Note that the internal AnimationCurve to be rescaled to range from 0..1 for performance reasons. This means calling [AudioSource.GetCustomCurve](AudioSource.GetCustomCurve.html) will return a potentially different curve to what was just set.


            

This version of Unity is unsupported.



# [Light](Light.html).dilatedRange




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




                [Switch to Manual](../Manual/class-Light.html)







                    public float dilatedRange;






### Description



The maximum distance the emitted light might travel from the position of the light. This property does not apply to directional lights.





The intensity might fall off to zero before the light reaches this distance.

For non-area lights, the [Light.dilatedRange](Light-dilatedRange.html) property and the [Light.range](Light-range.html) property return the same value. For area lights, [Light.dilatedRange](Light-dilatedRange.html) is larger than [Light.range](Light-range.html) as it takes the size of the area light into account.


            

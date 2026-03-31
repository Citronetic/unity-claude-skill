This version of Unity is unsupported.



# [Gradient](Gradient.html).SetAlphaKeys




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

public void SetAlphaKeys(ReadOnlySpan<GradientAlphaKey> keys);






### Parameters



| Parameter | Description |
| --- | --- |
| keys | Array of alpha keys. |





### Description



Setup gradient with an array of alpha keys.





Note that the alpha keys will be automatically sorted by time value and that it is ensured to always have a minimum of 2 alpha keys.


            

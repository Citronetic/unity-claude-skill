This version of Unity is unsupported.



# [PlayableExtensions](Playables.PlayableExtensions.html).SetLeadTime




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

public static void SetLeadTime(U playable,
float value);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |
| value | The new lead time in seconds. |





### Description



Sets the [Playable](Playables.Playable.html) lead time in seconds.





`PrepareData()` is called when the lead time is greater than the [Playable](Playables.Playable.html) delay.

Additional resources: [GetLeadTime](Playables.PlayableExtensions.GetLeadTime.html), [SetDelay](Playables.PlayableExtensions.SetDelay.html).

Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            

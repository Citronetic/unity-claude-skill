This version of Unity is unsupported.


                  **Method group is Obsolete**





# [PlayableExtensions](Playables.PlayableExtensions.html).SetDelay




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













                        **Obsolete**
                        SetDelay is obsolete; use a custom ScriptPlayable to implement this feature.




## Declaration

public static void SetDelay(U playable,
double delay);






### Parameters



| Parameter | Description |
| --- | --- |
| playable | The Playable used by this operation. |
| delay | The delay in seconds. |





### Description



Set a delay until the playable starts.





The delay is **not** multiplied by the speed of the playable because it happens before the playable starts.

Use this templated extension method on any type that inherits from [IPlayable](Playables.IPlayable.html).


            

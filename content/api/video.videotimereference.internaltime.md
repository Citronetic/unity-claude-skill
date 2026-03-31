This version of Unity is unsupported.



# [VideoTimeReference](Video.VideoTimeReference.html).InternalTime




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



The internal reference clock the [VideoPlayer](Video.VideoPlayer.html) observes to detect and correct drift.





The VideoPlayer relies on its own internal clock to manage the timing and playback of the video. Unity uses [Time.realtimeSinceStartup](Time-realtimeSinceStartup.html) as a point of reference to detect and correct any drift during playback.

This timing is separate from Unity’s global time or any system time references. This means that if you pause or change the application's [Time.timeScale](Time-timeScale.html), the video will continue to play as normal.


            

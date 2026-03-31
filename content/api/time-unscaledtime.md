This version of Unity is unsupported.



# [Time](Time.html).unscaledTime




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












                    public static float unscaledTime;






### Description



The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game.





When called from inside MonoBehaviour's [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html), it returns [Time.fixedUnscaledTime](Time-fixedUnscaledTime.html).

                Unlike [Time.realtimeSinceStartup](Time-realtimeSinceStartup.html), this returns the same value if called multiple times in a single frame and when the Editor is paused.
                Unlike [Time.time](Time-time.html) this value is not affected by [Time.timeScale](Time-timeScale.html) and [Time.maximumDeltaTime](Time-maximumDeltaTime.html).

See [Time and Frame Rate Management](../Manual/managing-time-and-frame-rate.html) in the User Manual for more information about how this property relates to the other Time properties.


            

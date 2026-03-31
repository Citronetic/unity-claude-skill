This version of Unity is unsupported.



# [Time](Time.html).unscaledTimeAsDouble




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












                    public static double unscaledTimeAsDouble;






### Description



The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game.





Double precision version of [Time.unscaledTime](Time-unscaledTime.html). This offers more precision than a float or single value, particularly
                over extended periods of real-world time. In almost all cases, use the `unscaledTimeAsDouble` equivalent over [Time.unscaledTime](Time-unscaledTime.html).

When called from inside MonoBehaviour's [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html), it returns the unscaled fixed time.

Returns the same value if called multiple times in a single frame. Unlike [Time.timeAsDouble](Time-timeAsDouble.html) this value is not affected by [Time.timeScale](Time-timeScale.html).


            

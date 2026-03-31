This version of Unity is unsupported.



# [Time](Time.html).fixedDeltaTime




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












                    public static float fixedDeltaTime;






### Description



The interval in seconds of in-game time at which physics and other fixed frame rate updates (like MonoBehaviour's [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html)) are performed.





The `fixedDeltaTime` interval is always relative to the in-game time which [Time.timeScale](Time-timeScale.html) affects. A `fixedDeltaTime` of 1 second in a game with a [Time.timeScale](Time-timeScale.html) of 0.5 means fixed updates occur every 2 seconds of real time.

See [Time and Frame Rate Management](../Manual/managing-time-and-frame-rate.html) in the User Manual for more information about how this property relates to the other Time properties.


            

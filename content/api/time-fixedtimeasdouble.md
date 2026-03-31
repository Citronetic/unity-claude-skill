This version of Unity is unsupported.



# [Time](Time.html).fixedTimeAsDouble




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












                    public static double fixedTimeAsDouble;






### Description



The double-precision time at which the last [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html) started in seconds since the start of the game (Read Only).





Fixed time is updated in regular intervals (equal to [fixedDeltaTime](Time-fixedDeltaTime.html)) until the [timeAsDouble](Time-timeAsDouble.html) property is reached. This property is the double precision version of [Time.fixedTime](Time-fixedTime.html) and offers more precision than a float or single value, particularly over extended periods of real-world time. In almost all cases, prefer [Time.fixedTimeAsDouble](Time-fixedTimeAsDouble.html) over [Time.fixedTime](Time-fixedTime.html).


            

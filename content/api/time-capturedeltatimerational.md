This version of Unity is unsupported.



# [Time](Time.html).captureDeltaTimeRational




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












                    public static [Unity.IntegerTime.RationalTime](Unity.IntegerTime.RationalTime.html) captureDeltaTimeRational;






### Description



Slows your application’s playback time to allow Unity to save screenshots in between frames.





Same as captureDeltaTime but using a RationalTime representation.
The returned timeAsRational shares the same discretization increment value (TicksPerSecond).
Setting it to a value of 0 or invalid restores the normal Unity time management.


            

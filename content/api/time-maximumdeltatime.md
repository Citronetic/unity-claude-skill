This version of Unity is unsupported.



# [Time](Time.html).maximumDeltaTime




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












                    public static float maximumDeltaTime;






### Description



The maximum value of [Time.deltaTime](Time-deltaTime.html) in any given frame. This is a time in seconds that limits the increase of [Time.time](Time-time.html) between two frames.





When a very slow frame happens, maximumDeltaTime limits the value of [Time.deltaTime](Time-deltaTime.html) in the following frame to avoid undesirable side-effects from
                very large deltaTime values.

The recommended value depends on the desired characteristics of your application when frame hitches occur. maximumDeltaTime has these practical effects:



          - Bounds the maximum number of times Unity executes [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html) in a frame to maximumDeltaTime / fixedDeltaTime.

          - Sets a limit on the value of [Time.deltaTime](Time-deltaTime.html) which is commonly used to drive dynamic parts of the application like player movement. This controls whether and how much the application stutters or speeds up after a frame hitch.





A low value of maximumDeltaTime might prevent a long series of frame hitches in applications with long [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html) phases. In these cases, a long frame causes multiple
                executions of FixedUpdate phases in the following frame, which causes another long frame and so on.

**Important:** Unity enforces that maximumDeltaTime is always at least as large as [Time.fixedDeltaTime](Time-fixedDeltaTime.html).

See [Time and Frame Rate Management](../Manual/managing-time-and-frame-rate.html) in the User Manual for more information about how this property relates to the other Time properties.


            

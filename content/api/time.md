This version of Unity is unsupported.



# Time





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Provides an interface to get time information from Unity.





For more information, see the following pages in the User Manual:



          - [Time and Framerate Management](../Manual/managing-time-and-frame-rate.html)

          - [Order of execution for event functions](../Manual/execution-order.html).







### Static Properties



| Property | Description |
| --- | --- |
| captureDeltaTime | Slows your application’s playback time to allow Unity to save screenshots in between frames. |
| captureDeltaTimeRational | Slows your application’s playback time to allow Unity to save screenshots in between frames. |
| captureFramerate | The reciprocal of Time.captureDeltaTime. |
| deltaTime | The interval in seconds from the last frame to the current one (Read Only). |
| fixedDeltaTime | The interval in seconds of in-game time at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. |
| fixedTime | The time at which the last MonoBehaviour.FixedUpdate started in seconds since the start of the game (Read Only). |
| fixedTimeAsDouble | The double-precision time at which the last MonoBehaviour.FixedUpdate started in seconds since the start of the game (Read Only). |
| fixedUnscaledDeltaTime | The interval in seconds of timeScale-independent ("real") time at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed.(Read Only). |
| fixedUnscaledTime | The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game. |
| fixedUnscaledTimeAsDouble | The double precision timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate (Read Only). This is the time in seconds since the start of the game. |
| frameCount | The total number of frames since the start of the game (Read Only). |
| inFixedTimeStep | Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false (Read Only). |
| maximumDeltaTime | The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames. |
| maximumParticleDeltaTime | The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. |
| realtimeSinceStartup | The real time in seconds since the game started (Read Only). |
| realtimeSinceStartupAsDouble | The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup. |
| smoothDeltaTime | A smoothed out Time.deltaTime (Read Only). |
| time | The time at the beginning of the current frame in seconds since the start of the application (Read Only). |
| timeAsDouble | The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. |
| timeAsRational | The time this frame has started (Read Only). This is the time in seconds since the start of the game represented as a RationalTime. |
| timeScale | The scale at which time passes. |
| timeSinceLevelLoad | The time in seconds since the last non-additive scene finished loading (Read Only). |
| timeSinceLevelLoadAsDouble | The double precision time in seconds since the last non-additive scene finished loading (Read Only). |
| unscaledDeltaTime | The timeScale-independent interval in seconds from the last frame to the current one (Read Only). |
| unscaledTime | The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. |
| unscaledTimeAsDouble | The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. |


            

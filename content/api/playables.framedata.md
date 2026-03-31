This version of Unity is unsupported.



# FrameData





struct in
          UnityEngine.Playables



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



This structure contains the frame information a [Playable](Playables.Playable.html) receives in Playable.PrepareFrame.





### Properties



| Property | Description |
| --- | --- |
| deltaTime | The interval between this frame and the preceding frame. The interval is unscaled and expressed in seconds. |
| effectiveParentSpeed | The accumulated speed of the parent Playable during the PlayableGraph traversal. |
| effectivePlayState | The accumulated play state of this playable. |
| effectiveSpeed | The accumulated speed of the Playable during the PlayableGraph traversal. |
| effectiveWeight | The accumulated weight of the Playable during the PlayableGraph traversal. |
| evaluationType | Indicates the type of evaluation that caused PlayableGraph.PrepareFrame to be called. |
| frameId | The current frame identifier. |
| output | The PlayableOutput that initiated this graph traversal. |
| seekOccurred | Indicates that the local time was explicitly set. |
| timeHeld | Indicates the local time did not advance because it has reached the duration and the extrapolation mode is set to Hold. |
| timeLooped | Indicates the local time wrapped because it has reached the duration and the extrapolation mode is set to Loop. |
| weight | The weight of the current Playable. |


            

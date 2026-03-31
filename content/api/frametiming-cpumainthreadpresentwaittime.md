This version of Unity is unsupported.



# [FrameTiming](FrameTiming.html).cpuMainThreadPresentWaitTime




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












                    public double cpuMainThreadPresentWaitTime;






### Description



The CPU time the last frame spent in waiting for Present on the main thread, in ms.





This is the sum of shown `[wait]` blocks. It includes waits for `Present()` and the target fps. It's harder to show GPU work time because it starts somewhere in the middle of scene rendering and finishes on the next frame's sync point with the previous frame.

Additional resources: [Get frame timing data](../Manual/frame-timing-manager-get-timing-data.html).


            

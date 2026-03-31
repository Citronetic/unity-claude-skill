This version of Unity is unsupported.



# [Animator](Animator.html).StartRecording




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




                [Switch to Manual](../Manual/class-Animator.html)










## Declaration

public void StartRecording(int frameCount);






### Parameters



| Parameter | Description |
| --- | --- |
| frameCount | The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000. |





### Description



Sets the animator in recording mode, and allocates a circular buffer of size *frameCount*.





After this call, the recorder starts collecting up to *frameCount* frames in the buffer. Note it is not possible to start playback until a call to [StopRecording](Animator.StopRecording.html) is made.
Additional resources: [StopRecording](Animator.StopRecording.html), [recorderStartTime](Animator-recorderStartTime.html), [recorderStopTime](Animator-recorderStopTime.html), [StartPlayback](Animator.StartPlayback.html), [StopPlayback](Animator.StopPlayback.html), [playbackTime](Animator-playbackTime.html).


            

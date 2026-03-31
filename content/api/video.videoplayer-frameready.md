This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).frameReady




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | The number of the frame that is ready (zero-based index). |





### Description



The VideoPlayer invokes this event when a new frame is ready to be displayed.





Use this event to:



          - Analyze certain frames of a video.

          - Track progress of the video.

          - Play other effects such as animations or sound effects at a certain frame.





To enable this event so that the VideoPlayer emits it, set the [VideoPlayer.sendFrameReadyEvents](Video.VideoPlayer-sendFrameReadyEvents.html) property to `true`. This event is likely to tax the CPU, so set [VideoPlayer.sendFrameReadyEvents](Video.VideoPlayer-sendFrameReadyEvents.html) back to `false` when you don’t need it.

The VideoPlayer also emits this event if you call [VideoPlayer.Pause](Video.VideoPlayer.Pause.html) on a VideoPlayer that's not prepared yet or isn’t currently playing. When you call `Pause()` on a VideoPlayer that's not prepared or playing, it behaves as if you called `Play()` and then immediately called `Pause()`. This allows you to seek to a certain point in the video, and pause to give it time to prepare the frame before you play it.


              


```
targetFrame
```


            

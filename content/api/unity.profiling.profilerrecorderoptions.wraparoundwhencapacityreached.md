This version of Unity is unsupported.



# [ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html).WrapAroundWhenCapacityReached




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



Use to allow sample value overwrite when ProfilerRecorder capacity is exceeded.





If you create a `ProfilerRecorder` with [ProfilerRecorderOptions.WrapAroundWhenCapacityReached](Unity.Profiling.ProfilerRecorderOptions.WrapAroundWhenCapacityReached.html), the [ProfilerRecorder.Count](Unity.Profiling.ProfilerRecorder.Count.html) property determines the index of the next sample to be collected. It acts like a running index in a round-robin sample buffer. This is useful in use cases such as mapping data to the histogram texture.

Additional resources: [ProfilerRecorderSample](Unity.Profiling.ProfilerRecorderSample.html).


            

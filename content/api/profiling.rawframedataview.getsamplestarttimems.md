This version of Unity is unsupported.



# [RawFrameDataView](Profiling.RawFrameDataView.html).GetSampleStartTimeMs




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















## Declaration

public double GetSampleStartTimeMs(int sampleIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| sampleIndex | Index of the Profiler sample. |





### Returns



**double**
        Returns sample start time in milliseconds.





### Description



Gets the start time of the sample. The amount of time is expressed in milliseconds.





The sample start time is a monotonous steady time, which Unity gets via the high frequency timer which is available on the target platform. Usually it represents the time since the machine started up.


            

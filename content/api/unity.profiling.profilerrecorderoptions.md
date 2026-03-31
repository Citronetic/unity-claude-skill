This version of Unity is unsupported.



# ProfilerRecorderOptions





enumeration


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



ProfilerRecorder lifecycle and collection options.





### Properties



| Property | Description |
| --- | --- |
| StartImmediately | Use to start data collection immediately upon ProfilerRecorder initialization. |
| KeepAliveDuringDomainReload | Use to keep the ProfilerRecorder unmanaged instance running across a Unity domain reload. |
| CollectOnlyOnCurrentThread | Use to collect samples only on the thread ProfilerRecorder was initialized on. |
| WrapAroundWhenCapacityReached | Use to allow sample value overwrite when ProfilerRecorder capacity is exceeded. |
| SumAllSamplesInFrame | Use to sum all samples within a frame and collect those as one sample per frame. |
| GpuRecorder | Use to indicate that ProfilerRecorder should collect GPU timing instead of CPU. |
| Default | Default initialization options. Equivalent to (SumSamplesInFrame \| WrapAroundWhenCapacityReached). |


            

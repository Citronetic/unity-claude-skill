This version of Unity is unsupported.



# [Recorder](Profiling.Recorder.html).gpuElapsedNanoseconds




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












                    public long gpuElapsedNanoseconds;






### Description



Gets the accumulated GPU time, in nanoseconds, for a frame. The Recorder has a three frame delay so this gives the timings for the frame that was three frames before the one that you access this property on. (Read Only).





To get valid timings, the platform must support the GPU Recorder. To check this, use [SystemInfo.supportsGpuRecorder](SystemInfo-supportsGpuRecorder.html).


            

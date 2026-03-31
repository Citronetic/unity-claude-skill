This version of Unity is unsupported.



# [Recorder](Profiling.Recorder.html).CollectFromAllThreads




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

public void CollectFromAllThreads();






### Description



Configures the recorder to collect samples from all threads.





A recorder collects sample data from all threads by default, but if you have configured it to collect from only a single thread using [Recorder.FilterToCurrentThread](Profiling.Recorder.FilterToCurrentThread.html), then you can call this method afterwards to resume collection from all threads.


            

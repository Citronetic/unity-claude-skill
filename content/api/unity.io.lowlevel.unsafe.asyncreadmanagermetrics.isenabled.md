This version of Unity is unsupported.



# [AsyncReadManagerMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html).IsEnabled




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

public static bool IsEnabled();






### Returns



**bool**
        True, if the metrics system of the AsyncReadManager is currently recording data; false, otherwise.





### Description



Reports whether the metrics system for the [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html) is currently recording data.





Start metrics collection with [StartCollectingMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.StartCollectingMetrics.html) and end recording with [StopCollectingMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.StopCollectingMetrics.html). You can also enable metrics collection when your program first launches using the command-line argument "-enable-file-read-metrics". You can only collect metrics in development builds.


            

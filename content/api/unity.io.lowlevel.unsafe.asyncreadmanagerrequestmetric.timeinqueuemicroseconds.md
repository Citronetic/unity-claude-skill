This version of Unity is unsupported.



# [AsyncReadManagerRequestMetric](Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.html).TimeInQueueMicroseconds




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












                    public double TimeInQueueMicroseconds;






### Description



The amount of time the read request waited in the AsyncReadManager queue, in microseconds.





For read requests that were actively reading or had already finished when this metrics record was created, the time reported is the total time spent in the queue.
                For pending requests still waiting in the queue, the time reported is the time spent in the queue so far.


            

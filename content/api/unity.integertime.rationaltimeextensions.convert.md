This version of Unity is unsupported.



# [RationalTimeExtensions](Unity.IntegerTime.RationalTimeExtensions.html).Convert




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

public static [Unity.IntegerTime.RationalTime](Unity.IntegerTime.RationalTime.html) Convert([Unity.IntegerTime.RationalTime](Unity.IntegerTime.RationalTime.html) time,
[Unity.IntegerTime.RationalTime.TicksPerSecond](Unity.IntegerTime.RationalTime.TicksPerSecond.html) rate);






### Parameters



| Parameter | Description |
| --- | --- |
| t | The value to convert. |
| r | The new Rate. |





### Returns



**RationalTime**
        A new instance of RationalTime representing as closely as possible the same number of seconds.





### Description



Converts a RationalTime from one rate to another. This is lossless unless it triggers an overflow.


            

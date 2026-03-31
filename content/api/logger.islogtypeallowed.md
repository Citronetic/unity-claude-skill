This version of Unity is unsupported.



# [Logger](Logger.html).IsLogTypeAllowed




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

public bool IsLogTypeAllowed([LogType](LogType.html) logType);






### Parameters



| Parameter | Description |
| --- | --- |
| logType | The type of the log message. |





### Returns



**bool**
        Retrun true in case logs of LogType will be logged otherwise returns false.





### Description



Check logging is enabled based on the LogType.





Return true based on [Logger.filterLogType](Logger-filterLogType.html) and [Logger.logEnabled](Logger-logEnabled.html).


            

This version of Unity is unsupported.



# [Application](Application.html).SetStackTraceLogType




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

public static void SetStackTraceLogType([LogType](LogType.html) logType,
[StackTraceLogType](StackTraceLogType.html) stackTraceType);






### Description



Set stack trace logging options. The default value is [StackTraceLogType.ScriptOnly](StackTraceLogType.ScriptOnly.html).





Useful when you want more debugging information when a log message is printed to the log. For example, if you set [StackTraceLogType.Full](StackTraceLogType.Full.html), both native and managed stack traces will be printed for messages.


            

This version of Unity is unsupported.



# [Logger](Logger.html).LogFormat




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

public void LogFormat([LogType](LogType.html) logType,
string format,
params object[] args);






## Declaration

public void LogFormat([LogType](LogType.html) logType,
[Object](Object.html) context,
string format,
params object[] args);






### Parameters



| Parameter | Description |
| --- | --- |
| logType | The type of the log message. |
| context | Object to which the message applies. |
| format | A composite format string. |
| args | Format arguments. |





### Description



Logs a formatted message.





For formatting details, see the MSDN documentation on Composite Formatting.
Rich text markup can be used to add emphasis. See the manual page about [rich text](../Manual/StyledText.html) for details of the different markup tags available.


            

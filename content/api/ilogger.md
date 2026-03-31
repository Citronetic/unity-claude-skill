This version of Unity is unsupported.



# ILogger





interface in
          UnityEngine


                  Leave feedback





Implements interfaces:[ILogHandler](ILogHandler.html)




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



Interface for custom logger implementation.





Additional resources: [Logger](Logger.html), [Debug.unityLogger](Debug-unityLogger.html) [ILogHandler](ILogHandler.html).





### Properties



| Property | Description |
| --- | --- |
| filterLogType | To selective enable debug log message. |
| logEnabled | To runtime toggle debug logging [ON/OFF]. |
| logHandler | Set Logger.ILogHandler. |





### Public Methods



| Method | Description |
| --- | --- |
| IsLogTypeAllowed | Check logging is enabled based on the LogType. |
| Log | Logs message to the Unity Console using default logger. |
| LogError | A variant of ILogger.Log that logs an error message. |
| LogException | A variant of ILogger.Log that logs an exception message. |
| LogFormat | Logs a formatted message. |
| LogWarning | A variant of Logger.Log that logs an warning message. |


            

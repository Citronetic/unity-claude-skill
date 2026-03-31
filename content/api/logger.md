This version of Unity is unsupported.



# Logger





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


                  Leave feedback





Implements interfaces:[ILogger](ILogger.html), [ILogHandler](ILogHandler.html)




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



Initializes a new instance of the Logger.





Create a new instance or use default [Debug.unityLogger](Debug-unityLogger.html).
Additional resources: [ILogger](ILogger.html), [ILogHandler](ILogHandler.html).


              


```
using UnityEngine;
using System.Collections;
using System.IO;
using System;public class MyLogHandler : ILogHandler
{
    public void LogFormat(LogType logType, UnityEngine.Object context, string format, params object[] args)
    {
        Debug.unityLogger.logHandler.LogFormat(logType, context, format, args);
    }    public void LogException(Exception exception, UnityEngine.Object context)
    {
        Debug.unityLogger.LogException(exception, context);
    }
}public class MyGameClass : MonoBehaviour
{
    private static string kTAG = "MyGameTag";
    private Logger myLogger;    void Start()
    {
        myLogger = new Logger(new MyLogHandler());        myLogger.Log(kTAG, "MyGameClass Start.");
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| filterLogType | To selective enable debug log message. |
| logEnabled | To runtime toggle debug logging [ON/OFF]. |
| logHandler | Set  Logger.ILogHandler. |





### Constructors



| Constructor | Description |
| --- | --- |
| Logger | Create a custom Logger. |





### Public Methods



| Method | Description |
| --- | --- |
| IsLogTypeAllowed | Check logging is enabled based on the LogType. |
| Log | Logs message to the Unity Console using default logger. |
| LogError | A variant of Logger.Log that logs an error message. |
| LogException | A variant of Logger.Log that logs an exception message. |
| LogFormat | Logs a formatted message. |
| LogWarning | A variant of Logger.Log that logs an warning message. |


            

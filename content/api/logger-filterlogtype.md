This version of Unity is unsupported.



# [Logger](Logger.html).filterLogType




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












                    public [LogType](LogType.html) filterLogType;






### Description



To selective enable debug log message.





By settings filterLogType to

    [LogType.Log](LogType.Log.html)  (default setting) will display all log messages.

    [LogType.Warning](LogType.Warning.html) will display Warning, Assert, Error and Exception log messages.

    [LogType.Assert](LogType.Assert.html) will display Assert, Error and Exception log messages.

    [LogType.Error](LogType.Error.html) will display Error and Exception log messages.

    [LogType.Exception](LogType.Exception.html) will display Exception log messages.


              


```
using UnityEngine;
using System.Collections;public class MyGameClass : MonoBehaviour
{
    private static ILogger logger = Debug.unityLogger;
    private static string kTAG = "MyGameTag";    void Start()
    {
        if (Debug.isDebugBuild)
            logger.filterLogType = LogType.Log;
        else
            logger.filterLogType = LogType.Warning;        logger.Log(kTAG, "This log will be displayed only in debug build");
        logger.LogError(kTAG, "This log will be displayed in debug and release build");
    }
}
```


            

This version of Unity is unsupported.



# [Logger](Logger.html).Log




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

public void Log([LogType](LogType.html) logType,
object message);






## Declaration

public void Log([LogType](LogType.html) logType,
object message,
[Object](Object.html) context);






## Declaration

public void Log([LogType](LogType.html) logType,
string tag,
object message);






## Declaration

public void Log([LogType](LogType.html) logType,
string tag,
object message,
[Object](Object.html) context);






## Declaration

public void Log(object message);






## Declaration

public void Log(string tag,
object message);






## Declaration

public void Log(string tag,
object message,
[Object](Object.html) context);






### Parameters



| Parameter | Description |
| --- | --- |
| logType | The type of the log message. |
| tag | Used to identify the source of a log message. It usually identifies the class where the log call occurs. |
| message | String or object to be converted to string representation for display. |
| context | Object to which the message applies. |





### Description



Logs `message` to the Unity Console using default logger.





Additional resources: [ILogger](ILogger.html), [ILogHandler](ILogHandler.html).


              


```
using UnityEngine;
using System.Collections;public class MyGameClass : MonoBehaviour
{
    private static ILogger logger = Debug.unityLogger;
    private static string kTAG = "MyGameTag";    void MyGameMethod()
    {
        logger.Log(kTAG, "Hello");        Debug.unityLogger.Log(kTAG, "World");        logger.Log("Hello Logger");
    }
}
```


            

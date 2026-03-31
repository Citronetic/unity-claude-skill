This version of Unity is unsupported.



# Logger Constructor




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

public Logger([ILogHandler](ILogHandler.html) logHandler);






### Parameters



| Parameter | Description |
| --- | --- |
| logHandler | Pass in default log handler or custom log handler. |





### Description



Create a custom Logger.





Additional resources: [ILogHandler](ILogHandler.html), [Debug.unityLogger](Debug-unityLogger.html).


              


```
using UnityEngine;
using System.Collections;public class MyGameClass : MonoBehaviour
{
    private static string kTAG = "MyGameTag";
    private Logger myLogger;    void Start()
    {
        myLogger = new Logger(Debug.unityLogger.logHandler);        myLogger.Log(kTAG, "MyGameClass Start.");
    }
}
```


            

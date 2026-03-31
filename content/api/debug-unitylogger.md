This version of Unity is unsupported.



# [Debug](Debug.html).unityLogger




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




                [Switch to Manual](../Manual/class-Debug.html)







                    public static [ILogger](ILogger.html) unityLogger;






### Description



Get default debug logger.





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
        logger.Log(kTAG, "Hello");        Debug.unityLogger.Log(kTAG, "World");
    }
}
```


            

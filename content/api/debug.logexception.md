This version of Unity is unsupported.



# [Debug](Debug.html).LogException




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










## Declaration

public static void LogException(Exception exception);






## Declaration

public static void LogException(Exception exception,
[Object](Object.html) context);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Object to which the message applies. |
| exception | Runtime Exception. |





### Description



A variant of Debug.Log that logs an error message to the console.





When you select the message in the console a connection to the context object will be drawn.
This is very useful if you want know on which object an error occurs.

Additional resources: [Debug.unityLogger](Debug-unityLogger.html), [ILogger](ILogger.html), [Logger.LogException](Logger.LogException.html).


              


```
using System;
using UnityEngine;
using System.Collections;public class MyGameClass : MonoBehaviour
{
    void MyGameMethod()
    {
        try
        {
            // Do something that can throw an exception
        }
        catch (Exception e)
        {
            Debug.LogException(e, this);
        }
    }
}
```





Note that this pauses the editor when 'ErrorPause' is enabled.


            

This version of Unity is unsupported.



# [Debug](Debug.html).LogError




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

public static void LogError(object message);






## Declaration

public static void LogError(object message,
[Object](Object.html) context);






### Parameters



| Parameter | Description |
| --- | --- |
| message | String or object to be converted to string representation for display. |
| context | Object to which the message applies. |





### Description



A variant of Debug.Log that logs an error message to the console.





When you select the message in the console a connection to the context object will be drawn.
This is very useful if you want know on which object an error occurs.

When the message is a string, rich text markup can be used to add emphasis. See the manual page about [rich text](../Manual/StyledText.html) for details of the different markup tags available.

Additional resources: [Debug.unityLogger](Debug-unityLogger.html), [ILogger](ILogger.html), [Logger.LogError](Logger.LogError.html).


              


```
using UnityEngine;
using System.Collections;public class MyGameClass : MonoBehaviour
{
    private Transform transform;    void MyGameMethod()
    {
        if (transform == null)
            Debug.LogError("memberVariable must be set to point to a Transform.", transform);
    }
}
```





Note that this pauses the editor when 'ErrorPause' is enabled.


            

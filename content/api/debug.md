This version of Unity is unsupported.



# Debug





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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














### Description



Class containing methods to ease debugging while developing a game.





### Static Properties



| Property | Description |
| --- | --- |
| developerConsoleEnabled | Allows you to enable or disable the developer console. |
| developerConsoleVisible | Controls whether the development console is visible. |
| isDebugBuild | In the Build Settings dialog there is a check box called "Development Build". |
| unityLogger | Get default debug logger. |





### Static Methods



| Method | Description |
| --- | --- |
| Assert | Assert a condition and logs an error message to the Unity console on failure. |
| AssertFormat | Assert a condition and logs a formatted error message to the Unity console on failure. |
| Break | Pauses the editor. |
| CheckIntegrity | Performs an integrity check of the currently running process and return discovered errors. |
| ClearDeveloperConsole | Clears errors from the developer console. |
| DrawLine | Draws a line between specified start and end points. |
| DrawRay | Draws a line from start to start + dir in world coordinates. |
| ExtractStackTraceNoAlloc | Populate an unmanaged buffer with the current managed call stack as a sequence of UTF-8 bytes, without allocating GC memory. Returns the number of bytes written into the buffer. |
| IsValidationLevelEnabled | Returns whether a given validation level is currently enabled. |
| Log | Logs a message to the Unity Console. |
| LogAssertion | A variant of Debug.Log that logs an assertion message to the console. |
| LogAssertionFormat | Logs a formatted assertion message to the Unity console. |
| LogError | A variant of Debug.Log that logs an error message to the console. |
| LogErrorFormat | Logs a formatted error message to the Unity console. |
| LogException | A variant of Debug.Log that logs an error message from an exception to the console. |
| LogFormat | Logs a formatted message to the Unity Console. |
| LogWarning | A variant of Debug.Log that logs a warning message to the console. |
| LogWarningFormat | Logs a formatted warning message to the Unity Console. |
| RetrieveStartupLogs | Returns any captured startup logs |


            

This version of Unity is unsupported.



# PhraseRecognitionSystem





class in
          UnityEngine.Windows.Speech



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



















### Description



Phrase recognition system is responsible for managing phrase recognizers and dispatching recognition events to them.





In order for any phrase recognizers to recognize a phrase, PhraseRecognitionSystem must be running. Starting a phrase recognition will automatically start the phrase recognition system if it's stopped.

Phrase recognition system cannot be started if there are any dictation recognizers active.

Phrase recognition system is currently only functional on Windows 10. Use PhraseRecognitionSystem.isSupported property to determine whether speech recognition is supported on the system that the application is running on.





### Static Properties



| Property | Description |
| --- | --- |
| isSupported | Returns whether speech recognition is supported on the machine that the application is running on. |
| Status | Returns the current status of the phrase recognition system. |





### Static Methods



| Method | Description |
| --- | --- |
| Restart | Attempts to restart the phrase recognition system. |
| Shutdown | Shuts phrase recognition system down. |





### Events



| Event | Description |
| --- | --- |
| OnError | Event that gets invoked when phrase recognition system encounters an error. |
| OnStatusChanged | Event which occurs when the status of the phrase recognition system changes. |





### Delegates



| Delegate | Description |
| --- | --- |
| ErrorDelegate | Delegate for OnError event. |
| StatusDelegate | Delegate for OnStatusChanged event. |


            

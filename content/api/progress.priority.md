This version of Unity is unsupported.



# Priority





enumeration


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



An enumeration that defines task priorities.





Progress indicators are sorted by priority, from highest to lowest. Priorities also determine the visual behavior of progress indicators.
Each item in this enumeration defines the threshold value for each priority level. For example, [Low](Progress.Priority.Low.html) is 2 and [Normal](Progress.Priority.Normal.html) is 6, so values between 2 and 5 are [Low](Progress.Priority.Low.html) priorities.





### Properties



| Property | Description |
| --- | --- |
| Unresponsive | An unresponsive task is always shown as unresponsive. |
| Idle | An idle priority task cannot be unresponsive, and is not displayed in the global progress bar. |
| Low | A low priority task cannot be unresponsive, but is displayed in the global progress bar. |
| Normal | A normal priority task can be unresponsive, and is displayed in the global progress bar. |
| High | A high priority task can be unresponsive, and is displayed in the global progress bar. |


            

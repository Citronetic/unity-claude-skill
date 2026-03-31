This version of Unity is unsupported.



# CrashReportingSettings





class in
          UnityEditor.CrashReporting


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



Editor API for the Unity Services editor feature. Normally CrashReporting is enabled from the Services window, but if writing your own editor extension, this API can be used.





### Static Properties



| Property | Description |
| --- | --- |
| captureEditorExceptions | This Boolean field will cause the CrashReporting feature in Unity to capture exceptions that occur in the editor while running in Play mode if true, or ignore those errors if false. |
| enabled | This Boolean field will cause the CrashReporting feature in Unity to be enabled if true, or disabled if false. |
| logBufferSize | The Performance Reporting service will keep a buffer of up to the last X log messages (Debug.Log, etc) to send along with crash reports.  The default is 10 log messages, the max is 50. Set this to 0 to disable capture of logs with your crash reports. |


            

This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [IScriptableBakedReflectionSystemStageNotifier](Experimental.Rendering.IScriptableBakedReflectionSystemStageNotifier.html).EnterStage




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

public void EnterStage(int stage,
string progressMessage,
float progress);






### Parameters



| Parameter | Description |
| --- | --- |
| stage | The current stage in progress. |
| progressMessage | The progress message to display. |
| progress | The progress to report (between 0 and 1). |





### Description



Update the baking stage progress information.





Call this method during the ticking of an ScriptableBakedReflectionSystem. (See [IScriptableBakedReflectionSystem.Tick](Experimental.Rendering.IScriptableBakedReflectionSystem.Tick.html)).

The progress will be reported in the status bar in the bottom left of the editor window.


            

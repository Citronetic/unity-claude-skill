This version of Unity is unsupported.



# [Progress.Item](Progress.Item.html).Report




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

public void Report(float newProgress);






## Declaration

public void Report(float newProgress,
string newDescription);






## Declaration

public void Report(int newCurrentStep,
int newTotalSteps);






## Declaration

public void Report(int newCurrentStep,
int newTotalSteps,
string newDescription);






### Parameters



| Parameter | Description |
| --- | --- |
| newProgress | A new progress value between 0 and 1. |
| newDescription | An updated description of the progress indicator. If the the progress status has not changed, or you do not set a description, this is null. To clear the current progress description, pass an empty string such as "". |
| newCurrentStep | An updated current step. |
| newTotalSteps | An updated total number of steps. |





### Description



Reports the progress indicator's current status.





When you report in steps, you can set the label for the steps with [Progress.Item.SetStepLabel](Progress.Item.SetStepLabel.html).
Note: Changes are applied on the next application tick unless you call this function from the main thread using a synchronous progress indicator (see [Synchronous](Progress.Options.Synchronous.html)).

Additional resources: [Progress.Report](Progress.Report.html), [Progress.Item.progress](Progress.Item-progress.html), [Progress.Item.description](Progress.Item-description.html), [Progress.Item.SetDescription](Progress.Item.SetDescription.html).


            

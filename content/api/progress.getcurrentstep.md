This version of Unity is unsupported.



# [Progress](Progress.html).GetCurrentStep




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

public static int GetCurrentStep(int id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | The progress indicator's unique ID. |





### Returns



**int**
        The current step.





### Description



Gets the current step for a progress indicator.





Returns -1 if the indicator is not set to report progress in steps. To set the type of steps that the progress window displays, use [Progress.SetStepLabel](Progress.SetStepLabel.html).

Additional resources: [Progress.Report](Progress.Report.html), [Progress.GetTotalSteps](Progress.GetTotalSteps.html), [Progress.GetStepLabel](Progress.GetStepLabel.html), [Progress.SetStepLabel](Progress.SetStepLabel.html).


            

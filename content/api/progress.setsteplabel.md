This version of Unity is unsupported.



# [Progress](Progress.html).SetStepLabel




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

public static void SetStepLabel(int id,
string label);






### Parameters



| Parameter | Description |
| --- | --- |
| id | The progress indicator's unique ID. |
| label | The steps label. |





### Description



Sets the label that displays a progress indicator's steps.





This label displays a progress indicator's reported steps. For example, a progress indicator that reports "Jobs" might display "11/25 Jobs" and a progress reporting "Assets" might display "8/20 Assets". To report progress in steps, use [Progress.Report](Progress.Report.html) with the steps variant.

Additional resources: [Progress.GetStepLabel](Progress.GetStepLabel.html), [Progress.GetCurrentStep](Progress.GetCurrentStep.html), [Progress.GetTotalSteps](Progress.GetTotalSteps.html), [Progress.Item.stepLabel](Progress.Item-stepLabel.html), [Progress.Item.SetStepLabel](Progress.Item.SetStepLabel.html).


            

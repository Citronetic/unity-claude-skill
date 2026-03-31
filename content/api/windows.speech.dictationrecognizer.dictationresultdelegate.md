This version of Unity is unsupported.



# [DictationRecognizer](Windows.Speech.DictationRecognizer.html).DictationResultDelegate




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

public delegate void DictationResultDelegate(string text,
[Windows.Speech.ConfidenceLevel](Windows.Speech.ConfidenceLevel.html) confidence);






### Parameters



| Parameter | Description |
| --- | --- |
| text | The recognized text. |
| confidence | The confidence level at which the text was recognized. |





### Description



Callback indicating a phrase has been recognized with the specified confidence level. You should register with DictationResult event.


            

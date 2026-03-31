This version of Unity is unsupported.



# [AbstractProgressBar](UIElements.AbstractProgressBar.html).value




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












                    public float value;






### Description



Sets the progress value. The value is clamped between lowValue and highValue.





The progress percentage is calculated as `100 * (value - lowValue) / (highValue - lowValue)`.


 If the value has changed, dispatches an ChangeEvent_1 of type float.


            

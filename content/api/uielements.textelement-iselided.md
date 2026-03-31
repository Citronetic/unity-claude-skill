This version of Unity is unsupported.



# [TextElement](UIElements.TextElement.html).isElided




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












                    public bool isElided;






### Description



Returns true if text is elided, false otherwise.





Text is elided when the element that contains it is not large enough to display the full text, and has the following style property settings.

 overflow: Overflow.Hidden
 whiteSpace: WhiteSpace.NoWrap
 textOverflow: TextOverflow.Ellipsis

 The text Element hides elided text, and displays an ellipsis ('...') to indicate that there is hidden overflow content.


            

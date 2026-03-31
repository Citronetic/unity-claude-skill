This version of Unity is unsupported.



# [Touch](Touch.html).fingerId




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












                    public int fingerId;






### Description



The unique index for the touch.





All current touches are reported in the [Input.touches](Input-touches.html) array or by using the [Input.GetTouch](Input.GetTouch.html) function with the equivalent array index. However, the array index is not guaranteed to be the same from one frame to the next. The `fingerId` value, however, consistently refers to the same touch across frames. This ID value is very useful when analysing gestures and is more reliable than identifying fingers by their proximity to previous position, etc.

[Touch.fingerId](Touch-fingerId.html) is not the same as "first" touch, "second" touch and so on. It is merely a unique id per gesture. You cannot make any assumptions about fingerId and the number of fingers actually on screen, since virtual touches will be introduced to handle the fact that the touch structure is constant for an entire frame (while in reality the number of touches obviously might not be true, e.g. if multiple tappings occur within a single frame).


            

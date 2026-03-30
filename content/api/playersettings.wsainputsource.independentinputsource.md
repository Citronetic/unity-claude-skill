This version of Unity is unsupported.



# [PlayerSettings.WSAInputSource](PlayerSettings.WSAInputSource.html).IndependentInputSource




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)














### Description



Indicates that pointer input comes from SwapChainPanel's core input object.





With this option, in a XAML application, the Unity thread receives all mouse, pen, and touch events that occur within the SwapChainPanel. Unity does not receive input that occurs outside the SwapChainPanel. This input method is useful when Unity does not occupy the entire window and there are other XAML elements present. In such a case, using this option separates input events to XAML and Unity so they don't interfere with each other.
Unlike [SwapChainPanel](PlayerSettings.WSAInputSource.SwapChainPanel.html), this option causes the Unity thread to process events instead of the UI thread.
**Note**: D3D applications do not support this option.


            

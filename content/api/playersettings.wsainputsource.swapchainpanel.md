This version of Unity is unsupported.



# [PlayerSettings.WSAInputSource](PlayerSettings.WSAInputSource.html).SwapChainPanel




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



Indicates that pointer input comes from the SwapChainPanel.





With this option, in a XAML application, Unity's UI thread receives all mouse, pen, and touch events that occur within the SwapChainPanel; Unity does not receive input that occurs outside the SwapChainPanel. This input method is useful when Unity does not occupy the entire window and there are other XAML elements present. In such a case, using this option separates input events to XAML and Unity so they don't interfere with each other.
Unlike [IndependentInputSource](PlayerSettings.WSAInputSource.IndependentInputSource.html), this option still uses the UI thread to process events.
**Note**: D3D applications do not support this option.PlayerSettings.WSASupportedFileType.mem.xml.


            

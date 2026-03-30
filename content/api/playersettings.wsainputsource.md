This version of Unity is unsupported.



# WSAInputSource





enumeration


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



Options for the input source from which a XAML application can receive pointer input events.





To receive input, Universal Windows Platform applications subscribe to various events, and with XAML builds you can register input events for alternative sources via the SwapChainPanel API. This only applies to mouse, pen, and touch events. Universal Windows Platform applications always take keyboard input from CoreWindow.
**Note**: These options are only applicable to XAML applications that use the SwapChainPanel; XAML applications that use D3D only support the [CoreWindow](PlayerSettings.WSAInputSource.CoreWindow.html) input source. For more information, see [Microsoft's documentation](https://docs.microsoft.com/en-us/uwp/api/Windows.UI.Xaml.Controls.SwapChainPanel).





### Properties



| Property | Description |
| --- | --- |
| CoreWindow | Indicates that pointer input comes from CoreWindow. This is the default option. |
| IndependentInputSource | Indicates that pointer input comes from SwapChainPanel's core input object. |
| SwapChainPanel | Indicates that pointer input comes from the SwapChainPanel. |


            

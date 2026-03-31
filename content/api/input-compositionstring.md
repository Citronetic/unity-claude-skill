This version of Unity is unsupported.



# [Input](Input.html).compositionString




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












                    public static string compositionString;






### Description



The current IME composition string being typed by the user.





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

In some languages such as Chinese, Japanese or Korean, text is input by typing multiple keys to generate
one or multiple characters. These characters are visually composed on the screen as the user types.
When using Unity's built in GUI system for text input, Unity will take care of displaying the composition
strings as the users types. If you want to implement your own GUI, however, you need to take care of
displaying the string at the current cursor position. The composition string is only updated when IME
compositing is used. See [Input.imeCompositionMode](Input-imeCompositionMode.html) for more info.
Additional resources: [Input.imeCompositionMode](Input-imeCompositionMode.html), [Input.compositionCursorPos](Input-compositionCursorPos.html).


            

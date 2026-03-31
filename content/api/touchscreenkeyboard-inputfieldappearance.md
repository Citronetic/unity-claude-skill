This version of Unity is unsupported.



# [TouchScreenKeyboard](TouchScreenKeyboard.html).inputFieldAppearance




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












                    public static [TouchScreenKeyboard.InputFieldAppearance](TouchScreenKeyboard.InputFieldAppearance.html) inputFieldAppearance;






### Description



Returns the current visibility status of the on-screen keyboard's input field. (Read Only)





The input field can be always visible, always hidden, or customizable. If the input field is customizable, you can use [TouchScreenKeyboard.hideInput](TouchScreenKeyboard-hideInput.html) to customize the visibility of the input field based on the requirement of your application.

**Note:** On Android, if your application uses the GameActivity application entry point, the input field of the on-screen keyboard is always hidden. This is because GameActivity uses Android's [GameTextInput](https://developer.android.com/games/agdk/add-support-for-text-input) library which always keeps the input field hidden, with no option to make it visible.


            

This version of Unity is unsupported.



# [TouchScreenKeyboard](TouchScreenKeyboard.html).selection




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












                    public [RangeInt](RangeInt.html) selection;






### Description



Gets or sets the character range of the selected text within the string currently being edited.





For example: if the keyboard is editing a [text](TouchScreenKeyboard-text.html) "abcdef" and the "cde" substring is selected, the return value is a [RangeInt](RangeInt.html) with the [RangeInt.start](RangeInt-start.html) value set to 2 and a [RangeInt.length](RangeInt-length.html) value of 3. Similarly, setting selection to a [RangeInt](RangeInt.html) with the [RangeInt.start](RangeInt-start.html) value set to 2 and a [RangeInt.length](RangeInt-length.html) value of 3 will select "cde" of the string "abcdef".

If the caret is between two characters and no text is selected, then the [RangeInt.length](RangeInt-length.html) property is 0.

This always returns an empty range (start 0, length 0) if [canGetSelection](TouchScreenKeyboard-canGetSelection.html) is false.


            

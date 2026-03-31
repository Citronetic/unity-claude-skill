This version of Unity is unsupported.



# [MaterialEditor](MaterialEditor.html).BeginAnimatedCheck




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

public void BeginAnimatedCheck([Rect](Rect.html) totalPosition,
[MaterialProperty](MaterialProperty.html) prop);






## Declaration

public void BeginAnimatedCheck([MaterialProperty](MaterialProperty.html) prop);






### Parameters



| Parameter | Description |
| --- | --- |
| totalPosition | Rectangle on the screen to use for the control, including label if applicable. |
| prop | The MaterialProperty to use for the control. |





### Description



Creates a Property wrapper, useful for making regular GUI controls work with [MaterialProperty](MaterialProperty.html).





BeginAnimatedCheck and EndAnimatedCheck automatically handle animated property color feedback and contextual menu.

Additional resources: [EndAnimatedCheck](MaterialEditor.EndAnimatedCheck.html).


            

This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).SerializedPropertyCallbackFunction




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

public delegate void SerializedPropertyCallbackFunction([GenericMenu](GenericMenu.html) menu,
[SerializedProperty](SerializedProperty.html) property);






### Parameters



| Parameter | Description |
| --- | --- |
| menu | The contextual menu which is about to be shown to the user. |
| property | The property for which the contextual menu is shown. |





### Description



Delegate to be called from [EditorApplication](EditorApplication.html) contextual inspector callbacks.





SerializedPropertyCallbackFunction is used by [EditorApplication.contextualPropertyMenu](EditorApplication-contextualPropertyMenu.html).


            

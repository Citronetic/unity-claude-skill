This version of Unity is unsupported.



# [PropertyDrawer](PropertyDrawer.html).GetPropertyHeight




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

public float GetPropertyHeight([SerializedProperty](SerializedProperty.html) property,
[GUIContent](GUIContent.html) label);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The SerializedProperty to make the custom GUI for. |
| label | The label of this property. |





### Returns



**float**
        The height in pixels.





### Description



Override this method to specify how tall the GUI for this field is in pixels.





The default is one line high.


            

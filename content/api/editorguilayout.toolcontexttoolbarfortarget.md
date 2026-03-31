This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).ToolContextToolbarForTarget




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

public static void ToolContextToolbarForTarget([GUIContent](GUIContent.html) content,
[Object](Object.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| content | An optional prefix label. Pass null to omit the label. |
| target | The target object. This may be either a Component or an Editor. |





### Description



Makes a toolbar populated with the collection of [EditorToolContext](EditorTools.EditorToolContext.html) that match the EditorToolContextAttribute.targetType of the target object.


            

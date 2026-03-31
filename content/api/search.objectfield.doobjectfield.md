This version of Unity is unsupported.



# [ObjectField](Search.ObjectField.html).DoObjectField




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

public static Object DoObjectField([Rect](Rect.html) position,
[Object](Object.html) obj,
Type objType,
[GUIContent](GUIContent.html) label,
[Search.SearchContext](Search.SearchContext.html) context,
[Search.SearchViewFlags](Search.SearchViewFlags.html) searchViewFlags);






## Declaration

public static void DoObjectField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
Type objType,
[GUIContent](GUIContent.html) label,
[Search.SearchContext](Search.SearchContext.html) context,
[Search.SearchViewFlags](Search.SearchViewFlags.html) searchViewFlags);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position to draw the control in the current view. |
| obj | Currently selected object. |
| objType | Type of the object to be picked. |
| label | Label displayed left of the control. |
| context | Search context used to open the advanced search picker. |
| searchViewFlags | Search view flags used to open the advanced search picker. |
| property | Serialized property holding the selected object. |





### Returns



**Object**
        Returns the selected object.





### Description



Draw an IMGUI advanced object field.


            

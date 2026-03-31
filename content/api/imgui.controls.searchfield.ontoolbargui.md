This version of Unity is unsupported.



# [SearchField](IMGUI.Controls.SearchField.html).OnToolbarGUI




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

public string OnToolbarGUI(string text,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| text | Text string to display in the search field. |
| options | An optional list of layout options that specify extra layout properties.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**string**
        The text entered in the search field. The original input string is returned instead if the search field text was not changed.





### Description



This function displays the search field with the toolbar UI style and uses the GUILayout class to automatically calculate the position and size of the Rect it is rendered to. Pass an optional list to specify extra layout properties.




---








## Declaration

public string OnToolbarGUI([Rect](Rect.html) rect,
string text);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | Rectangle to use for the search field. |
| text | Text string to display in the search field. |





### Returns



**string**
        The text entered in the search field. The original input string is returned instead if the search field text was not changed.





### Description



This function displays the search field with a toolbar style in the given Rect.


            

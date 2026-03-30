This version of Unity is unsupported.



# EditorGUILayout.ScrollViewScope Constructor




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

public EditorGUILayout.ScrollViewScope([Vector2](Vector2.html) scrollPosition,
params GUILayoutOption[] options);






## Declaration

public EditorGUILayout.ScrollViewScope([Vector2](Vector2.html) scrollPosition,
bool alwaysShowHorizontal,
bool alwaysShowVertical,
params GUILayoutOption[] options);






## Declaration

public EditorGUILayout.ScrollViewScope([Vector2](Vector2.html) scrollPosition,
[GUIStyle](GUIStyle.html) horizontalScrollbar,
[GUIStyle](GUIStyle.html) verticalScrollbar,
params GUILayoutOption[] options);






## Declaration

public EditorGUILayout.ScrollViewScope([Vector2](Vector2.html) scrollPosition,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public EditorGUILayout.ScrollViewScope([Vector2](Vector2.html) scrollPosition,
bool alwaysShowHorizontal,
bool alwaysShowVertical,
[GUIStyle](GUIStyle.html) horizontalScrollbar,
[GUIStyle](GUIStyle.html) verticalScrollbar,
[GUIStyle](GUIStyle.html) background,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| scrollPosition | The scroll position to use. |
| alwaysShowHorizontal | Whether to always show the horizontal scrollbar. If false, it is only shown when the content inside the ScrollView is wider than the scrollview itself. |
| alwaysShowVertical | Whether to always show the vertical scrollbar. If false, it is only shown when the content inside the ScrollView is higher than the scrollview itself. |
| horizontalScrollbar | Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used. |
| verticalScrollbar | Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used. |





### Description



Create a new ScrollViewScope and begin the corresponding ScrollView.


            

This version of Unity is unsupported.


                  **Method group is Obsolete**





# [PropertyDrawer](PropertyDrawer.html).CanCacheInspectorGUI




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













                        **Obsolete**
                        CanCacheInspectorGUI has been deprecated and is no longer used.




## Declaration

public bool CanCacheInspectorGUI([SerializedProperty](SerializedProperty.html) property);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The SerializedProperty to make the custom GUI for. |





### Returns



**bool**
        Whether the drawer's UI can be cached.





### Description



Override this method to determine whether the inspector GUI for your property can be cached.





The default is true.
If your UI is only using [EditorGUI](EditorGUI.html) controls, it is cacheable.
If you're using [Handles](Handles.html), [GL](GL.html), or some other method to draw directly into your rect, then you should override this method and return false when your property is visible.


            

This version of Unity is unsupported.



# [GUILayoutUtility](GUILayoutUtility.html).GetAspectRect




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

public static [Rect](Rect.html) GetAspectRect(float aspect);






## Declaration

public static [Rect](Rect.html) GetAspectRect(float aspect,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static [Rect](Rect.html) GetAspectRect(float aspect,
params GUILayoutOption[] options);






## Declaration

public static [Rect](Rect.html) GetAspectRect(float aspect,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| aspect | The aspect ratio of the element (width / height). |
| style | An optional style. If specified, the style's padding value will be added to the sizes of the returned rectangle & the style's margin values will be used for spacing. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**Rect**
        The rect for the control.





### Description



Reserve layout space for a rectangle with a specific aspect ratio.


            

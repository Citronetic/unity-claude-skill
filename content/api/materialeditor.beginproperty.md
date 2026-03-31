This version of Unity is unsupported.



# [MaterialEditor](MaterialEditor.html).BeginProperty




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

public static void BeginProperty([MaterialProperty](MaterialProperty.html) property);






## Declaration

public static void BeginProperty([Rect](Rect.html) rect,
[MaterialProperty](MaterialProperty.html) property);






## Declaration

public static void BeginProperty([SerializedProperty](SerializedProperty.html) property);






## Declaration

public static void BeginProperty([Rect](Rect.html) rect,
[SerializedProperty](SerializedProperty.html) property);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | The box which encloses the GUI control. May include a label. |
| property | The property this GUI control modifies. |





### Description



Creates a wrapper enabling the Unity Editor to display GUI controls for the property.





The [MaterialEditor](MaterialEditor.html) has methods that display specific Material Properties such as [MaterialEditor.ShaderProperty](MaterialEditor.ShaderProperty.html), or [MaterialEditor.TextureProperty](MaterialEditor.TextureProperty.html).

However, if you display a Property with a GUI control (such as [EditorGUI.Toggle](EditorGUI.Toggle.html)) instead of one of these methods, you can use a property wrapper to configure the visual presentation of this Property. Using a property wrapper enables you to display MaterialVariant overrides in a bold font, provide access to the Apply/Revert options via a right-click menu, disable the GUI for locked Properties, and set the appearance when editing multiple different values.

Property wrappers begin with BeginProperty and end with [MaterialEditor.EndProperty](MaterialEditor.EndProperty.html).
If you do not provide a rect parameter, the Editor tries to determine one by calling [GUILayoutUtility.GetLastRect](GUILayoutUtility.GetLastRect.html) at the end of the scope.

If you use a custom method to display [Material.renderQueue](Material-renderQueue.html), [Material.doubleSidedGI](Material-doubleSidedGI.html), [Material.enableInstancing](Material-enableInstancing.html) or [Material.globalIlluminationFlags](Material-globalIlluminationFlags.html), you can create a property wrapper around the field by using the corresponding [SerializedProperty](SerializedProperty.html).

Additional resources: [MaterialEditor.ShaderProperty](MaterialEditor.ShaderProperty.html), [SerializedProperty](SerializedProperty.html), [MaterialEditor.EndProperty](MaterialEditor.EndProperty.html).


            

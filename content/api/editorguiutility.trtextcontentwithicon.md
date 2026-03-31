This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).TrTextContentWithIcon




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

public static [GUIContent](GUIContent.html) TrTextContentWithIcon(string text,
[Texture](Texture.html) icon);






## Declaration

public static [GUIContent](GUIContent.html) TrTextContentWithIcon(string text,
string iconName);






## Declaration

public static [GUIContent](GUIContent.html) TrTextContentWithIcon(string text,
string tooltip,
string iconName);






## Declaration

public static [GUIContent](GUIContent.html) TrTextContentWithIcon(string text,
string tooltip,
[Texture](Texture.html) icon);






## Declaration

public static [GUIContent](GUIContent.html) TrTextContentWithIcon(string text,
string tooltip,
[MessageType](MessageType.html) messageType);






## Declaration

public static [GUIContent](GUIContent.html) TrTextContentWithIcon(string text,
[MessageType](MessageType.html) messageType);






### Parameters



| Parameter | Description |
| --- | --- |
| text | The text associated with the GUIContent.text. |
| icon | The icon associated with the GUIContent.image. |
| iconName | The name of the icon. |
| tooltip | The tooltip to display when the cursor hovers over the icon. |
| messageType | The type of the message to fetch the icon for. |





### Description



Gets the [GUIContent](GUIContent.html) from Unity built-in resources with the given information or creates a [GUIContent](GUIContent.html) for a GUI element.

The text and the tooltip are localized and loaded with an icon.

Typically, the icon from `Assets/Editor Default Resources/Icons` is fetched using the icon name. Only the name of the icon, without the .png extension is needed.

If a message type is specified instead of an icon or an icon name, the [GUIContent.image](GUIContent-image.html) is the icon associated with that message type.


            

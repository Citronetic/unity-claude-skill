This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).ShowObjectPicker




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

public static void ShowObjectPicker([Object](Object.html) obj,
bool allowSceneObjects,
string searchFilter,
int controlID);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The object to be selected by default. |
| allowSceneObjects | Is selection of Scene objects allowed, or should it only show assets. |
| searchFilter | The default search filter to apply. This is the initial search query text that applies when the object picker is opened. |
| controlID | The id of the control to set. This is useful if you are showing more than one of these. You can get the value at a later time. |





### Description



Show the object picker from code.





<T>: The type of objects that are available to pick in the object picker.

Once the user interacts with the object picker, it responds by sending `ExecuteCommand` events back to the  `OnGUI` that called this function. The messages are:



          - `ObjectSelectorUpdated`: The selected object was changed. Call [GetObjectPickerObject](EditorGUIUtility.GetObjectPickerObject.html) to read the selected object.

          - `ObjectSelectorClosed`: The user closed the object picker.

          - `ObjectSelectorCanceled`: The user canceled the picking operation and the object picked closed.





Here is an example of how it could be called for any control during an OnGUI call:


              


```
static void CallShowPicker<T>(UnityEngine.Object currentObjectValue, int currentControlId) where T : UnityEngine.Object
{
    // Show an object picker with the `currentObjectValue` selected. We pass true to allow
    // scene objects. We set the initial search query string to an empty string. The `currentControlId`
    // is passed to us during the OnGUI call, for any object field or other control that needs to show the object picker.
    EditorGUIUtility.ShowObjectPicker<T>(currentObjectValue, true, "", currentControlId);
}
```





Here is how an object field that uses the previous method could be setup during an OnGUI call:


              


```
public static void DoObjectField(Rect position, SerializedProperty property, Type objType, GUIContent label)
{
    label = EditorGUI.BeginProperty(position, label, property);
    // Generate a controlId for this object field. Use a unique hint integer for correct matching of controls.
    var controlId = GUIUtility.GetControlID("Example_EditorGUIUtility_ShowObjectPicker".GetHashCode(), FocusType.Keyboard, position);
    position = EditorGUI.PrefixLabel(position, controlId, label);
    DoObjectField(position, position, controlId, objType, property);
    EditorGUI.EndProperty();
}
```





Finally, here is how you could handle the ExecuteCommand events during an OnGUI call:


              


```
static bool HandleCommands(SerializedProperty property, ref UnityEngine.Object currentObjectValue, UnityEngine.Object originalObjectValue, Type objectType, int currentControlId)
{
    var evt = Event.current;
    switch (evt.type)
    {
        case EventType.ExecuteCommand:
            string commandName = evt.commandName;
            if (commandName == "ObjectSelectorUpdated" && EditorGUIUtility.GetObjectPickerControlID() == currentControlId)
            {
                currentObjectValue = AssignSelectedObject(EditorGUIUtility.GetObjectPickerObject(), property, objectType, evt);
                return true;
            }
            if (commandName == "ObjectSelectorClosed" && EditorGUIUtility.GetObjectPickerControlID() == currentControlId)
            {
                return true;
            }
            if (commandName == "ObjectSelectorCanceled" && EditorGUIUtility.GetObjectPickerControlID() == currentControlId)
            {
                if (property != null)
                    property.objectReferenceValue = originalObjectValue;
                else
                    currentObjectValue = originalObjectValue;
                return true;
            }
            break;
        default:
            return false;
    }

    return false;
}
```


            

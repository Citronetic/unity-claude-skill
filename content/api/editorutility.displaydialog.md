This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).DisplayDialog




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

public static bool DisplayDialog(string title,
string message,
string ok,
string cancel = "");






### Parameters



| Parameter | Description |
| --- | --- |
| title | The title of the message box. |
| message | The text of the message. |
| ok | Label displayed on the OK dialog button. |
| cancel | Label displayed on the Cancel dialog button. |





### Returns



**bool**
        Returns `true` if the user clicks the OK button. Returns `false` otherwise.





### Description



This method displays a modal dialog.





Use it for displaying message boxes in the Editor.

`ok` and `cancel` are labels to be displayed on the dialog buttons. If `cancel` is empty (the default), then only
one button is displayed. DisplayDialog returns `true` if `ok` button is pressed.

For dialog boxes that might be shown repeatedly, consider using an overload of this method that takes a [DialogOptOutDecisionType](DialogOptOutDecisionType.html) as described in the below the code example.

Additional resources: [EditorUtility.DisplayDialogComplex](EditorUtility.DisplayDialogComplex.html) function.

[Image: image]

*Dialog box that shows info on the number of objects to be placed on the surface.*


              


```
// Places the selected Objects on the surface of a terrain.using UnityEngine;
using UnityEditor;public class PlaceSelectionOnSurface : ScriptableObject
{
    [MenuItem("Example/Place Selection On Surface")]
    static void CreateWizard()
    {
        Transform[] transforms = Selection.GetTransforms(SelectionMode.Deep |
            SelectionMode.ExcludePrefab | SelectionMode.Editable);        if (transforms.Length > 0 &&
            EditorUtility.DisplayDialog("Place Selection On Surface?",
                "Are you sure you want to place " + transforms.Length
                + " on the surface?", "Place", "Do Not Place"))
        {
            Undo.RecordObjects(transforms, "Place Selection On Surface");
            foreach (Transform transform in transforms)
            {
                RaycastHit hit;
                if (Physics.Raycast(transform.position, -Vector3.up, out hit))
                {
                    transform.position = hit.point;
                    Vector3 randomized = Random.onUnitSphere;
                    randomized = new Vector3(randomized.x, 0F, randomized.z);
                    transform.rotation = Quaternion.LookRotation(randomized, hit.normal);
                }
            }
        }
    }
}
```




---








## Declaration

public static bool DisplayDialog(string title,
string message,
string ok,
[DialogOptOutDecisionType](DialogOptOutDecisionType.html) dialogOptOutDecisionType,
string dialogOptOutDecisionStorageKey);






## Declaration

public static bool DisplayDialog(string title,
string message,
string ok,
string cancel = "",
[DialogOptOutDecisionType](DialogOptOutDecisionType.html) dialogOptOutDecisionType,
string dialogOptOutDecisionStorageKey);






### Parameters



| Parameter | Description |
| --- | --- |
| title | The title of the message box. |
| message | The text of the message. |
| ok | Label displayed on the OK dialog button. |
| cancel | Label displayed on the Cancel dialog button. |
| dialogOptOutDecisionType | The type of opt-out decision a user can make. |
| dialogOptOutDecisionStorageKey | The unique key setting to store the decision under. |





### Returns



**bool**

          `true` if the user clicks the `ok` button, or previously opted out. Returns `false` if the user cancels or closes the dialog without making a decision.





### Description



This method displays a modal dialog that lets the user opt-out of being shown the current dialog box again.





Use this method to display dialog boxes in the Editor that might be shown repeatedly. Choose which EditorUtility.DialogOptOutDecisionType to use based on how often you think users encounter this message and how often you want to remind them of it.

If the user opts-out of seeing the dialog box associated with the provided `dialogOptOutDecisionStorageKey`, Unity doesn't show the dialog box and this method immediately returns `true`.

`ok` and `cancel` are labels displayed on the dialog buttons. If `cancel` is empty, the button displays as "Cancel". This is the default setting. DisplayDialog returns `true` if the user presses the `ok` button.

If the user opts-out of the dialog box, Unity stores this decision. If `dialogOptOutDecisionType` is set to [DialogOptOutDecisionType.ForThisMachine](DialogOptOutDecisionType.ForThisMachine.html) Unity stores the decision via [EditorPrefs.SetBool](EditorPrefs.SetBool.html). If `dialogOptOutDecisionType` is set to [DialogOptOutDecisionType.ForThisSession](DialogOptOutDecisionType.ForThisSession.html) Unity stores the decision via [SessionState.SetBool](SessionState.SetBool.html). In both cases Unity stores the decision under the key provided as `dialogOptOutDecisionStorageKey`.

If you want to the let the user change the decision that is stored in [EditorPrefs](EditorPrefs.html), you can add this to the Editor Preferences with a [SettingsProvider](SettingsProvider.html).

Use [DialogOptOutDecisionType.ForThisSession](DialogOptOutDecisionType.ForThisSession.html) to show a dialog before a user performs a destructive action that might lose some of their work. If you think the user might see this dialog too often, you can add an option to the Editor Preferences with a [SettingsProvider](SettingsProvider.html) by using [EditorPrefs](EditorPrefs.html) and query that setting before showing the dialog.

Additional resources: [EditorUtility.DisplayDialogComplex](EditorUtility.DisplayDialogComplex.html) function.


              


```
// Places the selected Objects on the surface of a terrain.using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;public class PlaceSelectionOnSurface : ScriptableObject
{
    const string placeOnSurfaceDialogDecisionKey = "Example.PlaceOnSurfaceDecision";
    [MenuItem("Example/Place Selection On Surface")]
    static void CreateWizard()
    {
        Transform[] transforms = Selection.GetTransforms(SelectionMode.Deep |
            SelectionMode.ExcludePrefab | SelectionMode.Editable);        if (transforms.Length > 0 &&
            EditorUtility.DisplayDialog("Place Selection On Surface?",
                "Are you sure you want to place " + transforms.Length
                + " on the surface?", "Place", "Do Not Place", DialogOptOutDecisionType.ForThisMachine, placeOnSurfaceDialogDecisionKey))
        {
            // Register and Undo event so that this action is not only not desctrutive but also easy to revert.
            // Without Undo, DialogOptOutDecisionType.ForThisSession would be a better fiting decision type.
            Undo.RecordObjects(transforms, "Place Selection On Surface");
            foreach (Transform transform in transforms)
            {
                RaycastHit hit;
                if (Physics.Raycast(transform.position, -Vector3.up, out hit))
                {
                    transform.position = hit.point;
                    Vector3 randomized = Random.onUnitSphere;
                    randomized = new Vector3(randomized.x, 0F, randomized.z);
                    transform.rotation = Quaternion.LookRotation(randomized, hit.normal);
                }
            }
        }
    }
}
```


            

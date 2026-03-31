This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).DisplayDialogComplex




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

public static int DisplayDialogComplex(string title,
string message,
string ok,
string cancel,
string alt);






### Parameters



| Parameter | Description |
| --- | --- |
| title | Title for dialog. |
| message | Purpose for the dialog. |
| ok | Dialog function chosen. |
| cancel | Close dialog with no operation. |
| alt | Choose alternative dialog purpose. |





### Returns



**int**
        Returns the ID of a button. IDs are 0, 1, or 2 and they correspond to the `ok`, `cancel` and `alt` buttons respectively. An ID of 1, which corresponds to `cancel`, returns if the dialog is closed or the user presses the Escape key.





### Description



Displays a modal dialog with three buttons.





Use it for displaying message boxes in the Editor.

`DisplayDialogComplex` is similar to [DisplayDialog](EditorUtility.DisplayDialog.html). This `DisplayDialogComplex` member
shows a dialog with three buttons. These buttons represent `ok`, `cancel` and `alt`.
`DisplayDialogComplex` returns an integer 0, 1 or 2 corresponding to the `ok`, `cancel` and `alt` buttons.

The `ok` button is the default option, and can also be activated by pressing Enter.

The `cancel` button is considered the "cancel" button and should usually not perform any action. On a PC, this can also be activated by pressing Escape or by clicking the dialog window close button. On a Mac, this can also be activated by pressing Escape, provided the button is called "Cancel".

The `alt` button allows you to provide the user with an alternative choice in addition to the `ok` and `cancel` buttons. This button does not have a fixed keyboard shortcut.

For compliance with platform UI guidelines, the actual display order of the buttons is platform-dependent:



          - On Windows, the display order is: `ok`, `alt`, then `cancel`.

          - On macOS, the display order is: `alt`, `cancel`, then `ok`.





Additional resources: [DisplayDialog](EditorUtility.DisplayDialog.html).

[Image: image]

*macOS display dialog buttons for the example below.*

[Image: image]

*PC display dialog buttons for the example below.*

The script reference example below creates a complex display dialog.  The chosen button
causes a Unity [EditorApplication](EditorApplication.html) static function to be called.


              


```
using UnityEngine;
using UnityEditor;public class DisplayDlgComplexExample : EditorWindow
{
    // Lets you save or not before quitting, or cancel.    [MenuItem("Example/Quit")]
    static void Init()
    {
        int option = EditorUtility.DisplayDialogComplex("Unsaved Changes",
            "Do you want to save the changes you made before quitting?",
            "Save",
            "Cancel",
            "Don't Save");        switch (option)
        {
            // Save.
            case 0:
                EditorApplication.SaveScene(EditorApplication.currentScene);
                EditorApplication.Exit(0);
                break;            // Cancel.
            case 1:
                break;            // Don't Save.
            case 2:
                EditorApplication.Exit(0);
                break;            default:
                Debug.LogError("Unrecognized option.");
                break;
        }
    }
}
```


            

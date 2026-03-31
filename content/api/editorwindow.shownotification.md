This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).ShowNotification




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

public void ShowNotification([GUIContent](GUIContent.html) notification);






### Parameters



| Parameter | Description |
| --- | --- |
| notification | The contents of the notification message. |
| fadeoutWait | The duration the notification is displayed. Measured in seconds. |





### Description



Show a notification message.





Displays notification message on the window. Unlike message boxes or log messages notification will fade out automatically after some time.
Call [RemoveNotification](EditorWindow.RemoveNotification.html) to remove it immediately.

[Image: image]

*Show a notification in an editor window.*


              


```
// Simple example that shows a notification message
// that the user has typed.

using UnityEditor;
using UnityEngine;
using UnityEngine.Playables;
using UnityEngine.UIElements;

public class NotificationWindow : EditorWindow
{

    string notification = "This is a notification";

    [MenuItem("Examples/Notification Window")]
    public static void ShowExample()
    {
        NotificationWindow wnd = GetWindow<NotificationWindow>();
        wnd.titleContent = new GUIContent("Notification Window");
    }

    public void CreateGUI()
    {
        // Create button to show notification
        Button showNotification = new Button();
        showNotification.text = "Show!";
        showNotification.clicked += () =>
        {
            this.ShowNotification(new GUIContent(notification));
        };

        rootVisualElement.Add(showNotification);

        // Create button to remove notification
        Button removeNotification = new Button();
        removeNotification.text = "Remove!";
        removeNotification.clicked += () =>
        {
            this.RemoveNotification();
        };

        rootVisualElement.Add(removeNotification);
    }
}
```


            

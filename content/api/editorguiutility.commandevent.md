This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).CommandEvent




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

public static [Event](Event.html) CommandEvent(string commandName);






### Parameters



| Parameter | Description |
| --- | --- |
| commandName | The command to be sent. |





### Description



Creates an event that can be sent to another window.


              


```
// Sends a paste event to an EditorWindow, as if Paste
// was selected from the Edit menu.using UnityEngine;
using UnityEditor;public class CommandEventExample : EditorWindow
{
    [MenuItem("Examples/CommandEvent example")]
    static void commandEventExample()
    {
        CommandEventExample window = EditorWindow.GetWindowWithRect<CommandEventExample>(new Rect(0, 0, 150, 40));
        window.Show();
    }    void OnGUI()
    {
        if (GUILayout.Button("Paste"))
        {
            Event e = EditorGUIUtility.CommandEvent("Paste");
            EditorWindow ew = EditorWindow.GetWindow<CommandEventTest>(true);
            ew.SendEvent(e);
        }
    }
}
```





The script below receives the Paste message sent from
          CommandEventExample above.


              


```
using UnityEngine;
using UnityEditor;public class CommandEventTest : EditorWindow
{
    private int eventCount = 0;    [MenuItem("Examples/Example that receives a paste event")]
    static void test()
    {
        CommandEventTest window = EditorWindow.GetWindowWithRect<CommandEventTest>(new Rect(0, 0, 100, 40));
        window.Show();
    }    void OnGUI()
    {
        EditorGUI.LabelField(new Rect(10, 10, 90, 30), "Paste: " + eventCount.ToString());        if (Event.current.type == EventType.ExecuteCommand)
        {
            Event e = Event.current;
            if (e.commandName == "Paste")
            {
                eventCount = eventCount + 1;
            }
        }
    }
}
```


            

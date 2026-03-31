This version of Unity is unsupported.



# [PlayerConnectionGUI](Networking.PlayerConnection.PlayerConnectionGUI.html).ConnectionTargetSelectionDropdown




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

public static void ConnectionTargetSelectionDropdown([Rect](Rect.html) rect,
[Networking.PlayerConnection.IConnectionState](Networking.PlayerConnection.IConnectionState.html) state,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | Where to draw the drop-down button. |
| state | The state for the connection that is used in the EditorWindow displaying this drop-down. Use PlayerConnectionGUIUtility.GetConnectionState to get a state in OnEnable and remember to dispose of that state in OnDisable. |
| style | Define the GUIStyle the drop-down button should be drawn in. A default drop-down button will be drawn if no style is specified. |





### Description



Display a drop-down button and menu for the user to choose and establish a connection to a Player.





This is the same control that is used in the toolbars of the [Profiler Window](../Manual/ProfilerWindow.html), [Frame Debugger](../Manual/FrameDebugger.html) or [Console Window](../Manual/Console.html). The drop-down will list all available Players and Editors that your Editor can connect to and that are discoverable. It also offers an entry to directly connect to an IP address.
You will need to provide the state of the connection used for your [EditorWindow](EditorWindow.html). To get one, use [PlayerConnectionGUIUtility.GetConnectionState](Networking.PlayerConnection.PlayerConnectionGUIUtility.GetConnectionState.html) in OnEnable and remember to dispose of the state in OnDisable of the [EditorWindow](EditorWindow.html) you're using it in.

This class currently only works for the connection that the Profiling tools and the Console use. In a future release this will work with [PlayerConnection](Networking.PlayerConnection.PlayerConnection.html).


              


```
using UnityEngine;
using UnityEngine.Profiling;
using UnityEditor;
using UnityEngine.Networking.PlayerConnection;
using UnityEditor.Networking.PlayerConnection;public class MyWindow : EditorWindow
{
    // The state can survive for the life time of the EditorWindow so it's best to store it here and just renew/dispose of it in OnEnable and OnDisable, rather than fetching repeatedly it in OnGUI.
    IConnectionState attachProfilerState;    [MenuItem("Window/My Window")]
    static void Init()
    {
        MyWindow window = (MyWindow)GetWindow(typeof(MyWindow));
        window.Show();
    }    private void OnEnable()
    {
        // The state of the connection is not getting serialized and needs to be disposed
        // Therefore, it's recommended to fetch it in OnEnable and call Dispose() on it in OnDisable
        attachProfilerState = PlayerConnectionGUIUtility.GetConnectionState(this, OnConnected);
    }    private void OnConnected(string player)
    {
        Debug.Log(string.Format("MyWindow connected to {0}", player));
    }    private void OnGUI()
    {
        // Draw a toolbar across the top of the window and draw the drop-down in the toolbar drop-down style too
        EditorGUILayout.BeginHorizontal(EditorStyles.toolbar);
        var rect = GUILayoutUtility.GetRect(100, EditorGUIUtility.singleLineHeight, EditorStyles.toolbarDropDown);
        PlayerConnectionGUI.ConnectionTargetSelectionDropdown(rect, attachProfilerState, EditorStyles.toolbarDropDown);        switch (attachProfilerState.connectedToTarget)
        {
            case ConnectionTarget.None:
                //This case can never happen within the Editor, since the Editor will always fall back onto a connection to itself.
                break;
            case ConnectionTarget.Player:
                Profiler.enabled = GUILayout.Toggle(Profiler.enabled, string.Format("Profile the attached Player ({0})", attachProfilerState.connectionName), EditorStyles.toolbarButton);
                break;
            case ConnectionTarget.Editor:
                // The name of the Editor or the PlayMode Player would be "Editor" so adding the connectionName here would not add anything.
                Profiler.enabled = GUILayout.Toggle(Profiler.enabled, "Profile the Player in the Editor", EditorStyles.toolbarButton);
                break;
            default:
                break;
        }
        EditorGUILayout.EndHorizontal();
    }    private void OnDisable()
    {
        // Remember to always dispose of the state!
        attachProfilerState.Dispose();
    }
}
```





Also see [PlayerConnectionGUI.ConnectionTargetSelectionDropdown](Networking.PlayerConnection.PlayerConnectionGUI.ConnectionTargetSelectionDropdown.html) for automatic layouts as well as [PlayerConnectionGUIUtility.GetConnectionState](Networking.PlayerConnection.PlayerConnectionGUIUtility.GetConnectionState.html) and [IConnectionState](Networking.PlayerConnection.IConnectionState.html) for details of the state handling for this UI control.


            

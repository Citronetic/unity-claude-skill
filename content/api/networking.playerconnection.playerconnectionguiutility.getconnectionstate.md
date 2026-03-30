This version of Unity is unsupported.



# [PlayerConnectionGUIUtility](Networking.PlayerConnection.PlayerConnectionGUIUtility.html).GetConnectionState




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

public static [Networking.PlayerConnection.IConnectionState](Networking.PlayerConnection.IConnectionState.html) GetConnectionState([EditorWindow](EditorWindow.html) parentWindow,
Action<string> connectedCallback);






### Parameters



| Parameter | Description |
| --- | --- |
| parentWindow | The EditorWindow that will use the connection. |
| connectedCallback | A callback that is fired whenever a user-initiated connection-attempt succeeds. |





### Returns



**IConnectionState**
        Returns the unserialized state of the connection to a Player, which is used in [PlayerConnectionGUI.ConnectionTargetSelectionDropdown](Networking.PlayerConnection.PlayerConnectionGUI.ConnectionTargetSelectionDropdown.html) or [PlayerConnectionGUILayout.ConnectionTargetSelectionDropdown](Networking.PlayerConnection.PlayerConnectionGUILayout.ConnectionTargetSelectionDropdown.html). The returned connection state object contains information on what target is connected to the Player, and what targets are available.





### Description



This method generates a state tracking object for establishing and displaying an Editor to Player Connection.





This state and the corresponding GUI Methods ([PlayerConnectionGUI.ConnectionTargetSelectionDropdown](Networking.PlayerConnection.PlayerConnectionGUI.ConnectionTargetSelectionDropdown.html) and [PlayerConnectionGUILayout.ConnectionTargetSelectionDropdown](Networking.PlayerConnection.PlayerConnectionGUILayout.ConnectionTargetSelectionDropdown.html)) are supposed to be used from within an [EditorWindow](EditorWindow.html). The supplied Editor Window is used to:
1. Display an overlay while connecting
2. Repaint the window after a connection has been established
3. Receive callback calls through connectedCallback when other windows using the same connection type establish a connection
Technically, it might be possible to supply parentWindow as null and use it outside of [EditorWindow](EditorWindow.html), but that is neither recommended nor a use-case we plan to support.

Also keep in mind that the received state is not serialized and needs to be disposed. The recommended use pattern is to get the state in the [EditorWindow](EditorWindow.html)'s OnEnable and to dispose of it in OnDisable.

The connectedCallback will not be fired if, for example, the connection was made by automatically establishing a profiler connection to a Player or falling back on to the connection to the Editor. Instead, it only responds to a user actively choosing a target, and waits until that connection has been established. If the connection type is one that is shared across Editor windows, it will also be fired when the user chooses it in a different [EditorWindow](EditorWindow.html).

The returned state knows what target is currently connected and what targets are available.


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
        // Therefore, it's recommended to fetch it in OnEnable and call dispose on it in OnDisable
        attachProfilerState = PlayerConnectionGUIUtility.GetConnectionState(this, OnConnected);
    }    private void OnConnected(string player)
    {
        Debug.Log(string.Format("MyWindow connected to {0}", player));
    }    private void OnGUI()
    {
        // Draw a toolbar across the top of the window and draw the drop-down in the toolbar drop-down style too
        EditorGUILayout.BeginHorizontal(EditorStyles.toolbar);
        PlayerConnectionGUILayout.ConnectionTargetSelectionDropdown(attachProfilerState, EditorStyles.toolbarDropDown);        switch (attachProfilerState.connectedToTarget)
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
        // Remember to always dispose the state!
        attachProfilerState.Dispose();
    }
}
```


            

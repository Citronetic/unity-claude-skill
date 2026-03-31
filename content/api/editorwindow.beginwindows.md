This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).BeginWindows




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

public void BeginWindows();






### Description



Mark the beginning area of all popup windows.





[GUI.Window](GUI.Window.html) behaves somewhat differently in the editor than inside your games. In games, [GUI.Window](GUI.Window.html) pops up a window on your screen. In the editor,
[GUI.Window](GUI.Window.html) shows a subwindow inside one of your editor windows. Begin/EndWindows is used to determine where these can go.
You need to have all calls to [GUI.Window](GUI.Window.html) or [GUILayout.Window](GUILayout.Window.html) inside a [BeginWindows](EditorWindow.BeginWindows.html) / [EndWindows](EditorWindow.EndWindows.html) pair. Like this:

[Image: image]

*Simple editor Window with a window and a button inside.*

An exception to this rule is within [Editor.OnSceneGUI](Editor.OnSceneGUI.html), where a window scope is implicit.


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;

public class IMGUIWindowDemo : EditorWindow
{
    // The position of the window
    public Rect windowRect = new Rect(100, 100, 200, 200);
    void OnGUI()
    {
        BeginWindows();

        // All GUI.Window or GUILayout.Window must come inside here
        windowRect = GUILayout.Window(1, windowRect, DoWindow, "Hi There");

        EndWindows();
    }

    // The window function. This works just like ingame GUI.Window
    void DoWindow(int unusedWindowID)
    {
        GUILayout.Button("Hi");
        GUI.DragWindow();
    }

    // Add menu item to show this demo.
    [MenuItem("Test/GUIWindow Demo")]
    static void Init()
    {
        EditorWindow.GetWindow(typeof(IMGUIWindowDemo));
    }
}
```





The placement of the [BeginWindows](EditorWindow.BeginWindows.html) / [EndWindows](EditorWindow.EndWindows.html) pair determines where popup windows will appear; all windows are clipped to the clipping area
defined by [GUI.BeginGroup](GUI.BeginGroup.html) or [GUI.BeginScrollView](GUI.BeginScrollView.html). A small example of that

[Image: image]

*Simple editor window with a window and a button inside using scroll bars.*


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;

public class IMGUIWindowDemo2 : EditorWindow
{
    // The position of the window
    public Rect windowRect = new Rect(100, 100, 200, 200);

    // Scroll position
    public Vector2 scrollPos = Vector2.zero;

    void OnGUI()
    {
        // Set up a scroll view
        scrollPos = GUI.BeginScrollView(new Rect(0, 0, position.width, position.height), scrollPos, new Rect(0, 0, 1000, 1000));

        // Same code as before - make a window. Only now, it's INSIDE the scrollview
        BeginWindows();
        windowRect = GUILayout.Window(1, windowRect, DoWindow, "Hi There");
        EndWindows();
        // Close the scroll view
        GUI.EndScrollView();
    }

    void DoWindow(int unusedWindowID)
    {
        GUILayout.Button("Hi");
        GUI.DragWindow();
    }

    [MenuItem("Test/GUIWindow Demo 2")]
    static void Init()
    {
        EditorWindow.GetWindow(typeof(IMGUIWindowDemo2));
    }
}
```


            

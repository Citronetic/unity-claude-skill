This version of Unity is unsupported.



# [GenericMenu](GenericMenu.html).AddItem




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

public void AddItem([GUIContent](GUIContent.html) content,
bool on,
[GenericMenu.MenuFunction](GenericMenu.MenuFunction.html) func);






### Parameters



| Parameter | Description |
| --- | --- |
| content | The GUIContent to add as a menu item. |
| on | Specifies whether to show the item is currently activated (i.e. a tick next to the item in the menu). |
| func | The function to call when the menu item is selected. |





### Description



Add an item to the menu.





Additional resources: [GenericMenu.AddDisabledItem](GenericMenu.AddDisabledItem.html), [GenericMenu.AddSeparator](GenericMenu.AddSeparator.html).




---








## Declaration

public void AddItem([GUIContent](GUIContent.html) content,
bool on,
[GenericMenu.MenuFunction2](GenericMenu.MenuFunction2.html) func,
object userData);






### Parameters



| Parameter | Description |
| --- | --- |
| content | The GUIContent to add as a menu item. |
| on | Specifies whether to show the item is currently activated (i.e. a tick next to the item in the menu). |
| func | The function to call when the menu item is selected. |
| userData | The data to pass to the function called when the item is selected. |





### Description



Add an item to the menu.





Additional resources: [GenericMenu.AddDisabledItem](GenericMenu.AddDisabledItem.html), [GenericMenu.AddSeparator](GenericMenu.AddSeparator.html).


              


```
// This example shows how to create a context menu inside a custom EditorWindow.
using UnityEngine;
using UnityEditor;public class MyWindow : EditorWindow
{
    [MenuItem("TestContextMenu/Open Window")]
    public static void Init()
    {
        var window = GetWindow(typeof(MyWindow));
        window.position = new Rect(50, 50, 250, 60);
        window.Show();
    }    public void Callback(object obj)
    {
        Debug.Log("Selected: " + obj);
    }    public void OnGUI()
    {
        Event evt = Event.current;
        Rect contextRect = new Rect(10, 10, 100, 100);        if (evt.type == EventType.ContextClick)
        {
            Vector2 mousePos = evt.mousePosition;
            if (contextRect.Contains(mousePos))
            {
                // Now create the menu, add items and show it
                GenericMenu menu = new GenericMenu();                menu.AddItem(new GUIContent("MenuItem1"), false, Callback, "item 1");
                menu.AddItem(new GUIContent("MenuItem2"), false, Callback, "item 2");
                menu.AddSeparator("");
                menu.AddItem(new GUIContent("SubMenu/MenuItem3"), false, Callback, "item 3");
                menu.AddItem(new GUIContent("SubMenu/MenuItem4"), false, Callback, "item 4");
                menu.AddItem(new GUIContent("SubMenu/MenuItem5"), false, Callback, "item 5");
                menu.AddSeparator("SubMenu/");
                menu.AddItem(new GUIContent("SubMenu/MenuItem6"), false, Callback, "item 6");                menu.ShowAsContext();                evt.Use();
            }
        }
    }
}
```


              


```
// This example shows how to create a context menu inside a custom EditorWindow.
using UnityEngine;
using UnityEditor;public class MyWindow : EditorWindow
{
    [MenuItem("TestContextMenu/Open Window")]
    public static void Init()
    {
        var window = GetWindow(typeof(MyWindow));
        window.position = new Rect(50, 50, 250, 60);
        window.Show();
    }    bool item2enabled = false;
    public void Toggle()
    {
        item2enabled = !item2enabled;
        Debug.Log("item2enabled: " + item2enabled);
    }    public void Item2Callback()
    {
        Debug.Log("Item 2 Selected");
    }    public void OnGUI()
    {
        Event evt = Event.current;
        Rect contextRect = new Rect(10, 10, 100, 100);        if (evt.type == EventType.ContextClick)
        {
            Vector2 mousePos = evt.mousePosition;
            if (contextRect.Contains(mousePos))
            {
                // Now create the menu, add items and show it
                GenericMenu menu = new GenericMenu();                menu.AddItem(new GUIContent("Toggle item 2"), item2enabled, Toggle);
                if (item2enabled)
                {
                    menu.AddItem(new GUIContent("Item 2"), false, Item2Callback);
                }
                else
                {
                    menu.AddDisabledItem(new GUIContent("Item 2"));
                }                menu.ShowAsContext();                evt.Use();
            }
        }
    }
}
```


            

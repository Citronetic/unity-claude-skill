This version of Unity is unsupported.



# [DropdownMenu](UIElements.DropdownMenu.html).AppendAction




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

public void AppendAction(string actionName,
Action<DropdownMenuAction> action,
Func<DropdownMenuAction,Status> actionStatusCallback,
object userData);






### Parameters



| Parameter | Description |
| --- | --- |
| actionName | The name of the item. This name is displayed in the dropdown menu. |
| action | The callback to execute when the user selects this item in the menu. |
| actionStatusCallback | The callback to execute to determine the status of this item. |
| userData | The object to store in the userData property of the DropdownMenuAction item. |





### Description



Adds an item that executes an action in the dropdown menu.





The item is added to the end of the current item list.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;public class ContextMenuWindow : EditorWindow
{
    [MenuItem("My/Context Menu Window")]
    static void ShowMe() => GetWindow<ContextMenuWindow>();    void CreateGUI()
    {
        var contextMenuContainer = new VisualElement();
        contextMenuContainer.style.flexGrow = 1;
        contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>
        {
            e.menu.AppendAction("Submenu/My Action 1", a => Debug.Log("My Action 1 Works"), action =>
            {
                action.tooltip = "Status dependent tooltip";
                return DropdownMenuAction.Status.Normal;
            }, null);
        }));        rootVisualElement.Add(contextMenuContainer);
    }
}
```




---








## Declaration

public void AppendAction(string actionName,
Action<DropdownMenuAction> action,
[UIElements.DropdownMenuAction.Status](UIElements.DropdownMenuAction.Status.html) status);






### Parameters



| Parameter | Description |
| --- | --- |
| actionName | The name of the item. This name is displayed in the dropdown menu. |
| action | The callback to execute when the user selects this item in the menu. |
| status | The status of the item. |





### Description



Adds an item that executes an action in the dropdown menu.





The item is added to the end of the current item list.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;public class ContextMenuWindow : EditorWindow
{
    [MenuItem("My/Context Menu Window")]
    static void ShowMe() => GetWindow<ContextMenuWindow>();    void CreateGUI()
    {
        var contextMenuContainer = new VisualElement();
        contextMenuContainer.style.flexGrow = 1;
        contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>
        {
            e.menu.AppendAction("My Action 1", a => Debug.Log("My Action 1 Works"), DropdownMenuAction.Status.Normal);
        }));        rootVisualElement.Add(contextMenuContainer);
    }
}
```


            

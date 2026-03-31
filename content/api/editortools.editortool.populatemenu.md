This version of Unity is unsupported.



# [EditorTool](EditorTools.EditorTool.html).PopulateMenu




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

public void PopulateMenu([UIElements.DropdownMenu](UIElements.DropdownMenu.html) menu);






### Parameters



| Parameter | Description |
| --- | --- |
| menu | The Scene view context menu to add menu items to. |





### Description



Adds menu items to Scene view context menu.





Refer to MenuUtility for utility functions that add menu items to the Scene view context menu.


              


```
public override void PopulateMenu(DropdownMenu menu)
{
    // Add all clipboard operations to the context menu (Cut, Copy, Paste, Delete, and Duplicate).
    ContextMenuUtility.AddClipboardEntriesTo(menu);

    // Add an item to the context menu using a delegate or an EditorAction.
    menu.AppendAction("Parent Item/Child Item", (item) => Debug.Log("Executed Child Item."));

    // Add an item to the context menu using a predefined MenuItem.
    ContextMenuUtility.AddMenuItem(menu, "GameObject/Move To View");
}
```


            

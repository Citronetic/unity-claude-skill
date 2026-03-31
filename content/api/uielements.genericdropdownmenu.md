This version of Unity is unsupported.



# GenericDropdownMenu





class in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



















### Description



GenericDropdownMenu allows you to display contextual menus with default textual options or any [VisualElement](UIElements.VisualElement.html).





The GenericDropdownMenu is a generic implementation of a dropdown menu that you can use in both Editor UI and runtime UI.


The following example creates a dropdown menu with three items. It displays the menu when the user clicks the button. The example also demonstrates how to set
 the width of the dropdown menu with the `DropDown` method.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;public class MenuExample : EditorWindow
{    [MenuItem("Window/UI Toolkit/MenuExample")]
    public static void ShowExample()
    {
        MenuExample wnd = GetWindow<MenuExample>();
        wnd.titleContent = new GUIContent("MenuExample");
    }
    public void CreateGUI()
    {
        VisualElement root = rootVisualElement;        // Create a button.
        var button = new Button();
        button.text = "Button";
        button.style.width = 70;        // Create a dropdown menu with three items.
        var menu = new GenericDropdownMenu();
        menu.AddItem("Item 1", false, a => { Debug.Log("Item 1 was selected"); }, null);
        menu.AddItem("Item 2", false, a => { Debug.Log("Item 2 was selected"); }, null);
        menu.AddItem("Item 3 has a very very long label", false, a => { Debug.Log("Item 3 was selected"); }, null);        // When the button is clicked, the dropdown menu is displayed aligned with the button's world boundaries.
        button.clicked += () =>
        {
            // The third and the fourth parameters of the DropDown set the width of the dropdown menu.
            // This sets the width of the dropdown menu to the width of the container.
            menu.DropDown(button.worldBound, button, false);
            // This sets the width of the dropdown menu to the width of the button.
            // menu.DropDown(button.worldBound, button, true, false);
            // This sets the width of the dropdown menu to the width of the longest item.
            // menu.DropDown(button.worldBound, button, true, true);
        };
         root.Add(button);
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| checkmarkUssClassName | USS class name of separators in elements of this type. |
| containerInnerUssClassName | USS class name of inner containers in elements of this type. |
| containerOuterUssClassName | USS class name of outer containers in elements of this type. |
| contentWidthUssClassName | USS class name that's added when the GenericDropdownMenu fits the width of its content. |
| itemContentUssClassName | USS class name of labels in elements of this type. |
| itemUssClassName | USS class name of labels in elements of this type. |
| labelUssClassName | USS class name of labels in elements of this type. |
| separatorUssClassName | USS class name of separators in elements of this type. |
| ussClassName | USS class name of elements of this type. |





### Properties



| Property | Description |
| --- | --- |
| contentContainer | Returns the content container for the GenericDropdownMenu. Allows users to create their own
 dropdown menu if they don't want to use the default implementation. |





### Constructors



| Constructor | Description |
| --- | --- |
| GenericDropdownMenu | Initializes and returns an instance of GenericDropdownMenu. |





### Public Methods



| Method | Description |
| --- | --- |
| AddDisabledItem | Adds a disabled item to this menu using a default VisualElement. |
| AddItem | Adds an item to this menu using a default VisualElement. |
| AddSeparator | Adds a visual separator after the previously added items in this menu. |
| DropDown | Displays the menu at the specified position. |


            

This version of Unity is unsupported.



# [IHasCustomMenu](IHasCustomMenu.html).AddItemsToMenu




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

public void AddItemsToMenu([GenericMenu](GenericMenu.html) menu);






### Description



Adds your custom menu items to an Editor Window.





The following example shows how you can implement this method in a class that derives from [EditorWindow](EditorWindow.html) and implements IHasCustomMenu.


              


```
using UnityEngine;
using UnityEditor;public class CustomMenuExample : EditorWindow, IHasCustomMenu
{
    [MenuItem("MyWindows/Custom Menu Window Example")]
    static void ShowCustomWindow()
    {
        GetWindow<CustomMenuExample>().Show();
    }    public void AddItemsToMenu(GenericMenu menu)
    {
        menu.AddItem(new GUIContent("Hello"), false, OnHello);
    }    void OnHello()
    {
        Debug.Log("Hello!");
    }
}
```


            

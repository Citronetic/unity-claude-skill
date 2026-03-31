This version of Unity is unsupported.



# MenuCommand





class in
          UnityEditor


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



Used to extract the context for a [MenuItem](MenuItem.html).





[MenuCommand](MenuCommand.html) objects are passed to custom menu item functions
               defined using the [MenuItem](MenuItem.html) attribute.

**Note:** The menu is added to the object and is accessible by right-clicking in the inspector.
The script code requires the CONTEXT option.


              


```
// Add context menu named "Do Something" to context menu
using UnityEngine;
using UnityEditor;public class Something : EditorWindow
{
    // Add menu item
    [MenuItem("CONTEXT/Rigidbody/Do Something")]
    static void DoSomething(MenuCommand command)
    {
        Rigidbody body = (Rigidbody)command.context;
        body.mass = 5;
        Debug.Log("Changed Rigidbody's Mass to " + body.mass + " from Context Menu...");
    }
}
```





Additional resources: [MenuItem](MenuItem.html).





### Properties



| Property | Description |
| --- | --- |
| context | Context is the object that is the target of a menu command. |
| userData | An integer for passing custom information to a menu item. |





### Constructors



| Constructor | Description |
| --- | --- |
| MenuCommand | Creates a new MenuCommand object. |


            

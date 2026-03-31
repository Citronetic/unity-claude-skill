This version of Unity is unsupported.



# GroupScope





class in
          UnityEngine



/



Implemented in:[UnityEngine.IMGUIModule](UnityEngine.IMGUIModule.html)


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



Disposable helper class for managing [BeginGroup](GUI.BeginGroup.html) / [EndGroup](GUI.EndGroup.html).





[BeginGroup](GUI.BeginGroup.html) is called at construction, and [EndGroup](GUI.EndGroup.html) is called when the instance is disposed.
When you begin a group, the coordinate system for GUI controls are set so (0,0) is the top-left corner of the group. All controls are clipped to the group.
Groups can be nested - if they are, children are clipped to their parents.

This is very useful when moving a bunch of GUI elements around on screen. A common use case is designing your menus to fit on a specific screen size, then centering the GUI on larger displays.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        // Constrain all drawing to be within a 800x600 pixel area centered on the screen.
        using (var groupScope = new GUI.GroupScope(new Rect(Screen.width / 2 - 400, Screen.height / 2 - 300, 800, 600)))
        {
            // Draw a box in the new coordinate space defined by the BeginGroup.
            // Notice how (0,0) has now been moved on-screen.
            GUI.Box(new Rect(0, 0, 800, 600), "This box is now centered! - here you would put your main menu");
        }
        // The group is now ended.
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| GUI.GroupScope | Create a new GroupScope and begin the corresponding group. |


            

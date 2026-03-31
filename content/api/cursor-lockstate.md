This version of Unity is unsupported.



# [Cursor](Cursor.html).lockState




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












                    public static [CursorLockMode](CursorLockMode.html) lockState;






### Description



Determines whether the hardware pointer is locked to the center of the view, constrained to the window, or not constrained at all.





A locked cursor is positioned in the center of the view and cannot be moved. The cursor is invisible in this state, regardless of the value of [Cursor.visible](Cursor-visible.html).

**Note**: Locking the cursor prevents the user from interacting with UI elements.

A confined cursor behaves normally, but it is confined to the view. For example, if the application is running in a window, the a confined cursor cannot leave that window. The confined cursor mode is only supported on Windows and Linux standalone builds.

The recommended best practice for a positive user experiences is to only to lock or confine the cursor because of a user's action, such as pressing a button.

The cursor state can be changed by the operating system or the Editor. For example, check the state of the cursor when the application regains focus or the state of a game changes to reveal a UI.

In the Editor, the cursor loses focus in Game mode when you press Escape or when you switch an application. In the Standalone Player, you have full control over the mouse cursor, but if you switch applications, the cursor goes out of focus.


              


```
using UnityEngine;public class CursorLockExample : MonoBehaviour
{
    void Update()
    {
        //Press the space bar to apply no locking to the Cursor
        if (Input.GetKey(KeyCode.Space))
            Cursor.lockState = CursorLockMode.None;
    }    void OnGUI()
    {
        //Press this button to lock the Cursor
        if (GUI.Button(new Rect(0, 0, 100, 50), "Lock Cursor"))
        {
            Cursor.lockState = CursorLockMode.Locked;
        }        //Press this button to confine the Cursor within the screen
        if (GUI.Button(new Rect(125, 0, 100, 50), "Confine Cursor"))
        {
            Cursor.lockState = CursorLockMode.Confined;
        }
    }
}
```


            

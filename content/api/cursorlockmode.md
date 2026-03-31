This version of Unity is unsupported.



# CursorLockMode





enumeration


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



How the cursor should behave.





These are various modes that control the behaviour of the Cursor. A default cursor must be set in **PlayerSettings** > **Default Cursor**.


              


```
//This script makes Buttons that control the Cursor's lock state. Note that the Confined mode only works on Windows and Linux Standalone platform build.using UnityEngine;public class Example : MonoBehaviour
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





### Properties



| Property | Description |
| --- | --- |
| None | Cursor behavior is unmodified. |
| Locked | Locks the cursor to the center of the Game view. |
| Confined | Confine cursor to the game window. |


            

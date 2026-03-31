This version of Unity is unsupported.



# [GUI](GUI.html).GetNameOfFocusedControl




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

public static string GetNameOfFocusedControl();






### Description



Get the name of named control that has focus.





Control names are set up by using [SetNextControlName](GUI.SetNextControlName.html). When a named control has focus, this function will return its name. If no control has focus or the focused control has no name set, an empty string will be returned instead.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public string login = "username";
    public string login2 = "no action here";    void OnGUI()
    {
        GUI.SetNextControlName("user");
        login = GUI.TextField(new Rect(10, 10, 130, 20), login);        login2 = GUI.TextField(new Rect(10, 40, 130, 20), login2);
        if (Event.current.isKey && Event.current.keyCode == KeyCode.Return && GUI.GetNameOfFocusedControl() == "user")
            Debug.Log("Login");        if (GUI.Button(new Rect(150, 10, 50, 20), "Login"))
            Debug.Log("Login");
    }
}
```





Additional resources: [SetNextControlName](GUI.SetNextControlName.html), [FocusControl](GUI.FocusControl.html).


            

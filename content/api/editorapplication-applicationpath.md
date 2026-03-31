This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).applicationPath




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












                    public static string applicationPath;






### Description



Gets the path to the Unity Editor application. (Read Only)





The path to the Unity Editor can vary depending on your configuration. If you installed the 2021.3 Editor from the Hub on Windows, you might have a path like this: `C:/Program Files/Unity/Hub/Editor/2021.3.10f1/Editor/Unity.exe`. Additional resources: [applicationContentsPath](EditorApplication-applicationContentsPath.html).


              


```
// Display file system location where the Unity
// executable is stored.using UnityEditor;
using UnityEngine;public class ApplicationPathExample
{
    // Create a menu item called "Location of Unity application" in the "Examples" menu.
    // In the Editor, click on "Location of Unity Application" in the menu to display the path to the Unity executable in the Console.
    [MenuItem("Examples/Location of Unity application")]
    static void AppPath()
    {
        Debug.Log(EditorApplication.applicationPath);
    }
}
```


            

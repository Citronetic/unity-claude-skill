This version of Unity is unsupported.



# ApplicationTitleDescriptor





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



Utility class containing all the information necessary to format Unity Editor main window title. All the various fields are concatenated to create a fully formed title. If only [ApplicationTitleDescriptor.title](ApplicationTitleDescriptor-title.html) is provided, this will become the complete title.





See also: [EditorApplication.updateMainWindowTitle](EditorApplication-updateMainWindowTitle.html).


              


```
using UnityEditor;
using UnityEngine;

public class WindowTitleExample
{
    private static void CustomTitleBar(ApplicationTitleDescriptor desc)
    {
        desc.title = $"My Editor Custom Title version: {Random.value}";
    }

    [MenuItem("Test/Setup custom title bar")]
    static void Setup()
    {
        EditorApplication.updateMainWindowTitle -= CustomTitleBar;
        // This callback will be triggered when a new scene is loaded or when Unity starts.
        EditorApplication.updateMainWindowTitle += CustomTitleBar;
        EditorApplication.UpdateMainWindowTitle();
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| activeSceneName | Unity active scene. |
| codeCoverageEnabled | Is code coverage enabled. |
| projectName | Current project name. |
| targetName | What is the runtime target for a Unity build. |
| title | Setting this field will set the complete editor title without using any of the other fields of ApplicationTitleDescriptor. |
| unityProductName | Unity version name in the form of: Unity <number> <release stream (optional)>. |
| unityVersion | Unity version number. |


            

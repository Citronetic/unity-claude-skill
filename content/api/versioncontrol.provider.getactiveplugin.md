This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).GetActivePlugin




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

public static [VersionControl.Plugin](VersionControl.Plugin.html) GetActivePlugin();






### Description



Gets the current, user selected verson control [Plugin](VersionControl.Plugin.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/GetActivePlugin")]
    public static void ExampleGetActivePlugin()
    {
        Plugin plugin;
        plugin = Provider.GetActivePlugin();
        Debug.Log(plugin.name);
    }
}
```





The code above fetches the name of the currently used version control system.


            

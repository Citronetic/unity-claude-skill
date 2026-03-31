This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).GetActiveConfigFields




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

public static ConfigField[] GetActiveConfigFields();






### Description



Returns the configuration fields for the currently active version control plugin.





The task can be useful if, for example, you need to change the version control plugin's credentials.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/ConfigField")]
    public static void ExampleConfigField()
    {
        ConfigField[] exampleConfigField;
        exampleConfigField = Provider.GetActiveConfigFields();
        EditorUserSettings.SetConfigValue(exampleConfigField[0].name, "username2");
        Provider.UpdateSettings().Wait();
    }
}
```





The code above will fetch the currectly selected version control's config field names, change the first field to "username2" and update the version control settings.


            

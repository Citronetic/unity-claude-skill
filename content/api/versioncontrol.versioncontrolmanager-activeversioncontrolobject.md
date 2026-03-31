This version of Unity is unsupported.



# [VersionControlManager](VersionControl.VersionControlManager.html).activeVersionControlObject




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












                    public static [VersionControl.VersionControlObject](VersionControl.VersionControlObject.html) activeVersionControlObject;






### Description



The [VersionControlObject](VersionControl.VersionControlObject.html) representing active VCS.





If there is no currently active [VersionControlObject](VersionControl.VersionControlObject.html), this property returns **null**.


              


```
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;static class Example
{
    [MenuItem("Example/Print Active VCS")]
    static void PrintActiveVCS()
    {
        var vco = VersionControlManager.activeVersionControlObject;
        if (vco != null)
            Debug.Log("Active VCS: " + vco.name);
        else
            Debug.Log("VCS is not activated.");
    }
}
```





Additional resources: [VersionControlManager](VersionControl.VersionControlManager.html), [VersionControlObject](VersionControl.VersionControlObject.html), [Provider](VersionControl.Provider.html).


            

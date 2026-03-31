This version of Unity is unsupported.



# [VersionControlManager](VersionControl.VersionControlManager.html).versionControlDescriptors




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












                    public static VersionControlDescriptor[] versionControlDescriptors;






### Description



An array containing all available version control systems.





Each [VersionControlDescriptor](VersionControl.VersionControlDescriptor.html) contains a unique VCS name. You can pass the VCS name to [SetVersionControl](VersionControl.VersionControlManager.SetVersionControl.html) to activate that VCS.


              


```
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;static class Example
{
    [MenuItem("Example/Print Available VCS")]
    static void PrintAvailableVCS()
    {
        var message = "Available version control systems:";
        foreach (var descriptor in VersionControlManager.versionControlDescriptors)
            message += " " + descriptor.displayName;
        Debug.Log(message);
    }
}
```





Additional resources: [VersionControlManager](VersionControl.VersionControlManager.html), [VersionControlObject](VersionControl.VersionControlObject.html), [VersionControlDescriptor](VersionControl.VersionControlDescriptor.html).


            

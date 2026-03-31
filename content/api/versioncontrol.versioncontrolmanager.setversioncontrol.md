This version of Unity is unsupported.



# [VersionControlManager](VersionControl.VersionControlManager.html).SetVersionControl




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

public static bool SetVersionControl(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Unique version control system name. |





### Returns



**bool**
        Returns **true** if VCS has been activated. **false** otherwise.





### Description



Sets the active version control system.





If a different VCS was previously active, it will be deactivated. You can use the [versionControlDescriptors](VersionControl.VersionControlManager-versionControlDescriptors.html) property to retrieve all the available version control systems. You can check the newly activated [VersionControlObject](VersionControl.VersionControlObject.html) by using the [activeVersionControlObject](VersionControl.VersionControlManager-activeVersionControlObject.html) property.


              


```
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;static class Example
{
    [MenuItem("Example/Set Custom VCS")]
    static void SetCustomVCS()
    {
        if (!VersionControlManager.SetVersionControl("Custom"))
            Debug.LogWarning("Failed to set custom VCS.");
    }
}
```





Additional resources: [VersionControlManager](VersionControl.VersionControlManager.html), [VersionControlObject](VersionControl.VersionControlObject.html), [VersionControlDescriptor](VersionControl.VersionControlDescriptor.html), [Provider](VersionControl.Provider.html).


            

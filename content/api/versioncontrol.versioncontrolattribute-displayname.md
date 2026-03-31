This version of Unity is unsupported.



# [VersionControlAttribute](VersionControl.VersionControlAttribute.html).displayName




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












                    public string displayName;






### Description



Version control system display name.





Can be localized. Used in UI.


              


```
using UnityEditor.VersionControl;
using UnityEngine;public class CustomVersionControlAttribute : VersionControlAttribute
{
    static string GetDisplayName()
    {
        return $"Custom ({Application.systemLanguage})";
    }    public CustomVersionControlAttribute()
        : base("Custom", GetDisplayName())
    {
    }
}[CustomVersionControl]
public class CustomVersionControlObject : VersionControlObject
{
}
```





Additional resources: [VersionControlAttribute](VersionControl.VersionControlAttribute.html), [VersionControlObject](VersionControl.VersionControlObject.html), [VersionControlManager](VersionControl.VersionControlManager.html), [VersionControlDescriptor](VersionControl.VersionControlDescriptor.html).


            

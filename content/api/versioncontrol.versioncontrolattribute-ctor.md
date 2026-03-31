This version of Unity is unsupported.



# VersionControlAttribute Constructor




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

public VersionControlAttribute(string name,
string displayName);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Version control system name. |
| displayName | Version control system display name. |





### Description



Constructs VersionControlAttribute.





Display name is optional. Regular name will be used if not specified.


              


```
using UnityEditor.VersionControl;[VersionControl("Custom", "Custom VCS")]
public class CustomVersionControlObject : VersionControlObject
{
}
```





Additional resources: [VersionControlAttribute](VersionControl.VersionControlAttribute.html), [VersionControlObject](VersionControl.VersionControlObject.html), [VersionControlManager](VersionControl.VersionControlManager.html), [VersionControlDescriptor](VersionControl.VersionControlDescriptor.html).


            

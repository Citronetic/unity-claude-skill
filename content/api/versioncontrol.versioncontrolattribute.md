This version of Unity is unsupported.



# VersionControlAttribute





class in
          UnityEditor.VersionControl


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



Allows you to mark a class as a version control system object.





This attribute enables Unity to detect custom VCS implementations. Your VCS object must also derive from [VersionControlObject](VersionControl.VersionControlObject.html).


              


```
using UnityEditor.VersionControl;[VersionControl("Custom")]
public class CustomVersionControlObject : VersionControlObject
{
}
```





VCS object [name](VersionControl.VersionControlAttribute-name.html) must be unique within Unity project.

Additional resources: [VersionControlObject](VersionControl.VersionControlObject.html), [VersionControlManager](VersionControl.VersionControlManager.html), [VersionControlDescriptor](VersionControl.VersionControlDescriptor.html).





### Properties



| Property | Description |
| --- | --- |
| displayName | Version control system display name. |
| name | Version control system name. |





### Constructors



| Constructor | Description |
| --- | --- |
| VersionControlAttribute | Constructs VersionControlAttribute. |


            

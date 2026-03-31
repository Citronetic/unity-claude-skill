This version of Unity is unsupported.



# [VersionControlObject](VersionControl.VersionControlObject.html).OnActivate




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

public void OnActivate();






### Description



Called when your version control system is activated.





This happens when user selects new VCS from Version Control settings window, when it gets activated from script, or during Unity startup.

Unity calls this method to inform your [VersionControlObject](VersionControl.VersionControlObject.html) that it's now active and that it's safe to perform VCS operations such as checkout or submit.


              


```
using UnityEditor.VersionControl;
using UnityEngine;[VersionControl("Custom")]
public class CustomVersionControlObject : VersionControlObject
{
    public override void OnActivate()
    {
        Debug.Log("Custom VCS activated.");
    }    public override void OnDeactivate()
    {
        Debug.Log("Custom VCS deactivated.");
    }
}
```





Additional resources: [VersionControlObject](VersionControl.VersionControlObject.html).


            

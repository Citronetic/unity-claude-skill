This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).ChangeSets




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

public static [VersionControl.Task](VersionControl.Task.html) ChangeSets();






### Description



Gets a list of pending changesets owned by the current user.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Changesets")]
    static void ExampleChangeSets()
    {
        Task t = Provider.ChangeSets();
        t.Wait();
        t.changeSets.ForEach(changeset => Debug.Log(changeset.id + " : " + changeset.description));
    }
}
```





The code above will output all of the currently active changesets to the console.


            

This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Incoming




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

public static [VersionControl.Task](VersionControl.Task.html) Incoming();






### Description



Starts a task that queries the version control server for incoming changes.





The task returns the incoming changesets which then can be accessed through the task's [Task.changeSets](VersionControl.Task-changeSets.html) property once it has been completed.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Incoming")]
    public static void ExampleIncoming()
    {
        ChangeSets exampleChangesets = new ChangeSets();
        ChangeSet exampleChangeset = new ChangeSet();
        Task t1 = Provider.Incoming();
        t1.Wait();
        exampleChangesets = t1.changeSets;
        exampleChangeset = exampleChangesets[0];
        Task t2 = Provider.IncomingChangeSetAssets(exampleChangeset);
        t2.Wait();
        t2.assetList.ForEach(asset => Debug.Log(asset.name + " " + asset.state.ToString()));
    }
}
```





The code above fetches the incoming changesets using [Provider.Incoming](VersionControl.Provider.Incoming.html) and parses it to [Provider.IncomingChangeSetAssets](VersionControl.Provider.IncomingChangeSetAssets.html) in order to output the incoming asset file names and their status.


            

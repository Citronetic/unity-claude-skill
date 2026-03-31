This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).ChangeSetStatus




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

public static [VersionControl.Task](VersionControl.Task.html) ChangeSetStatus([VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) ChangeSetStatus(string changesetID);






### Parameters



| Parameter | Description |
| --- | --- |
| changeset | Changeset to query for assets. |
| changesetID | ChangesetID to query for assets. |





### Description



Retrieves a list of assets belonging to a changeset.





This is intended to work only with outgoing changesets. Use [Provider.IncomingChangeSetAssets](VersionControl.Provider.IncomingChangeSetAssets.html) if you would like to retrieve assets from incoming changesets.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("VersionControl/ChangeSetStatus")]
    static void ExampleChangeSetStatus()
    {
        Task t = Provider.ChangeSetStatus("1111");
        t.Wait();
        t.assetList.ForEach(asset => Debug.Log(asset.name + " " + asset.state.ToString()));
    }
}
```





The code above will output a full list of the asset names as well as their version control states for the given changelist "1111".


            

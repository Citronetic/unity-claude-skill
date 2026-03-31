This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).IncomingChangeSetAssets




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

public static [VersionControl.Task](VersionControl.Task.html) IncomingChangeSetAssets([VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) IncomingChangeSetAssets(string changesetID);






### Parameters



| Parameter | Description |
| --- | --- |
| changeset | Incoming changeset. |
| changesetID | Incoming changesetid. |





### Description



Given an incoming changeset this will start a task to query the version control server for which assets are part of the changeset.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/ChangeSetAssets")]
    public static void ExampleChangeSetAssets()
    {
        Task t1 = Provider.IncomingChangeSetAssets("1111");
        t1.Wait();
        t1.assetList.ForEach(asset => Debug.Log(asset.name + " " + asset.state.ToString()));
    }
}
```





The code above will return the names and version control states for the assets belonging to the "1111" incoming changeset.


            

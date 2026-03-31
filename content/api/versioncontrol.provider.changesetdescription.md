This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).ChangeSetDescription




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

public static [VersionControl.Task](VersionControl.Task.html) ChangeSetDescription([VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






### Parameters



| Parameter | Description |
| --- | --- |
| changeset | Changeset to query description of. |





### Description



Given a changeset only containing the changeset ID, this will start a task for quering the description of the changeset.





The resulting description can be retrieved using the task's "text" property.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Changeset Description")]
    static void ExampleChangeSetDescription()
    {
        AssetList assets = new AssetList();
        ChangeSet changeset = new ChangeSet("Unknown Description", "1111");
        Task t = Provider.ChangeSetDescription(changeset);
        t.Wait();
        Debug.Log(t.text);
    }
}
```





The code above will check the description of the changeset with the ID of "1111" and output it to the console.


            

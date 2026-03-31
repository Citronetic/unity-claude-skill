This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).GetOriginalSourceRootWhereGameObjectIsAdded




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

public static [GameObject](GameObject.html) GetOriginalSourceRootWhereGameObjectIsAdded([GameObject](GameObject.html) gameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | GameObject from a Prefab instance or from a Prefab Asset. |





### Returns



**GameObject**
        The Prefab Asset root where the input GameObject was added.





### Description



Use this method to find the Prefab Asset root where a Prefab instance or Prefab Asset object was added originally.





Use this method to find the "original source" where the input object was added. This is useful in situations where you are working with nested prefabs, and you need to in which prefab your instance of a nested prefab was originally added.

For example, in the following diagram, prefab asset A contains a child nested prefab B, which contains a child nested prefab C.

[Image: image]

The image shows the nested prefab assets, with B and C nested under A, and C nested under B, and how this structure carries over to their nested instances in the Hierarchy window.

Due to this structure, prefab C exists in both A and B, but was originally added in B.

In this example scenario, if you call `GetOriginalSourceRootWhereGameObjectIsAdded` and supply the instance of GameObject C as the `gameObject`, then the method returns the asset B.

The **Open Prefab** button in the Restructure Dialog uses this method to determine the correct prefab asset to open in prefab editing mode.

The example script below adds a menu item to the editor, which launches a simple wizard that allows you to test the results of this method.


              


```
using UnityEditor;
using UnityEngine;
public class AssetSourceTestWizard : ScriptableWizard
{
    public GameObject instance;    [MenuItem("Test/Asset Source Test Wizard")]
    static void CreateWizard()
    {
        ScriptableWizard.DisplayWizard<AssetSourceTestWizard>("Asset Source Test Wizard", "Do Test");
    }    void OnWizardCreate()
    {
        var o1 = PrefabUtility.GetOriginalSourceRootWhereGameObjectIsAdded(instance);
        Debug.Log("Original source root where GameObject is added: " + o1.name + " from: " + AssetDatabase.GetAssetPath(o1));
    }
}
```





If you need to know the original source for a given GameObject or Component (not where it is added) then use [GetCorrespondingObjectFromOriginalSource](PrefabUtility.GetCorrespondingObjectFromOriginalSource.html).

See also: [GetCorrespondingObjectFromSource](PrefabUtility.GetCorrespondingObjectFromSource.html), [GetCorrespondingObjectFromSourceAtPath](PrefabUtility.GetCorrespondingObjectFromSourceAtPath.html), [GetCorrespondingObjectFromOriginalSource](PrefabUtility.GetCorrespondingObjectFromOriginalSource.html).


            

This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).GetCorrespondingObjectFromSource




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

public static TObject GetCorrespondingObjectFromSource(TObject componentOrGameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| componentOrGameObject | The object to find the corresponding object from. |





### Returns



**TObject**
        The corresponding object or null.





### Description



Retrieves the corresponding source prefab asset object of a given GameObject or component, or null if it can't be found.





Use this method to get the source prefab asset object the GameObject or component was instantiated from.

For example, in the diagram shown below, prefab asset A contains a child nested prefab B, which contains a child nested prefab C.

[Image: image]

The image shows the nested prefab assets, with B and C nested under A, and C nested under B, and how this structure carries over to their nested instances in the Hierarchy window.

In this example scenario, if you supply the instance of GameObject C as the `componentOrGameObject` parameter to `GetCorrespondingObjectFromSource`, then the method returns the object C from the asset Prefab A.

For more information about source objects, refer to [Introduction to prefabs](../Manual/prefabs-introduction.html).

The following example adds a menu item to the Editor, which launches a simple wizard that allows you to test the results of this method.


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
        var o1 = PrefabUtility.GetCorrespondingObjectFromSource(instance);
        Debug.Log("Corresponding object from source: " + o1.name + " from: " + AssetDatabase.GetAssetPath(o1));
    }
}
```





See also: [GetCorrespondingObjectFromSourceAtPath](PrefabUtility.GetCorrespondingObjectFromSourceAtPath.html), [GetOriginalSourceRootWhereGameObjectIsAdded](PrefabUtility.GetOriginalSourceRootWhereGameObjectIsAdded.html), [GetCorrespondingObjectFromOriginalSource](PrefabUtility.GetCorrespondingObjectFromOriginalSource.html).


            

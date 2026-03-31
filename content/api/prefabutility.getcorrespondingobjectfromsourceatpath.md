This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).GetCorrespondingObjectFromSourceAtPath




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

public static TObject GetCorrespondingObjectFromSourceAtPath(TObject componentOrGameObject,
string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| componentOrGameObject | The object to find the corresponding object from. |
| assetPath | The asset path of the Prefab Asset to get the corresponding object from. |





### Returns



**TObject**
        The corresponding object or null.





### Description



Retrieves the corresponding object of the given object from a given Prefab Asset path.





Use this method to find the corresponding asset the `source` was instantiated from, if but only if it is within the prefab asset at the specified path.

If you don't have the path to pass in, you can use [GetCorrespondingObjectFromSource](PrefabUtility.GetCorrespondingObjectFromSource.html) instead.

This method returns null if the given object does not have a corresponding object within the prefab asset at the specified path.

For example, in the following image prefab asset A contains a child nested prefab B, which contains a child nested prefab C.

[Image: image]

The image shows the nested prefab assets, with B and C nested under A, and C nested under B, and how this structure carries over to their nested instances in the Hierarchy window.

In this example scenario, if you call `GetCorrespondingObjectFromSourceAtPath` with the instance of GameObject C as the `componentOrGameObject` parameter and `Assets/A.prefab` as the `assetPath`, this method returns the nested prefab object C from the prefab asset A.

The following example adds a menu item to the Editor, which launches a simple wizard that allows you to test the results of this method.


              


```
using UnityEditor;
using UnityEngine;
public class AssetSourceTestWizard : ScriptableWizard
{
    public GameObject instance;
    public string path;    [MenuItem("Test/Asset Source Test Wizard")]
    static void CreateWizard()
    {
        ScriptableWizard.DisplayWizard<AssetSourceTestWizard>("Asset Source Test Wizard", "Do Test");
    }    void OnWizardCreate()
    {
        var o1 = PrefabUtility.GetCorrespondingObjectFromSourceAtPath(instance, path);
        Debug.Log("Corresponding object from source: " + o1.name);
    }
}
```





See also: [GetCorrespondingObjectFromSource](PrefabUtility.GetCorrespondingObjectFromSource.html), [GetOriginalSourceRootWhereGameObjectIsAdded](PrefabUtility.GetOriginalSourceRootWhereGameObjectIsAdded.html), [GetCorrespondingObjectFromOriginalSource](PrefabUtility.GetCorrespondingObjectFromOriginalSource.html).


            

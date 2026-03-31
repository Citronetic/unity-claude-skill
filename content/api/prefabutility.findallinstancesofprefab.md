This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).FindAllInstancesOfPrefab




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

public static GameObject[] FindAllInstancesOfPrefab([GameObject](GameObject.html) prefabRoot);






## Declaration

public static GameObject[] FindAllInstancesOfPrefab([GameObject](GameObject.html) prefabRoot,
[SceneManagement.Scene](SceneManagement.Scene.html) scene);






### Parameters



| Parameter | Description |
| --- | --- |
| prefabRoot | The root GameObject of a Prefab asset. |
| scene | The scene to search for Prefab instances. The scene you specify must be valid and loaded. |





### Returns



**GameObject[]**
        The root GameObjects for all instances of the Prefab asset with root `prefabRoot`.





### Description



Retrieves the root GameObjects for all instances of the Prefab asset with root `prefabRoot` found in all currently loaded scenes. If `prefabRoot` is not a valid Prefab asset root GameObject, an `ArgumentException` is thrown.





FindAllInstancesOfPrefab will not return nested Prefab instances.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.SceneManagement;
using NUnit.Framework;public class Example : MonoBehaviour
{
    public GameObject prefabAssetRoot;
    private void Start()
    {
        var expectedInstance = (GameObject)PrefabUtility.InstantiatePrefab(prefabAssetRoot);
        var instances = PrefabUtility.FindAllInstancesOfPrefab(prefabAssetRoot);
        Assert.AreEqual(1, instances.Length);
        Assert.AreEqual(expectedInstance, instances[0]);
    }
}
```




---








### Description



Returns the root GameObjects for all instances of the Prefab asset with root `prefabRoot` found in `scene`. If `prefabRoot` is not a valid Prefab asset root GameObject, or `scene` is not valid and loaded, `ArgumentException` is thrown.





FindAllInstancesOfPrefab will not return nested Prefab instances.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.SceneManagement;
using NUnit.Framework;public class Example : MonoBehaviour
{
    public GameObject prefabAssetRoot;
    private void Start()
    {
        var expectedInstance = (GameObject)PrefabUtility.InstantiatePrefab(prefabAssetRoot);
        var instances = PrefabUtility.FindAllInstancesOfPrefab(prefabAssetRoot, SceneManager.GetActiveScene());
        Assert.AreEqual(1, instances.Length);
        Assert.AreEqual(expectedInstance, instances[0]);
    }
}
```


            

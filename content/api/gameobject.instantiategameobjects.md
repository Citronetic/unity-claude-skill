This version of Unity is unsupported.



# [GameObject](GameObject.html).InstantiateGameObjects




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




                [Switch to Manual](../Manual/class-GameObject.html)










## Declaration

public static void InstantiateGameObjects(int sourceInstanceID,
int count,
NativeArray<int> newInstanceIDs,
NativeArray<int> newTransformInstanceIDs,
[SceneManagement.Scene](SceneManagement.Scene.html) destinationScene);






### Parameters



| Parameter | Description |
| --- | --- |
| sourceInstanceID | The instance ID of the GameObject to create additional instances of. |
| count | The number of instances of the GameObject to create. |
| newInstanceIDs | Pre-allocated NativeArray to populate with the instance IDs of the new GameObjects. Must be the same size as count. |
| newTransformInstanceIDs | Pre-allocated NativeArray to populate with the instance IDs of the Transforms of the new GameObjects. Must be the same size as count. |
| destinationScene | The Scene to place the instantiated GameObjects into. If default, then the GameObjects will be added to the currently active Scene. |





### Description



Creates a specified number of instances of a GameObject identified by its instance ID and populates NativeArrays with the instance IDs of the new GameObjects and their Transform components.





Use `InstantiateGameObjects` to instantiate multiple GameObjects as a batch. An instance ID can be resolved to an object using [Resources.InstanceIDToObject](Resources.InstanceIDToObject.html).


              


```
using System;
using Unity.Collections;
using UnityEngine;public class InstantiateInstanceID : MonoBehaviour
{
public GameObject prefab;
public int count = 100;    int m_InstanceID;
    NativeArray<int> m_InstanceIds;
    NativeArray<int> m_TransformIds;

    void Start()
    {
        m_InstanceID = prefab.GetInstanceID();
        m_InstanceIds = new NativeArray<int>(count, Allocator.Persistent);
        m_TransformIds = new NativeArray<int>(count, Allocator.Persistent);

        GameObject.InstantiateGameObjects(m_InstanceID, count, m_InstanceIds,m_TransformIds );
    }    void OnDestroy()
    {
        m_InstanceIds.Dispose();
        m_TransformIds.Dispose();
    }
}
```





Additional resources: [GameObject.SetGameObjectsActive](GameObject.SetGameObjectsActive.html), [Resources.InstanceIDToObject](Resources.InstanceIDToObject.html)


            

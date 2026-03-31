This version of Unity is unsupported.



# [GameObject](GameObject.html).SetGameObjectsActive




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

public static void SetGameObjectsActive(NativeArray<int> instanceIDs,
bool active);






## Declaration

public static void SetGameObjectsActive(ReadOnlySpan<int> instanceIDs,
bool active);






### Parameters



| Parameter | Description |
| --- | --- |
| instanceIDs | Instance IDs of GameObjects to activate or deactive. |
| active | The active state to set, where true sets the GameObjects to active and false sets them to inactive. |





### Description



Activates or deactivates multiple GameObjects identified by instance ID.





Use `SetGameObjectsActive` to activate or deactivate multiple GameObjects as a batch.


              


```
using System;
using Unity.Collections;
using UnityEngine;
using UnityEngine.InputSystem;//Add this script to a GameObject. This example requires the Input System package.public class DeactivateGOComponent : MonoBehaviour
{
public GameObject prefab;
public int count = 100;    NativeArray<int> m_SpawnedInstanceIDsNative;
    int[] m_SpawnedInstanceIDs;

    bool m_SetActive = false;
    bool m_UseSlowMethod = false;

    void Start()
    {
        m_SpawnedInstanceIDs = new int[count];

        //Spawn some prefabs
        for (int i = 0; i < count; i++)
        {
            //Save their instanceID
            m_SpawnedInstanceIDs[i] = Instantiate(prefab).GetInstanceID();
        }

        //Create native array with instanceIDs
        m_SpawnedInstanceIDsNative = new NativeArray<int>(m_SpawnedInstanceIDs, Allocator.Persistent);

    }    void Update()
    {
        if (Keyboard.current[Key.A].wasPressedThisFrame)
        {
            if (m_UseSlowMethod)
            {
                SetActiveSlow(m_SetActive);
            }
            else
            {
                SetActiveFast(m_SpawnedInstanceIDsNative, m_SetActive);

            }
            m_SetActive = !m_SetActive;
        }
    }

    void SetActiveSlow(bool setActive)
    {
        foreach(int id in m_SpawnedInstanceIDs)
        {
            ((GameObject)Resources.InstanceIDToObject(id)).SetActive(setActive);
        }
    }

    static void SetActiveFast(NativeArray<int> ids, bool setActive)
    {
        GameObject.SetGameObjectsActive(ids, setActive);
    }    void OnDestroy()
    {
        m_SpawnedInstanceIDsNative.Dispose();
    }
}
```





Additional resources: [GameObject.SetActive](GameObject.SetActive.html), [GameObject.InstantiateGameObjects](GameObject.InstantiateGameObjects.html).


            

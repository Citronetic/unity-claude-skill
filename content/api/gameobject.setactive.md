This version of Unity is unsupported.



# [GameObject](GameObject.html).SetActive




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

public void SetActive(bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| value | The active state to set, where true sets the GameObject to active and false sets it to inactive. |





### Description



Activates or deactivates the GameObject locally, according to the value of the supplied parameter.





`SetActive` only sets the local state of the GameObject, represented by the value of [GameObject.activeSelf](GameObject-activeSelf.html). Changing the value of [GameObject.activeSelf](GameObject-activeSelf.html) has no effect on the value of [GameObject.activeInHierarchy](GameObject-activeInHierarchy.html) if `activeInHierarchy` is `false` because of an inactive parent object.

Deactivating a GameObject disables each component, including  attached renderers, colliders, rigidbodies, and scripts. For example, Unity will no longer call [MonoBehaviour.Update](MonoBehaviour.Update.html) on a script attached to a deactivated GameObject. Deactivating a GameObject also stops all coroutines attached to it.

**Note:** If the call to `SetActive` changes the value of [GameObject.activeInHierarchy](GameObject-activeInHierarchy.html), this triggers [MonoBehaviour.OnEnable](MonoBehaviour.OnEnable.html) or [MonoBehaviour.OnDisable](MonoBehaviour.OnDisable.html) on all attached MonoBehaviour scripts.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    private GameObject[] cubes = new GameObject[10];
    public float timer, interval = 2f;    void Start()
    {
        Vector3 pos = new Vector3(-5, 0, 0);        for (int i = 0; i < 10; i++)
        {
            cubes[i] = GameObject.CreatePrimitive(PrimitiveType.Cube);
            cubes[i].transform.position = pos;
            cubes[i].name = "Cube_" + i;
            pos.x++;
        }
    }    void Update()
    {
        timer += Time.deltaTime;
        if (timer >= interval)
        {
            for (int i = 0; i < 10; i++)
            {
                int randomValue = Random.Range(0, 2);
                if (randomValue == 0)
                {
                    cubes[i].SetActive(false);
                }
                else  cubes[i].SetActive(true);
            }
            timer = 0;
        }
    }
}
```





Additional resources: [GameObject.activeSelf](GameObject-activeSelf.html), [GameObject.SetGameObjectsActive](GameObject.SetGameObjectsActive.html)


            

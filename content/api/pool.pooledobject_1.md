This version of Unity is unsupported.



# PooledObject<T0>





struct in
          UnityEngine.Pool



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



A pooled object wraps a reference to an instance returned to the pool when the pooled object is disposed of.





It automates the return of references to avoid manual handling.





The following example shows how to use a PooledObject:


              


```
using UnityEngine;
using UnityEngine.Pool;public class SpawnAndConfigureOnce : MonoBehaviour
{
    [SerializeField] private GameObject visualPrefab;    private ObjectPool<GameObject> _pool;    void Awake()
    {
        _pool = new ObjectPool<GameObject>(
            createFunc: () => Instantiate(visualPrefab),
            actionOnGet: gameObject => gameObject.SetActive(true),
            actionOnRelease: gameObject => gameObject.SetActive(false),
            actionOnDestroy: gameObject => Destroy(gameObject),
            collectionCheck: true,   // An Editor-only check that determines if an instance is returned back to the pool. Throws an exception if the instance is already in the pool.
            defaultCapacity: 10,
            maxSize: 100);
    }    // Demonstrates synchronous usage: all work finishes before scope ends.
    public void ShowVisualOnce(Vector3 position, Quaternion rotation)
    {
        using (PooledObject<GameObject> pooled = _pool.Get(out GameObject gameObject))
        {
            gameObject.transform.SetPositionAndRotation(position, rotation);            // Do synchronous work only. Once we leave this scope,
            // the object is automatically returned to the pool.
            // e.g., sampling data, taking a screenshot, etc.
        } // Dispose called here -> gameObject returned to pool
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| PooledObject_1 | Initializes the pooled object with a managed object and specifies the pool to which the instance is returned. |


            

This version of Unity is unsupported.



# ObjectPool<T0>





class in
          UnityEngine.Pool



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


                  Leave feedback





Implements interfaces:[IObjectPool<T0>](Pool.IObjectPool_1.html)




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



A stack based [IObjectPool<T0>](Pool.IObjectPool_1.html).





Object Pooling is a way to optimize your projects and lower the burden that is placed on the CPU when having to rapidly create and destroy new objects. It is a good practice and design pattern to keep in mind to help relieve the processing power of the CPU to handle more important tasks and not become inundated by repetitive create and destroy calls.
The ObjectPool uses a stack to hold a collection of object instances for reuse and is not thread-safe.


              


```
using UnityEngine;
using UnityEngine.Pool;public class SimplePoolExample : MonoBehaviour
{
    // The pool holds plain GameObjects (you can swap this for any component type).
    private ObjectPool<GameObject> pool;    void Awake()
    {
        // Create a pool with the four core callbacks.
        pool = new ObjectPool<GameObject>(
            createFunc: CreateItem,
            actionOnGet: OnGet,
            actionOnRelease: OnRelease,
            actionOnDestroy: OnDestroyItem,
            collectionCheck: true,   // helps catch double-release mistakes
            defaultCapacity: 10,
            maxSize: 50
        );
    }    void Update()
    {
        // Press Space to spawn one pooled object for 1 second.
        if (Input.GetKeyDown(KeyCode.Space))
        {
            GameObject gameObject = pool.Get();
            gameObject.transform.position = Random.insideUnitSphere * 5f;            // Return it to the pool after a short delay.
            StartCoroutine(ReturnAfter(gameObject, 1f));
        }
    }    // Creates a new pooled GameObject the first time (and whenever the pool needs more).
    private GameObject CreateItem()
    {
        GameObject gameObject = GameObject.CreatePrimitive(PrimitiveType.Cube);
        gameObject.name = "PooledCube";
        gameObject.SetActive(false);
        return gameObject;
    }    // Called when an item is taken from the pool.
    private void OnGet(GameObject gameObject)
    {
        gameObject.SetActive(true);
    }    // Called when an item is returned to the pool.
    private void OnRelease(GameObject gameObject)
    {
        gameObject.SetActive(false);
    }    // Called when the pool decides to destroy an item (e.g., above max size).
    private void OnDestroyItem(GameObject gameObject)
    {
        Destroy(gameObject);
    }    private System.Collections.IEnumerator ReturnAfter(GameObject gameObject, float seconds)
    {
        yield return new WaitForSeconds(seconds);
        // Give it back to the pool.
        pool.Release(gameObject);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| CountActive | Number of objects that have been created by the pool but are currently in use and have not yet been returned. |
| CountAll | The total number of active and inactive objects. |
| CountInactive | Number of objects that are currently available in the pool. |





### Constructors



| Constructor | Description |
| --- | --- |
| ObjectPool_1 | Creates a new ObjectPool instance. |





### Public Methods



| Method | Description |
| --- | --- |
| Clear | Removes all pooled items. If the pool contains a destroy callback then it will be called for each item that is in the pool. |
| Dispose | Removes all pooled items. If the pool contains a destroy callback then it will be called for each item that is in the pool. |
| Get | Get an instance from the pool. If the pool is empty then a new instance will be created. |
| Release | Returns the instance back to the pool. Returning an instance to a pool that is full will cause the instance to be destroyed. |


            

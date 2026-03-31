This version of Unity is unsupported.



# HashSetPool<T0>





class in
          UnityEngine.Pool



/



Inherits from:[Pool.CollectionPool_2](Pool.CollectionPool_2.html)



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



A version of [CollectionPool<T0,T1>](Pool.CollectionPool_2.html) for HashSets.


              


```
using UnityEngine.Pool;public class Example
{
    void GetPooled()
    {
        // Get a pooled instance
        var instance = HashSetPool<int>.Get();        // Use the HashSet        // Return it back to the pool
        HashSetPool<int>.Release(instance);
    }
}
```





### Inherited Members










### Static Methods

| Method | Description |
| --- | --- |
| Get | Get an instance from the pool. If the pool is empty then a new instance will be created. |
| Release | Returns the instance back to the pool. |






            

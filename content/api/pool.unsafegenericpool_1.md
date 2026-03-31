This version of Unity is unsupported.



# UnsafeGenericPool<T0>





class in
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



Provides a static implementation of [ObjectPool<T0>](Pool.ObjectPool_1.html).





This is an alternative to [GenericPool<T0>](Pool.GenericPool_1.html) which has collection checks disabled.
Some objects generate garbage when they are compared during the collection checks. This version does not perform any collection checks so no garbage will be generated. Note this is not thread-safe.


              


```
using UnityEngine.Pool;public class UnsafeGenericPoolPoolExample
{
    class MyClass
    {
        public int someValue;
        public string someString;
    }    void GetPooled()
    {
        // Get an instance
        var instance = UnsafeGenericPool<MyClass>.Get();        // Return the instance
        UnsafeGenericPool<MyClass>.Release(instance);
    }
}
```





### Static Methods



| Method | Description |
| --- | --- |
| Get | Get an instance from the pool. If the pool is empty then a new instance will be created. |
| Release | Returns the instance back to the pool. |


            

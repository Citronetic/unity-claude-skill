This version of Unity is unsupported.



# [Caching](Caching.html).RemoveCache




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

public static bool RemoveCache([Cache](Cache.html) cache);






### Parameters



| Parameter | Description |
| --- | --- |
| cache | The Cache to be removed. |





### Returns



**bool**
        Returns true if the Cache is removed.





### Description



Removes the Cache from cache list.


              


```
using System.IO;
using UnityEngine;public class Example : MonoBehaviour
{
    void RemoveCacheExample()
    {
        Directory.CreateDirectory("Cache1");
        Directory.CreateDirectory("Cache2");
        Directory.CreateDirectory("Cache3");        Cache c1 = Caching.AddCache("Cache1"); //Placed in cache list at position 1
        Cache c2 = Caching.AddCache("Cache2"); //Placed in cache list at position 2
        Cache c3 = Caching.AddCache("Cache3"); //Placed in cache list at position 3        bool successfullyRemovedCache = Caching.RemoveCache(c1);        if (!successfullyRemovedCache)
        {
            Debug.Log("Unable to remove cache.");
        }        //Now, if the remove was successful, the Cache list looks like:
        //Position 0: Default Cache
        //Position 1: Cache2
        //Position 2: Cache3
    }
}
```


            

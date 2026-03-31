This version of Unity is unsupported.



# [Caching](Caching.html).GetCacheAt




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

public static [Cache](Cache.html) GetCacheAt(int cacheIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| cacheIndex | Index of the cache to get. |





### Returns



**Cache**
        A reference to the Cache at the index specified.





### Description



Returns the Cache at the given position in the cache list.


              


```
using System.IO;
using UnityEngine;public class Example : MonoBehaviour
{
    void GetCacheAtExample()
    {
        Directory.CreateDirectory("Cache1");
        Directory.CreateDirectory("Cache2");
        Directory.CreateDirectory("Cache3");        Caching.AddCache("Cache1"); //Placed in cache list at position 1
        Caching.AddCache("Cache2"); //Placed in cache list at position 2
        Caching.AddCache("Cache3"); //Placed in cache list at position 3        Cache c0 = Caching.GetCacheAt(0); //The default cache
        Cache c1 = Caching.GetCacheAt(1);
        Cache c2 = Caching.GetCacheAt(2);
        Cache c3 = Caching.GetCacheAt(3);        string path0 = c0.path; //The default cache
        string path1 = c1.path;
        string path2 = c2.path;
        string path3 = c3.path;
    }
}
```


            

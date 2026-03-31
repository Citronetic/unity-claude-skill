This version of Unity is unsupported.



# [Caching](Caching.html).AddCache




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

public static [Cache](Cache.html) AddCache(string cachePath);






### Parameters



| Parameter | Description |
| --- | --- |
| cachePath | Path to the cache folder. |





### Description



Add a cache with the given path.





This allows you to add a new cache to the cache list. A reference to a Cache will be returned.


              


```
using System.IO;
using UnityEngine;public class Example : MonoBehaviour
{
    void AddCacheAtPath(string path)
    {
        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);        Cache newCache = Caching.AddCache(path);        //Make sure your new Cache is valid
        if (newCache.valid)
        {
            //If you wanted to set your newly created cache to the active cache
            Caching.currentCacheForWriting = newCache;
        }
    }
}
```


            

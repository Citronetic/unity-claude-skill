This version of Unity is unsupported.



# [Caching](Caching.html).GetCacheByPath




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

public static [Cache](Cache.html) GetCacheByPath(string cachePath);






### Parameters



| Parameter | Description |
| --- | --- |
| cachePath | The cache path. |





### Returns



**Cache**
        A reference to the Cache with the given path.





### Description



Returns the Cache that has the given cache path.


              


```
using System.IO;
using UnityEngine;public class Example : MonoBehaviour
{
    void GetCacheByPathExample()
    {
        Directory.CreateDirectory("Cache1");
        Directory.CreateDirectory("Cache2");
        Directory.CreateDirectory("Cache3");        Caching.AddCache("Cache1"); //Placed in cache list at position 1
        Caching.AddCache("Cache2"); //Placed in cache list at position 2
        Caching.AddCache("Cache3"); //Placed in cache list at position 3        Cache c1 = Caching.GetCacheByPath("Cache1");
        Cache c2 = Caching.GetCacheByPath("Cache2");
        Cache c3 = Caching.GetCacheByPath("Cache3");
    }
}
```


            

This version of Unity is unsupported.



# [Caching](Caching.html).GetAllCachePaths




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

public static void GetAllCachePaths(List<string> cachePaths);






### Parameters



| Parameter | Description |
| --- | --- |
| cachePaths | List of all the cache paths. |





### Description



Returns all paths of the cache in the cache list.


              


```
using System.IO;
using System.Collections.Generic;
using UnityEngine;public class Example : MonoBehaviour
{
    void GetAllCachePathExample()
    {
        Directory.CreateDirectory("Cache1");
        Directory.CreateDirectory("Cache2");
        Directory.CreateDirectory("Cache3");        Cache c1 = Caching.AddCache("Cache1"); //Placed in cache list at position 1
        Cache c2 = Caching.AddCache("Cache2"); //Placed in cache list at position 2
        Cache c3 = Caching.AddCache("Cache3"); //Placed in cache list at position 3        List<string> cachePaths = new List<string>();
        Caching.GetAllCachePaths(cachePaths);        //cachePaths[0] is Cache1
        //cachePaths[1] is Cache2
        //cachePaths[2] is Cache3
    }
}
```


            

This version of Unity is unsupported.



# [Caching](Caching.html).MoveCacheBefore




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

public static void MoveCacheBefore([Cache](Cache.html) src,
[Cache](Cache.html) dst);






### Parameters



| Parameter | Description |
| --- | --- |
| src | The Cache to move. |
| dst | The Cache which should come after the source Cache in the cache list. |





### Description



Moves the source Cache before the destination Cache in the cache list.


              


```
using System.IO;
using UnityEngine;public class Example : MonoBehaviour
{
    void MoveCacheBeforeExample()
    {
        Directory.CreateDirectory("Cache1");
        Directory.CreateDirectory("Cache2");
        Directory.CreateDirectory("Cache3");        Cache c1 = Caching.AddCache("Cache1"); //Placed in cache list at position 1
        Cache c2 = Caching.AddCache("Cache2"); //Placed in cache list at position 2
        Cache c3 = Caching.AddCache("Cache3"); //Placed in cache list at position 3        Caching.MoveCacheBefore(c2, c1);        //Now the Cache list looks like:
        //Position 0: Default Cache
        //Position 1: Cache2
        //Position 2: Cache1
        //Position 3: Cache3
    }
}
```


            

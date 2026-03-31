This version of Unity is unsupported.



# Cache





struct in
          UnityEngine



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



Data structure for cache. For more information, see [Caching.AddCache](Caching.AddCache.html).





**Note:** The Cache API is not supported in WebGL because AssetBundles are stored in the browser cache for the WebGL platform.





### Properties



| Property | Description |
| --- | --- |
| expirationDelay | The number of seconds that an AssetBundle may remain unused in the cache before it is automatically deleted. |
| index | Returns the index of the cache in the cache list. |
| maximumAvailableStorageSpace | Allows you to specify the total number of bytes that can be allocated for the cache. |
| path | Returns the path of the cache. |
| readOnly | Returns true if the cache is readonly. |
| ready | Returns true if the cache is ready. |
| spaceFree | Returns the number of currently unused bytes in the cache. |
| spaceOccupied | Returns the used disk space in bytes. |
| valid | Returns true if the cache is valid. |





### Public Methods



| Method | Description |
| --- | --- |
| ClearCache | Removes all cached content in the cache that has been cached by the current application. |


            

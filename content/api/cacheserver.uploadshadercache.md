This version of Unity is unsupported.



# [CacheServer](CacheServer.html).UploadShaderCache




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

public static void UploadShaderCache();






### Description



Uploads the contents of the Shader Cache directly to the Accelerator.





Use this method to upload the entries of the Shader Cache Accelerator in an asynchronous way. This API can be used when an already imported project is opened with Unity but was not previously imported using the Accelerator. The Shader Cache is located inside the Library/ShaderCache folder. As the Shader cache is currently managed outside of the AssetDatabase, a separate call is needed to request that the contents of the Shader cache are upload. **NOTE:** The corresponding command line argument for this is -cacheServerUploadExistingShaderCache and will queue up the uploading of entries in the Shader Cache which are not found on the Accelerator.


              


```
using UnityEngine;
using UnityEditor;public class CacheServerExamples
{
    [MenuItem("CacheServer/UploadShaderCacheToCacheServer")]
    public static void UploadShaderCacheToCacheServer()
    {
        //This will upload the contents of the Shader Cache to the Accelerator
        CacheServer.UploadShaderCache();
    }}
```


            

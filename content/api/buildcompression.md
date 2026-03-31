This version of Unity is unsupported.



# BuildCompression





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



Contains information about compression methods, compression levels and block sizes that are supported by Asset Bundle compression at build time and recompression at runtime.





The formats that are currently supported are exposed with static properties. There are three supported BuildCompression types for compressing AssetBundles during builds (LZ4, LZMA and Uncompressed) and two supported recompression methods for runtime (LZ4Runtime and UncompressedRuntime).

                Additional resources: [AssetBundle.RecompressAssetBundleAsync](AssetBundle.RecompressAssetBundleAsync.html), [AssetBundles compression](../Manual/AssetBundles-Cache.html), [BuildAssetBundleOptions.ChunkBasedCompression](BuildAssetBundleOptions.ChunkBasedCompression.html), [BuildAssetBundleOptions.UncompressedAssetBundle](BuildAssetBundleOptions.UncompressedAssetBundle.html), [BuildOptions.CompressWithLz4](BuildOptions.CompressWithLz4.html), [CompressionType](CompressionType.html), [Caching](Caching.html).





### Static Properties



| Property | Description |
| --- | --- |
| LZ4 | LZ4HC "Chunk Based" Compression. |
| LZ4Runtime | LZ4 Compression for runtime recompression. |
| LZMA | LZMA Compression. |
| Uncompressed | Uncompressed Asset Bundle. |
| UncompressedRuntime | Uncompressed Asset Bundle. |


            

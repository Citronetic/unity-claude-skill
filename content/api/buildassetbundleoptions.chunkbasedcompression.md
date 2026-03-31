This version of Unity is unsupported.



# [BuildAssetBundleOptions](BuildAssetBundleOptions.html).ChunkBasedCompression




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



Use chunk-based LZ4 compression when creating the AssetBundle.





When chunk-based compression is used, the content of the AssetBundle is broken into individual segments, which are compressed independently using the [CompressionType.Lz4HC](CompressionType.Lz4HC.html) algorithm.
                    The resulting file is typically larger than full file [CompressionType.Lzma](CompressionType.Lzma.html) compression which is used by default,
                    but AssetBundles built with this format can be loaded incrementally, e.g. by only decompressing the needed chunks.
                    This is the default format used for AssetBundles stored in the AssetBundle Cache and provides a good balance between compression ratio and load performance.

Related topics: [AssetBundles compression](../Manual/AssetBundles-Cache.html), [BuildCompression](BuildCompression.html), [CompressionType](CompressionType.html), [ArchiveHandle.Compression](Unity.IO.Archive.ArchiveHandle.Compression.html), [Caching](Caching.html), [BuildAssetBundleOptions.UncompressedAssetBundle](BuildAssetBundleOptions.UncompressedAssetBundle.html), [BuildOptions.CompressWithLz4](BuildOptions.CompressWithLz4.html).


            

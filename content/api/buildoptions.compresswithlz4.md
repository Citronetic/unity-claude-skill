This version of Unity is unsupported.



# [BuildOptions](BuildOptions.html).CompressWithLz4




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



Use chunk-based LZ4 compression when building the Player.





This value allows content to be stored in a compressed form when the Player is deployed to a device. Decompression is performed in real time when the Player reads the data. Scene or Asset loading might be faster or slower depending on disk read speed when compared to using uncompressed data.

When this flag is passed the player content is stored inside a Unity Archive file named **data.unity3d**.  The build process splits the data into 128KB chunks and applies LZ4 compression to each chunk.
For higher compression the [BuildOptions.CompressWithLz4HC](BuildOptions.CompressWithLz4HC.html) flag can be used instead.

This archive file contains the following content:



          1. Player settings - *globalgamemanagers* and *globalgamemanagers.assets** files.

          2. Scenes and referenced Assets - *level** and *sharedassets*.asset* files.

          3. Assets from Resources folders - *resources.assets* files.

          4. Global Illumination data - GI/level* files.

          5. Built-in resources - *Resources/unity_builtin_extra* file.





This archive file does not contain the *Resources/unity default resources* file.

This feature is supported for **Standalone**, **Android** and **iOS** build targets and is default for **WebGL** target.

Enabling *CompressWithLz4* in **Android** might be a significant performance boost when loading data, as LZ4 decompression is faster than the default Zip decompression.

**Note:**

Using chunk-based compression for player data will reduce the size of the player on the device, while still allowing efficient loading.
However chunk-based compression is typically not as small as full-file compression, and it will not compress much further if another layer of compression is applied at packaging time.
Hence the game installer might end up a bit larger when using this flag.

LZ4 compression can also be applied to AssetBundles. For more information, refer to [BuildAssetBundleOptions.ChunkBasedCompression](BuildAssetBundleOptions.ChunkBasedCompression.html) and [AssetBundles-Cache](../Manual/AssetBundles-Cache.html).

Additional resources: [ReducingFilesize](../Manual/ReducingFilesize.html), [ArchiveHandle.Compression](Unity.IO.Archive.ArchiveHandle.Compression.html).


            

This version of Unity is unsupported.



# [PackedAssetInfo](Build.Reporting.PackedAssetInfo.html).packedSize




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












                    public ulong packedSize;






### Description



The size in bytes of the Packed Asset.





This is the size prior to any compression.  The actual size on disk can be smaller when the file is stored inside a Unity Archive (e.g. in the case of a AssetBundle, or a Player built with [BuildOptions.CompressWithLz4HC](BuildOptions.CompressWithLz4HC.html)).

Note: there can be extra padding bytes inserted between Packed Assets, added for alignment purpose.
Because of this, the offset + packedSize may be slightly smaller than the offset of the next element in the PackedAsset array.

Additional resources: PackedAssets._contents


            

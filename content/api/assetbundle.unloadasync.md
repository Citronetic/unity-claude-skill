This version of Unity is unsupported.



# [AssetBundle](AssetBundle.html).UnloadAsync




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

public [AssetBundleUnloadOperation](AssetBundleUnloadOperation.html) UnloadAsync(bool unloadAllLoadedObjects);






### Returns



**AssetBundleUnloadOperation**
        Asynchronous unload request for an AssetBundle.





### Description



Unloads assets in the bundle.





When `unloadAllLoadedObjects` is false, tracking data structures and any memory buffers holding content of the AssetBundle will be freed. But any instances of objects loaded from this bundle will remain intact.

When `unloadAllLoadedObjects` is true, all objects that were loaded from this bundle will be destroyed as well. If there are GameObjects in your Scene referencing those assets, the references to them will become missing.

After calling UnloadAsync on an AssetBundle, you cannot load any more objects from that bundle and other operations on the bundle will throw InvalidOperationException.

**Warning:** Unloading an asset bundle that serves as a dependency for other asset bundles still in use can lead to undefined behavior. This includes serialization errors that may occur even if the dependency asset bundle is later reloaded. To avoid such issues, ensure that an asset bundle and all asset bundles that depend on it are unloaded together.

Additional resources: [UnloadAllAssetBundles](AssetBundle.UnloadAllAssetBundles.html), [Unload](AssetBundle.Unload.html), [Using AssetBundles Natively](../Manual/AssetBundles-Native.html).


            

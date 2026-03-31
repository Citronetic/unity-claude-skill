This version of Unity is unsupported.



# [BuildAssetBundleOptions](BuildAssetBundleOptions.html).DisableWriteTypeTree




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



Omits type information from the AssetBundle.





This flag is useful for AssetBundles that are included within Player builds and are rebuilt for every new Player release.
However, before using this flag, it is critical to fully understand the compatibility and redistribution implications of removing Type Trees.

By default (when this flag is **not** specified), each SerializedFile inside an AssetBundle contains the Type Tree information for all types used in that file.

Type Trees enable Unity to:



          - Load content that was built with earlier versions of Unity or with different script versions.

          - Load AssetBundles in the Editor.





When this flag is specified only the hash of each Type Tree is recorded in the SerializedFile headers, not the entire Type Tree definition.

**Example**:

Suppose an AssetBundle includes instances of a MonoBehaviour-derived class with two fields: a string `A` followed by an integer `B`.
The Type Tree records the order, types and names of the fields so that the binary presentation of each serialized object of that type can be interpreted properly.

Then suppose the class definition changes to include a float `C` first, followed by integer `B` and string `A`.

The Type Tree inside the AssetBundle ensures that new builds of the Player can still load it, recovering the values of the `A` and `B` fields even though they do not match the current definition
of that class.

**Advantages to using DisableWriteTypeTree**:

Omitting Type Trees reduces AssetBundle size, which can be significant for projects with many small AssetBundles
or complex scripting types containing numerous fields or deeply nested structs.
Therefore this flag can be a useful optimization in cases where you know that you will always
rebuild and redistribute all AssetBundles any time that you rebuild your player.

**Important Considerations**:

AssetBundles built without Type Trees will have strict compatibility requirements:



          - They can only be loaded by Players built with exactly the same types. Unity verifies this by comparing Type Tree hashes at load time, and the load will fail if any mismatch is detected.

          - They cannot be loaded in the Editor.

          - Tools like `binary2text` and [UnityDataTools](https://github.com/Unity-Technologies/UnityDataTools) cannot view the serialized data.





**Platform Limitations**



For some platforms (e.g. [BuildTarget.WebGL](BuildTarget.WebGL.html)), Type Trees are mandatory. Unity will reject attempts to build AssetBundles with this flag for such targets.


            

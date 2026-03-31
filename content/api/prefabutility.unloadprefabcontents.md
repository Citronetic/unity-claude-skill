This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).UnloadPrefabContents




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

public static void UnloadPrefabContents([GameObject](GameObject.html) contentsRoot);






### Parameters



| Parameter | Description |
| --- | --- |
| contentsRoot | The root of the loaded Prefab contents. |





### Description



Releases the content from a Prefab previously loaded with LoadPrefabContents from memory.





This will destroy the GameObject in memory and release the isolated Scene used to contain the Prefab content.

The root GameObject will not be available after this call. The Prefab Asset itself is not affected by this call.

Additional resources: [PrefabUtility.LoadPrefabContents](PrefabUtility.LoadPrefabContents.html), [PrefabUtility.SaveAsPrefabAsset](PrefabUtility.SaveAsPrefabAsset.html), [EditPrefabContentsScope](PrefabUtility.EditPrefabContentsScope.html).


            

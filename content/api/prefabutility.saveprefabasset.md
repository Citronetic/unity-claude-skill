This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).SavePrefabAsset




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

public static [GameObject](GameObject.html) SavePrefabAsset([GameObject](GameObject.html) asset);






## Declaration

public static [GameObject](GameObject.html) SavePrefabAsset([GameObject](GameObject.html) asset,
out bool savedSuccessfully);






### Parameters



| Parameter | Description |
| --- | --- |
| asset | Any GameObject that is part of the Prefab Asset to save. |
| savedSuccessfully | The result of the save action, either successful or unsuccessful. Use this together with the console log to get more insight into the save process. |





### Returns



**GameObject**
        The root GameObject of the saved Prefab Asset.





### Description



Saves the version of an existing Prefab Asset that exists in memory back to disk.





The GameObject must be part of an existing prefab asset. If you pass a GameObject from an instance of a prefab asset in a scene, Unity automatically finds and saves the corresponding prefab asset instead.

Additional resources: [PrefabUtility.SaveAsPrefabAsset](PrefabUtility.SaveAsPrefabAsset.html), [PrefabUtility.GetCorrespondingObjectFromSource](PrefabUtility.GetCorrespondingObjectFromSource.html).


            

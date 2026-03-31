This version of Unity is unsupported.



# [GlobalObjectId](GlobalObjectId.html).assetGUID




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












                    public GUID assetGUID;






### Description



The GUID for the asset that the referenced object belongs to.





The `assetGUID` constitutes the `{a}` element in the string representation of a `GlobalObjectId`, the format of which is:

`GlobalObjectId_V1-{i}-{a}-{l}-{p}`

The GUID is a globally unique identifier that Unity assigns to every newly discovered asset. For more information, refer to [Asset Metadata](../Manual/AssetMetadata.html) in the Manual.

Additional resources: [AssetDatabase.AssetPathToGUID](AssetDatabase.AssetPathToGUID.html), [AssetDatabase.GUIDToAssetPath](AssetDatabase.GUIDToAssetPath.html), [AssetDatabase.TryGetGUIDAndLocalFileIdentifier](AssetDatabase.TryGetGUIDAndLocalFileIdentifier.html)


            

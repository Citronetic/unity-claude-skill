This version of Unity is unsupported.



# [ContentBuildInterface](Build.Content.ContentBuildInterface.html).GetTypeForObjects




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

public static Type[] GetTypeForObjects(ObjectIdentifier[] objectIDs);






### Parameters



| Parameter | Description |
| --- | --- |
| objectIDs | The specific objects. |





### Returns



**Type[]**
        The array of unique types.





### Description



Returns the System.Type of the [ObjectIdentifier](Build.Content.ObjectIdentifier.html)s and the referenced [SerializeReference](SerializeReference.html) class types specified by `objectIDs`.





The results do not directly correspond to the input ObjectIdentifiers by index as a single [ObjectIdentifier](Build.Content.ObjectIdentifier.html) can return multiple types.
Use [ContentBuildInterface.GetTypesForObject](Build.Content.ContentBuildInterface.GetTypesForObject.html) or [ContentBuildInterface.GetTypeForObject](Build.Content.ContentBuildInterface.GetTypeForObject.html) if you want that information.
Internal use only. See note on [ContentBuildInterface](Build.Content.ContentBuildInterface.html).


            

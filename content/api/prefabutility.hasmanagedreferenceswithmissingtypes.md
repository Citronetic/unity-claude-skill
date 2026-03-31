This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).HasManagedReferencesWithMissingTypes




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

public static bool HasManagedReferencesWithMissingTypes([Object](Object.html) assetComponentOrGameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| componentOrGameObject | An object which is part of a Prefab asset. |





### Returns



**bool**
        Returns true if there are missing SerializeReference types directly within a Prefab asset excluding nested Prefab.





### Description



Determines whether the object Prefab asset contains any MonoBehaviours with missing SerializeReference types.





This method returns true if the prefab asset contains missing SerializeReference types. Applying property modifications
              to a prefab asset removes missing type information from the prefab asset. However, editing a prefab asset in prefab editing mode
              preserves missing type information. If you are on an instance, you can use [PrefabUtility.GetCorrespondingObjectFromSource](PrefabUtility.GetCorrespondingObjectFromSource.html)
              to validate if the prefab asset has missing types.
              Additional resources: [SerializationUtility.HasManagedReferencesWithMissingTypes](SerializationUtility.HasManagedReferencesWithMissingTypes.html), [SerializeReference](SerializeReference.html)


            

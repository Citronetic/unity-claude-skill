This version of Unity is unsupported.



# [GlobalObjectId](GlobalObjectId.html).GlobalObjectIdentifierToObjectSlow




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

public static Object GlobalObjectIdentifierToObjectSlow([GlobalObjectId](GlobalObjectId.html) id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | The GlobalObjectId to lookup. |





### Returns



**Object**

Returns a reference to the object.

Returns `null` if the `GlobalObjectId` can't be found, or if the object is inside a scene and the scene isn't loaded.





### Description



Obtains a reference to an object from its unique object identifier.





This method is slow. Use it sparingly. If you use this method in a large project within other performance-sensitive contexts such as [ISerializationCallbackReceiver.OnBeforeSerialize](ISerializationCallbackReceiver.OnBeforeSerialize.html) or [ISerializationCallbackReceiver.OnAfterDeserialize](ISerializationCallbackReceiver.OnAfterDeserialize.html), it's strongly recommended to profile the performance impact.

Additional resources: [GlobalObjectId.GlobalObjectIdentifiersToObjectsSlow](GlobalObjectId.GlobalObjectIdentifiersToObjectsSlow.html)


            

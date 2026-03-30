This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).SetLinkOwner




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

public static void SetLinkOwner([AI.NavMeshLinkInstance](AI.NavMeshLinkInstance.html) handle,
[Object](Object.html) owner);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The identifier of the link instance for which you assign an owner. |
| owner | An object that carries useful information in relation to the instance of the link. |





### Description



Associates an object with the instance of a link.





Call [GetLinkOwner](AI.NavMesh.GetLinkOwner.html) to retrieve a reference to the assigned object. The [OffMeshLinkData.owner](AI.OffMeshLinkData-owner.html) property obtained from the path of an agent also points to the object that has been assigned to the link.

If the instance of the link is not valid, setting the owner has no effect and getting it returns null.

Additional resources: [OffMeshLinkData.owner](AI.OffMeshLinkData-owner.html).


            

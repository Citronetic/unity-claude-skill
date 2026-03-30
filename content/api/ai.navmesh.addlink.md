This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).AddLink




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

public static [AI.NavMeshLinkInstance](AI.NavMeshLinkInstance.html) AddLink([AI.NavMeshLinkData](AI.NavMeshLinkData.html) link);






### Parameters



| Parameter | Description |
| --- | --- |
| link | Object that describes the properties of the link. |





### Returns



**NavMeshLinkInstance**
        Object that identifies the added link.





### Description



Adds a link to the NavMesh. The link is described by the NavMeshLinkData struct.





Returns an instance identifier for the added link.

The returned instance is valid if the link was successfully added. The instance can be used to later remove the link using RemoveLink().

**Note:** If the area is set to Not Walkable, or if adding a link would exceed the maximum number of active links (65535) the link will fail to be added – and the valid property will be false.

Additional resources: [NavMeshLinkInstance](AI.NavMeshLinkInstance.html), [RemoveLink](AI.NavMesh.RemoveLink.html).




---








## Declaration

public static [AI.NavMeshLinkInstance](AI.NavMeshLinkInstance.html) AddLink([AI.NavMeshLinkData](AI.NavMeshLinkData.html) link,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation);






### Parameters



| Parameter | Description |
| --- | --- |
| link | Object that describes the properties of the link. |
| position | Translate the link to this position. |
| rotation | Rotate the link to this orientation. |





### Returns



**NavMeshLinkInstance**
        Object that identifies the added link.





### Description



Adds a link to the NavMesh. The link is described by the NavMeshLinkData struct.





Returns an instance identifier for the added link.

This function is similar to AddLink above, but the position and rotation specified is applied to the start and end positions of the link. The rotation also specifies the local up-axis of the link.

Additional resources: [NavMeshLinkInstance](AI.NavMeshLinkInstance.html), [RemoveLink](AI.NavMesh.RemoveLink.html).


            

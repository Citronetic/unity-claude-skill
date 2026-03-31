This version of Unity is unsupported.



# QueryParameters Constructor




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

public QueryParameters(int layerMask,
bool hitMultipleFaces,
[QueryTriggerInteraction](QueryTriggerInteraction.html) hitTriggers,
bool hitBackfaces);






### Parameters



| Parameter | Description |
| --- | --- |
| layerMask | A LayerMask that is used to selectively filter which colliders are considered when casting a ray. |
| hitMultipleFaces | Whether raycast batch query should hit multiple faces. |
| hitTriggers | Whether queries hit Triggers by default. |
| hitBackfaces | Whether physics queries should hit back-face triangles. |





### Description



Struct used to set up parameters for queries: [RaycastCommand](RaycastCommand.html), [BoxcastCommand](BoxcastCommand.html), [CapsulecastCommand](CapsulecastCommand.html), [SpherecastCommand](SpherecastCommand.html).


            

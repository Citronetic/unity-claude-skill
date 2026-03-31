This version of Unity is unsupported.



# QueryParameters





struct in
          UnityEngine



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


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



Creates a struct to set up parameters for batch queries: [RaycastCommand](RaycastCommand.html), [BoxcastCommand](BoxcastCommand.html), [CapsulecastCommand](CapsulecastCommand.html), [SpherecastCommand](SpherecastCommand.html).





Use this struct to configure hit flags and layer mask. This supports hit triggers, hit backfaces and hit multiple Mesh faces.

Note: Only RaycastCommand supports hitting multiple Mesh faces.





### Static Properties



| Property | Description |
| --- | --- |
| Default | Create a default QueryParameters struct. |





### Properties



| Property | Description |
| --- | --- |
| hitBackfaces | Whether physics queries should hit back-face triangles. |
| hitMultipleFaces | Whether raycast batch query should hit multiple faces. |
| hitTriggers | Whether queries hit Triggers by default. |
| layerMask | A LayerMask that is used to selectively filter which colliders are considered when casting a ray. |





### Constructors



| Constructor | Description |
| --- | --- |
| QueryParameters | Struct used to set up parameters for queries: RaycastCommand, BoxcastCommand, CapsulecastCommand, SpherecastCommand. |


            

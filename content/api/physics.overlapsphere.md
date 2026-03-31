This version of Unity is unsupported.



# [Physics](Physics.html).OverlapSphere




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

public static Collider[] OverlapSphere([Vector3](Vector3.html) position,
float radius,
int layerMask = AllLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Center of the sphere. |
| radius | Radius of the sphere. |
| layerMask | A Layer mask defines which layers of colliders to include in the query. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**Collider[]**
        Returns an array with all colliders touching or inside the sphere.





### Description



Computes and stores colliders touching or inside the sphere.





Additional resources: [Physics.AllLayers](Physics.AllLayers.html).
Allocates memory. Consider using [Physics.OverlapSphereNonAlloc](Physics.OverlapSphereNonAlloc.html) instead.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void ExplosionDamage(Vector3 center, float radius)
    {
        Collider[] hitColliders = Physics.OverlapSphere(center, radius);
        foreach (var hitCollider in hitColliders)
        {
            hitCollider.SendMessage("AddDamage");
        }
    }
}
```





Additional resources: Ray cast with layers section of [Use of layers in Unity](../Manual/use-layers.html).


            

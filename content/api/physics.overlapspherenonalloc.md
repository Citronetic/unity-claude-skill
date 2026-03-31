This version of Unity is unsupported.



# [Physics](Physics.html).OverlapSphereNonAlloc




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

public static int OverlapSphereNonAlloc([Vector3](Vector3.html) position,
float radius,
Collider[] results,
int layerMask = AllLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Center of the sphere. |
| radius | Radius of the sphere. |
| results | The buffer to store the results into. |
| layerMask | A Layer mask defines which layers of colliders to include in the query. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**int**
        Returns the amount of colliders stored into the `results` buffer.





### Description



Computes and stores colliders touching or inside the sphere into the provided buffer.





Does not attempt to grow the buffer if it runs out of space. The length of the buffer is returned when the buffer is full.
Like [Physics.OverlapSphere](Physics.OverlapSphere.html), but generates no garbage.
Additional resources: [Physics.AllLayers](Physics.AllLayers.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    // Declare hitColliders as a reusable field.
    private Collider[] hitColliders;    // Set the maximum number of colliders that can be detected at once.
    private const int maxColliders = 10;    void Awake()
    {
        // Initialize the array just once.
        hitColliders = new Collider[maxColliders];
    }    void ExplosionDamage(Vector3 center, float radius)
    {
        // Reuse the pre-allocated array for Physics.OverlapSphereNonAlloc.
        int numColliders = Physics.OverlapSphereNonAlloc(center, radius, hitColliders);        // Iterate through detected colliders and send the AddDamage message.
        for (int i = 0; i < numColliders; i++)
        {
            hitColliders[i].SendMessage("AddDamage");
        }
    }
}
```





Additional resources: Ray cast with layers section of [Use of layers in Unity](../Manual/use-layers.html).


            

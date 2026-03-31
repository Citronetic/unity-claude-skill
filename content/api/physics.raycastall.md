This version of Unity is unsupported.



# [Physics](Physics.html).RaycastAll




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

public static RaycastHit[] RaycastAll([Ray](Ray.html) ray,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The starting point and direction of the ray. |
| maxDistance | The max distance the rayhit is allowed to be from the start of the ray. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**RaycastHit[]**
        An array of RaycastHit objects. Note that the order of the results is undefined.





### Description



Casts a ray through the Scene and returns all hits. Note that order of the results is undefined.





Additional resources: [Raycast](Physics.Raycast.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        RaycastHit[] hits;
        hits = Physics.RaycastAll(transform.position, transform.forward, 100.0F);        for (int i = 0; i < hits.Length; i++)
        {
            RaycastHit hit = hits[i];
            Renderer rend = hit.transform.GetComponent<Renderer>();            if (rend)
            {
                // Change the material of all hit colliders
                // to use a transparent shader.
                rend.material.shader = Shader.Find("Transparent/Diffuse");
                Color tempColor = rend.material.color;
                tempColor.a = 0.3F;
                rend.material.color = tempColor;
            }
        }
    }
}
```





**Notes:** Raycasts will not detect colliders for which the raycast origin is inside the collider.




---








## Declaration

public static RaycastHit[] RaycastAll([Vector3](Vector3.html) origin,
[Vector3](Vector3.html) direction,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The starting point of the ray in world coordinates. |
| direction | The direction of the ray. |
| maxDistance | The max distance the rayhit is allowed to be from the start of the ray. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a ray. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Description



Additional resources: [Raycast](Physics.Raycast.html).





See example above.


            

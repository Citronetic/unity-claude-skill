This version of Unity is unsupported.



# [Physics](Physics.html).CheckSphere




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

public static bool CheckSphere([Vector3](Vector3.html) position,
float radius,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Center of the sphere. |
| radius | Radius of the sphere. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a sphere. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Description



Returns true if there are any colliders overlapping the sphere defined by `position` and `radius` in world coordinates.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float sphereRadius;
    AudioSource audioSource;    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }    void WarningNoise()
    {
        // Play a noise if an object is within the sphere's radius.
        if (Physics.CheckSphere(transform.position, sphereRadius))
        {
            audioSource.Play();
        }
    }
}
```


            

This version of Unity is unsupported.



# [RaycastHit2D](RaycastHit2D.html).fraction




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












                    public float fraction;






### Description



The fraction of the distance specified to the physics query before it detected a [Collider2D](Collider2D.html).





When a physics query is used, it has a start position and an explicit end position or a direction and distance. The `fraction` is a value in the range of `0` and `1` which is a representation of the returned [RaycastHit2D.distance](RaycastHit2D-distance.html) result (see code example).

If the physics query does not allow specifying an explicit end position or it has a default distance of `infinity` then the `fraction` is identical to the returned [RaycastHit2D.distance](RaycastHit2D-distance.html) and therefore will not be in the range of `0` and `1`.

Additional resources: [RaycastHit2D.distance](RaycastHit2D-distance.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public Vector2 direction;    void Update()
    {
        // Cast a ray in the specified direction up to 10 world units away.
        RaycastHit2D hit = Physics2D.Raycast(transform.position, direction, 10f);        // If we hit something then indicate if it was less-than or greater-than halfway of the physics query.
        if (hit)
        {
            if (hit.fraction < 0.5f)
                Debug.Log("Hit something before halfway!");
            else
               Debug.Log("Hit something after halfway!");
        }
    }
}
```


            

This version of Unity is unsupported.



# [Physics](Physics.html).IgnoreCollision




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

public static void IgnoreCollision([Collider](Collider.html) collider1,
[Collider](Collider.html) collider2,
bool ignore = true);






### Parameters



| Parameter | Description |
| --- | --- |
| collider1 | Any collider. |
| collider2 | Another collider you want to have collider1 to start or stop ignoring collisions with. |
| ignore | Whether or not the collisions between the two colliders should be ignored or not. |





### Description



Makes the collision detection system ignore all collisions between `collider1` and `collider2`.





This is useful, say, for preventing projectiles from colliding with the object that fires them.

Note that [IgnoreCollision](Physics.IgnoreCollision.html) is not persistent. This means ignore collision state will not be stored in the editor when saving a scene.

If `ignore` is false, collisions can occur. Set `ignore` to true to ignore collisions.

Additional resources: [Physics.IgnoreLayerCollision](Physics.IgnoreLayerCollision.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform bulletPrefab;    void Start()
    {
        Transform bullet = Instantiate(bulletPrefab) as Transform;
        Physics.IgnoreCollision(bullet.GetComponent<Collider>(), GetComponent<Collider>());
    }
}
```


            

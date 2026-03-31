This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).Distance




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

public [ColliderDistance2D](ColliderDistance2D.html) Distance([Collider2D](Collider2D.html) collider);






### Parameters



| Parameter | Description |
| --- | --- |
| collider | A collider used to calculate the minimum distance against all colliders attached to this Rigidbody2D. |





### Returns



**ColliderDistance2D**
        The minimum distance of `collider` against all colliders attached to this [Rigidbody2D](Rigidbody2D.html).





### Description



Calculates the minimum distance of this `collider` against all [Collider2D](Collider2D.html) attached to this [Rigidbody2D](Rigidbody2D.html).





The provided `collider` will be check against all [Collider2D](Collider2D.html) attached to this [Rigidbody2D](Rigidbody2D.html) and the minimum distance from all attached [Collider2D](Collider2D.html) will be returned.

The provided `collider` and at least one [Collider2D](Collider2D.html) attached to this [Rigidbody2D](Rigidbody2D.html) must be valid for the returned [ColliderDistance2D](ColliderDistance2D.html) to be valid i.e. the [Collider2D](Collider2D.html) should not be disabled and must contain collision shapes and the provided `collider` must not be NULL.  You can check if the returned value is valid by checking [ColliderDistance2D.isValid](ColliderDistance2D-isValid.html).

Additional resources: [Physics2D.Distance](Physics2D.Distance.html) and [Collider2D.Distance](Collider2D.Distance.html).




---








## Declaration

public [ColliderDistance2D](ColliderDistance2D.html) Distance([Vector2](Vector2.html) thisPosition,
float thisAngle,
[Collider2D](Collider2D.html) collider,
[Vector2](Vector2.html) position,
float angle);






### Parameters



| Parameter | Description |
| --- | --- |
| thisPosition | The position to use for this Rigidbody. |
| thisAngle | The rotation to use for this Rigidbody. |
| collider | A collider used to calculate the minimum separation against this Rigidbody. |
| position | The position to use for the specified collider. |
| angle | The rotation to use for the specified collider. |





### Returns



**ColliderDistance2D**
        The minimum distance of `collider` against all colliders attached to this [Rigidbody2D](Rigidbody2D.html).





### Description



Calculates the minimum distance of this `collider` against all [Collider2D](Collider2D.html) attached to this [Rigidbody2D](Rigidbody2D.html).





The provided `collider` will be check against all [Collider2D](Collider2D.html) attached to this [Rigidbody2D](Rigidbody2D.html) and the minimum distance from all attached [Collider2D](Collider2D.html) will be returned.

The provided `collider` and at least one [Collider2D](Collider2D.html) attached to this [Rigidbody2D](Rigidbody2D.html) must be valid for the returned [ColliderDistance2D](ColliderDistance2D.html) to be valid i.e. the [Collider2D](Collider2D.html) should not be disabled and must contain collision shapes and the provided `collider` must not be NULL.  You can check if the returned value is valid by checking [ColliderDistance2D.isValid](ColliderDistance2D-isValid.html).

**NOTE**: The positions and angles used here represent the position of the [Rigidbody2D](Rigidbody2D.html) the respective [Collider2D](Collider2D.html) is attached to. If the [Collider2D](Collider2D.html) is offset from the center of mass then the [Collider2D](Collider2D.html) will use the same offset. This can be confusing so it is recommened that only [Collider2D](Collider2D.html) that align with the center of mass are used. If not then you must take this into account. If the specified `collider` is not attached to a [Rigidbody2D](Rigidbody2D.html), this call cannot be used and will result in a warning.

Additional resources: [Physics2D.Distance](Physics2D.Distance.html) and [Collider2D.Distance](Collider2D.Distance.html).


            

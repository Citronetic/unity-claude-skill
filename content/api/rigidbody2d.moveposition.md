This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).MovePosition




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

public void MovePosition([Vector2](Vector2.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The new position for the Rigidbody object. |





### Description



Moves the rigidbody to `position`.





Moves the rigidbody to the specified `position` by calculating the appropriate linear velocity required to move the rigidbody to that position during the next physics update.  During the move, neither gravity or [linearDamping](Rigidbody2D-linearDamping.html) will affect the body.  This causes the object to rapidly move from the existing position, through the world, to the specified `position`.

Because this feature allows a rigidbody to be moved rapidly to the specified `position` through the world, any colliders attached to the rigidbody will react as expected i.e. they will produce collisions and/or triggers.  This also means that if the colliders produce a collision then it will affect the rigidbody movement and potentially stop it from reaching the specified `position` during the next physics update.  If the rigidbody is kinematic then any collisions won't affect the rigidbody itself and will only affect any other dynamic colliders.

2D rigidbodies have a fixed limit on how fast they can move therefore attempting to move large distances over short time-scales can result in the rigidbody not reaching the specified `position` during the next physics update.  It is recommended that you use this for relatively small distance movements only.

It is important to understand that the actual position change will only occur during the next
physics update therefore calling this method repeatedly without waiting for the next physics
update will result in the last call being used.  For this reason, it is recommended that it
is called during the FixedUpdate callback.

**Note:** [MovePosition](Rigidbody2D.MovePosition.html) is  intended for use with kinematic rigidbodies.


              


```
// Move sprite bottom left to upper right.  It does not stop moving.
// The Rigidbody2D gives the position for the cube.using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    public Texture2D tex;    private Vector2 velocity;
    private Rigidbody2D rb2D;
    private Sprite mySprite;
    private SpriteRenderer sr;    void Awake()
    {
        sr = gameObject.AddComponent<SpriteRenderer>();
        rb2D = gameObject.AddComponent<Rigidbody2D>();
    }    void Start()
    {
        mySprite = Sprite.Create(tex, new Rect(0.0f, 0.0f, tex.width, tex.height), new Vector2(0.5f, 0.5f), 100.0f);
        velocity = new Vector2(1.75f, 1.1f);
        sr.color = new Color(0.9f, 0.9f, 0.0f, 1.0f);        transform.position = new Vector3(-2.0f, -2.0f, 0.0f);
        sr.sprite = mySprite;
    }    void FixedUpdate()
    {
        rb2D.MovePosition(rb2D.position + velocity * Time.fixedDeltaTime);
    }
}
```


            

This version of Unity is unsupported.



# [PolygonCollider2D](PolygonCollider2D.html).CreateFromSprite




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

public bool CreateFromSprite([Sprite](Sprite.html) sprite,
float detail = 0.25f,
byte alphaTolerance = 200,
bool holeDetection = true);






### Parameters



| Parameter | Description |
| --- | --- |
| sprite | The sprite to extract the polygon shape data from. |
| detail | The detail used when tessellating the sprite outline, in the range [0, 1]. This is only used if the sprite doesn't already have its own PhysicsShape outline(s). This value has the same meaning as the similarly named property in the Sprite Editor. |
| alphaTolerance | The alpha tolerance used to separate the sprite from its background, in the range [0, 255]. This is only used if the sprite doesn't already have its own PhysicsShape outline(s). This value has the same meaning as the similarly named property in the Sprite Editor. |
| holeDetection | Selects whether internal holes should be detected when creating the sprite outlines. This is only used if the sprite doesn't already have its own PhysicsShape outline(s). This value has the same meaning as the similarly named property in the Sprite Editor. |





### Returns



**bool**
        Returns `true` if the selected sprite resulted in polygon shapes being created. Returns `false` if not, in which case the Collider will be set to a default primitive shape.





### Description



Create polygon shapes using the selected sprite.





If the selected `sprite` already has its own PhysicShape(s) defined in the Sprite Editor then that outline will be tessellated into polygon shapes to be used here.

If the selected `sprite` does not have its own PhysicsShape(s) then a new outline will be created using the additional arguments provided. This takes additional time and in all cases, it is preferred that each [Sprite](Sprite.html) has its own PhysicsShape(s) defined.

**NOTE**: If PhysicsShape(s) are not available in the Sprite and the additional arguments are used in a player build then the [Sprite.texture](Sprite-texture.html) must have read/write enabled in the importer so it is [readable](Texture-isReadable.html).

Additional resources: [Sprite](Sprite.html), [Sprite.GetPhysicsShapeCount](Sprite.GetPhysicsShapeCount.html), [Sprite.GetPhysicsShape](Sprite.GetPhysicsShape.html) and [Sprite.GetPhysicsShapePointCount](Sprite.GetPhysicsShapePointCount.html).


            

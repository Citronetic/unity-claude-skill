This version of Unity is unsupported.



# Physics2D





class in
          UnityEngine



/



Implemented in:[UnityEngine.Physics2DModule](UnityEngine.Physics2DModule.html)


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



Provides utilities and global settings to manage and simulate 2D physics interactions, such as collision detection and raycasting.





The Physics2D class provides tools and global settings for simulating 2D physics interactions, such as collision detection and raycasting. It is crucial for integrating realistic physics behaviors in 2D games, such as platformers and puzzle games.

To use Physics2D, set up your GameObjects with [Collider2D](Collider2D.html)-based, and [Rigidbody2D](Rigidbody2D.html) components if required, and ensure proper configuration of layers and tags for collision detection and raycasting. Be mindful of potential performance impacts when using physics in complex scenes. Common issues may arise from incorrect setup of [Collider2D](Collider2D.html)-based or [Rigidbody2D](Rigidbody2D.html) components, so understanding the order of physics updates and force application is important for troubleshooting.

This example illustrates how to set up a basic player controller for a 2D platformer game using the Physics2D utilities and settings:


              


```
using UnityEngine;

public class PlayerController2DExample : MonoBehaviour
{
    public float moveSpeed = 5f;
    public float jumpForce = 10f;
    public LayerMask groundLayer;
    private Rigidbody2D rb;
    private bool isGrounded;

    void Start()
    {
        // Set a custom gravity for the 2D physics world
        Physics2D.gravity = new Vector2(0f, -9.8f);

        // Get the Rigidbody2D component attached to the player
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        // Check if player is touching the ground
        isGrounded = Physics2D.OverlapCircle(transform.position, 0.1f, groundLayer);

        // Get horizontal input for player movement
        float moveInput = Input.GetAxis("Horizontal");
        rb.linearVelocity = new Vector2(moveInput * moveSpeed, rb.linearVelocity.y);

        // Check for jump input and apply force if grounded
        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            rb.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);
        }
    }
}
```





Additional resources: [BoxCollider2D](BoxCollider2D.html), [CapsuleCollider2D](CapsuleCollider2D.html), [CircleCollider2D](CircleCollider2D.html), [CompositeCollider2D](CompositeCollider2D.html), [CustomCollider2D](CustomCollider2D.html), [EdgeCollider2D](EdgeCollider2D.html), [PolygonCollider2D](PolygonCollider2D.html), [TilemapCollider2D](Tilemaps.TilemapCollider2D.html) & [Rigidbody2D](Rigidbody2D.html).





### Static Properties



| Property | Description |
| --- | --- |
| AllLayers | Layer mask constant that includes all layers. |
| angularSleepTolerance | A Rigidbody cannot sleep if its angular velocity is above this tolerance threshold. |
| autoSyncTransforms | Set whether to automatically sync changes to the Transform component with the physics engine. |
| baumgarteScale | The scale factor that controls how fast overlaps are resolved. |
| baumgarteTOIScale | The scale factor that controls how fast TOI overlaps are resolved. |
| bounceThreshold | Any collisions with a relative linear velocity below this threshold will be treated as inelastic so no bounce will occur. |
| callbacksOnDisable | Use this to control whether or not the appropriate OnCollisionExit2D or OnTriggerExit2D callbacks should be called when a Collider2D is disabled. |
| contactThreshold | A threshold below which a contact is automatically disabled. |
| defaultContactOffset | The default contact offset of the newly created Colliders. |
| defaultPhysicsScene | The PhysicsScene2D automatically created when Unity starts. |
| DefaultRaycastLayers | Layer mask constant that includes all layers participating in raycasts by default. |
| gravity | Acceleration due to gravity. |
| IgnoreRaycastLayer | Layer mask constant for the default layer that ignores raycasts. |
| jobOptions | A set of options that control how physics operates when using the job system to multithread the physics simulation. |
| linearSleepTolerance | A rigid-body cannot sleep if its linear velocity is above this tolerance. |
| maxAngularCorrection | The maximum angular position correction used when solving constraints.  This helps to prevent overshoot. |
| maxLinearCorrection | The maximum linear position correction used when solving constraints.  This helps to prevent overshoot. |
| MaxPolygonShapeVertices | The maximum number of vertices allowed per primitive polygon shape type (PhysicsShapeType2D.Polygon). (Read Only) |
| maxRotationSpeed | The maximum angular speed of a rigid-body per physics update.  Increasing this can cause numerical problems. |
| maxSubStepCount | The maximum number of simulation sub-steps allowed per-frame when simulation sub-stepping is enabled. |
| maxTranslationSpeed | The maximum linear speed of a rigid-body per physics update.  Increasing this can cause numerical problems. |
| minSubStepFPS | The minimum FPS allowed for a simulation step before sub-stepping will be used. |
| positionIterations | The number of iterations of the physics solver when considering objects' positions. |
| queriesHitTriggers | Do raycasts detect Colliders configured as triggers? |
| queriesStartInColliders | Set the raycasts or linecasts that start inside Colliders to detect or not detect those Colliders. |
| reuseCollisionCallbacks | Determines whether the garbage collector should reuse only a single instance of a Collision2D type for all collision callbacks. |
| simulationLayers | The Rigidbody2D and Collider2D layers to simulate. |
| simulationMode | Controls when Unity executes the 2D physics simulation. |
| timeToSleep | The time in seconds that a rigid-body must be still before it will go to sleep. |
| useSubStepContacts | Whether to calculate contacts for all simulation sub-steps or only the first sub-step. |
| useSubStepping | Whether to use simulation sub-stepping during a simulation step. |
| velocityIterations | The number of iterations of the physics solver when considering objects' velocities. |





### Static Methods



| Method | Description |
| --- | --- |
| BoxCast | Casts a box against Colliders in the Scene, returning the first Collider to contact with it. |
| BoxCastAll | Casts a box against Colliders in the Scene, returning all Colliders that contact with it. |
| CapsuleCast | Casts a capsule against Colliders in the Scene, returning the first Collider to contact with it. |
| CapsuleCastAll | Casts a capsule against Colliders in the Scene, returning all Colliders that contact with it. |
| CircleCast | Casts a circle against Colliders in the Scene, returning the first Collider to contact with it. |
| CircleCastAll | Casts a circle against Colliders in the Scene, returning all Colliders that contact with it. |
| ClosestPoint | Returns a point on the perimeter of the Collider that is closest to the specified position. |
| Distance | Calculates the minimum distance between two Colliders. |
| GetContacts | Retrieves all Colliders in contact with the Collider. |
| GetIgnoreCollision | Checks whether the collision detection system will ignore all collisions/triggers between collider1 and collider2 or not. |
| GetIgnoreLayerCollision | Checks whether collisions between the specified layers be ignored or not. |
| GetLayerCollisionMask | Get the collision layer mask that indicates which layer(s) the specified layer can collide with. |
| GetRayIntersection | Cast a 3D ray against the 2D Colliders in the Scene. |
| GetRayIntersectionAll | Cast a 3D ray against the 2D Colliders in the Scene. |
| IgnoreCollision | Makes the collision detection system ignore all collisions/triggers between collider1 and collider2. |
| IgnoreLayerCollision | Choose whether to detect or ignore collisions between a specified pair of layers. |
| IsTouching | Checks whether the passed Colliders are in contact or not. |
| IsTouchingLayers | Checks whether the Collider is touching any Colliders on the specified layerMask or not. |
| Linecast | Casts a line segment against Colliders in the Scene. |
| LinecastAll | Casts a line against Colliders in the Scene. |
| OverlapArea | Checks if a Collider falls within a rectangular area. |
| OverlapAreaAll | Get a list of all Colliders that fall within a rectangular area. |
| OverlapBox | Checks if a Collider falls within a box area. |
| OverlapBoxAll | Get a list of all Colliders that fall within a box area. |
| OverlapCapsule | Checks if a Collider falls within a capsule area. |
| OverlapCapsuleAll | Get a list of all Colliders that fall within a capsule area. |
| OverlapCircle | Checks if a Collider falls within a circular area. |
| OverlapCircleAll | Get a list of all Colliders that fall within a circular area. |
| OverlapCollider | Gets a list of all Colliders that overlap the given Collider. |
| OverlapPoint | Checks if a Collider overlaps a point in space. |
| OverlapPointAll | Get a list of all Colliders that overlap a point in space. |
| Raycast | Casts a ray against Colliders in the Scene. |
| RaycastAll | Casts a ray against Colliders in the Scene, returning all Colliders that contact with it. |
| SetLayerCollisionMask | Set the collision layer mask that indicates which layer(s) the specified layer can collide with. |
| Simulate | Simulate physics in the default physics scene. |
| SyncTransforms | Synchronizes. |


            

This version of Unity is unsupported.



# [Vector2](Vector2.html).Distance




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

public static float Distance([Vector2](Vector2.html) a,
[Vector2](Vector2.html) b);






### Parameters



| Parameter | Description |
| --- | --- |
| a | First position to compare distance from. |
| b | Second position to compare distance from. |





### Returns



**float**
        The distance between the two positions, as an absolute (positive) value.





### Description



Returns the distance between `a` and `b`.





The distance between two `Vector` objects is calculated as the magnitude of the `Vector` resulting from vectorA − vectorB.

VectorB − vectorA gives the same result.
In other words, `Vector2.Distance(a,b)` is the same as `(a-b).magnitude`.

You usually use this method is to find the distance between two entities.

For example, here an enemy will attack the player if they get within a certain range. The script below should be attached to an enemy `GameObject`.


              


```
using UnityEngine;public class DistanceExample_enemy : MonoBehaviour
{
    // Add a reference to the player, which is set in the Inspector window
    public GameObject player;    // Set the distance at which the enemy attacks
    public float attackDistanceThreshold = 2f;    void Update()
    {
        // Take the position of the player, and the position of this GameObject
        Vector2 playerPosition = player.transform.position;
        Vector2 myPosition = transform.position;        // Use Vector2.Distance to obtain the distance between the player position and this GameObject's position
        float distance = Vector2.Distance(myPosition, playerPosition);        // Check if the player is close enough
        if(distance < attackDistanceThreshold)
        {
            Attack(player);
        }
    }    void Attack(GameObject target)
    {
        // Insert the attack logic here
        Debug.Log($"{name} attacks {target.name}");
    }
}
```


            

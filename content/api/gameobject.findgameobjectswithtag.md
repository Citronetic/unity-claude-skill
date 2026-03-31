This version of Unity is unsupported.



# [GameObject](GameObject.html).FindGameObjectsWithTag




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




                [Switch to Manual](../Manual/class-GameObject.html)










## Declaration

public static GameObject[] FindGameObjectsWithTag(string tag);






### Parameters



| Parameter | Description |
| --- | --- |
| tag | The name of the tag to search for GameObjects by. |





### Description



Retrieves an array of all active GameObjects tagged with the specified tag. Returns an empty array if no GameObjects have the tag.





Tags must be declared in the tag manager before using them.  A `UnityException` will be thrown if the tag does not exist or if an empty string or `null` is supplied as the `tag` parameter.


              


```
// Instantiates respawnPrefab at the location
// of all GameObjects tagged "Respawn".using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject respawnPrefab;
    public GameObject[] respawns;
    void Start()
    {
        if (respawns == null)
            respawns = GameObject.FindGameObjectsWithTag("Respawn");        foreach (GameObject respawn in respawns)
        {
            Instantiate(respawnPrefab, respawn.transform.position, respawn.transform.rotation);
        }
    }
}
```





Another example:


              


```
// Find the name of the closest enemyusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject FindClosestEnemy()
    {
        GameObject[] gos;
        gos = GameObject.FindGameObjectsWithTag("Enemy");
        GameObject closest = null;
        float distance = Mathf.Infinity;
        Vector3 position = transform.position;
        foreach (GameObject go in gos)
        {
            Vector3 diff = go.transform.position - position;
            float curDistance = diff.sqrMagnitude;
            if (curDistance < distance)
            {
                closest = go;
                distance = curDistance;
            }
        }
        return closest;
    }
}
```





Another example, testing for empty array:


              


```
using UnityEngine;// Search for GameObjects with a tag that is not usedpublic class Example : MonoBehaviour
{
    void Start()
    {
        GameObject[] gameObjects;
        gameObjects = GameObject.FindGameObjectsWithTag("Enemy");        if (gameObjects.Length == 0)
        {
            Debug.Log("No GameObjects are tagged with 'Enemy'");
        }
    }
}
```


            

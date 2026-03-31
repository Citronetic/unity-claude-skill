This version of Unity is unsupported.



# [GameObjectUtility](GameObjectUtility.html).DuplicateGameObject




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

public static [GameObject](GameObject.html) DuplicateGameObject([GameObject](GameObject.html) gameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | The GameObject to be duplicated. |





### Returns



**GameObject**
        The duplicated GameObject.





### Description



Duplicates a single GameObject and returns the new GameObject.





Duplicates a GameObject within a Scene. The duplicated GameObject will be on the same level in the hierarchy as the original GameObject, and they will share the same parent. If there are any children or components that belong to the original GameObject, the duplicate will have them as well.

For duplicating more than one GameObject use [DuplicateGameObjects](GameObjectUtility.DuplicateGameObjects.html). For duplicating Assets use [CopyAsset](GameObjectUtility.CopyAsset.html).


              


```
using UnityEngine;
using UnityEditor;public static class DuplicateGameObjectExample
{
    // Create context menu
    [MenuItem("Example/DuplicateGameObject")]
    public static void DuplicateTest()
    {
        // The original GameObject
        GameObject gameObject = new GameObject();        // The duplicated GameObject
        GameObject duplicatedGameObject = GameObjectUtility.DuplicateGameObject(gameObject);        // Display the names of the original and duplicated GameObjects in the console
        Debug.Log("The original GameObject: " + gameObject.name);
        Debug.Log("The duplicated GameObject: " + duplicatedGameObject.name);
    }
}
```





Any errors and warnings from the duplication operation are reported in the log and the console.


            

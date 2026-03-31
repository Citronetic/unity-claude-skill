This version of Unity is unsupported.



# [Resources](Resources.html).FindObjectsOfTypeAll




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

public static T[] FindObjectsOfTypeAll();






### Description



Returns a list of all objects of Type `T`.





This function can return any type of Unity object that is loaded, including game objects, prefabs, materials, meshes, textures, etc. It will also list internal objects, therefore be careful with the way you handle the returned objects.

Contrary to Object.FindObjectsOfType this function will also list disabled objects.


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class ExampleScript : MonoBehaviour
{
    List<GameObject> GetAllObjectsOnlyInScene()
    {
        List<GameObject> objectsInScene = new List<GameObject>();        foreach (GameObject go in Resources.FindObjectsOfTypeAll(typeof(GameObject)) as GameObject[])
        {
            if (!EditorUtility.IsPersistent(go.transform.root.gameObject) && !(go.hideFlags == HideFlags.NotEditable || go.hideFlags == HideFlags.HideAndDontSave))
                objectsInScene.Add(go);
        }        return objectsInScene;
    }
}
```





This will return all GameObjects in the scene, in List<GameObject> format.


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class ExampleScript : MonoBehaviour
{
    List<GameObject> GetNonSceneObjects()
    {
        List<GameObject> objectsInScene = new List<GameObject>();        foreach (GameObject go in Resources.FindObjectsOfTypeAll(typeof(GameObject)) as GameObject[])
        {
            if (EditorUtility.IsPersistent(go.transform.root.gameObject) && !(go.hideFlags == HideFlags.NotEditable || go.hideFlags == HideFlags.HideAndDontSave))
                objectsInScene.Add(go);
        }        return objectsInScene;
    }
}
```





This will return all GameObjects that are also Prefabs in the Resources folder.




---








## Declaration

public static Object[] FindObjectsOfTypeAll(Type type);






### Description



Returns a list of all objects of Type `type`.





This function using non-generic types can return any type of Unity object that is loaded, including game objects, prefabs, materials, meshes, textures, etc. It will also list internal stuff, therefore be careful the way you handle the returned objects.
Contrary to Object.FindObjectsOfType this function will also list disabled objects.

Note: that this function is very slow and is not recommended to be used every frame.


              


```
using UnityEngine;
using UnityEditor;
using System.Collections.Generic;public class ExampleScript : MonoBehaviour
{
    List<UnityEngine.Object> GetSceneObjectsNonGeneric()
    {
        List<UnityEngine.Object> objectsInScene = new List<UnityEngine.Object>();        foreach (UnityEngine.Object go in Resources.FindObjectsOfTypeAll(typeof(UnityEngine.Object)) as UnityEngine.Object[])
        {
            GameObject cGO = go as GameObject;
            if (cGO != null && !EditorUtility.IsPersistent(cGO.transform.root.gameObject) && !(go.hideFlags == HideFlags.NotEditable || go.hideFlags == HideFlags.HideAndDontSave))
                objectsInScene.Add(go);
        }        return objectsInScene;
    }
}
```





Find all gameObjects in scene using non-generic methods.


            

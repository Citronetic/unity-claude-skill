This version of Unity is unsupported.


                  **Method group is Obsolete**





# [Object](Object.html).FindObjectsOfType




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




                [Switch to Manual](../Manual/class-Object.html)








                        **Obsolete**
                        Object.FindObjectsOfType has been deprecated. Use Object.FindObjectsByType instead which lets you decide whether you need the results sorted or not.  FindObjectsOfType sorts the results by InstanceID, but if you do not need this using FindObjectSortMode.None is considerably faster.




## Declaration

public static Object[] FindObjectsOfType(Type type);




                        **Obsolete**
                        Object.FindObjectsOfType has been deprecated. Use Object.FindObjectsByType instead which lets you decide whether you need the results sorted or not.  FindObjectsOfType sorts the results by InstanceID but if you do not need this using FindObjectSortMode.None is considerably faster.




## Declaration

public static Object[] FindObjectsOfType(Type type,
bool includeInactive);




                        **Obsolete**
                        Object.FindObjectsOfType has been deprecated. Use Object.FindObjectsByType instead which lets you decide whether you need the results sorted or not.  FindObjectsOfType sorts the results by InstanceID but if you do not need this using FindObjectSortMode.None is considerably faster.




## Declaration

public static T[] FindObjectsOfType(bool includeInactive);




                        **Obsolete**
                        Object.FindObjectsOfType has been deprecated. Use Object.FindObjectsByType instead which lets you decide whether you need the results sorted or not.  FindObjectsOfType sorts the results by InstanceID but if you do not need this using FindObjectSortMode.None is considerably faster.




## Declaration

public static T[] FindObjectsOfType();






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of object to find. |
| includeInactive | If true, components attached to inactive GameObjects are also included. |





### Returns



**Object[]**
        The array of objects found matching the type specified.





### Description



Gets a list of all loaded objects of Type `type`.





This does not return assets (such as meshes, textures or prefabs), or objects with [HideFlags.DontSave](HideFlags.DontSave.html) set.
Objects attached to inactive GameObjects are only included if `includeInactive` is set to true.
Use [Resources.FindObjectsOfTypeAll](Resources.FindObjectsOfTypeAll.html) to avoid these limitations.

In Editor, this searches the Scene view by default. If you want to find an object in the Prefab stage, see the [StageUtility](SceneManagement.StageUtility.html) APIs.

**Note**: This function is very slow. It is not recommended to use this function every frame.
In most cases you can use the singleton pattern instead.

**Obsolete**: This function is obsolete, use [Object.FindObjectsByType](Object.FindObjectsByType.html) instead. This replacement allows you to specify whether to sort the resulting array. FindObjectsOfType() always sorts by InstanceID, so calling FindObjectsByType(FindObjectsSortMode.InstanceID) produces identical results. If you specify not to sort the array, the function runs significantly faster, however, the order of the results can change between calls.


              


```
using UnityEngine;// Ten GameObjects are created and have TextMesh and
// CanvasRenderer components added.
// When the game runs press the Space key to display the
// number of TextMesh and CanvasRenderer components.public class ScriptExample : MonoBehaviour
{
    private const int count = 10;    void Start()
    {
        var gameObjects = new GameObject[count];
        var expectedTextMeshObjects = new TextMesh[count];
        var expectedCanvasObjects = new CanvasRenderer[count];        for (var i = 0; i < count; ++i)
        {
            gameObjects[i] = new GameObject();
            expectedTextMeshObjects[i] = gameObjects[i].AddComponent<TextMesh>();
            expectedCanvasObjects[i] = gameObjects[i].AddComponent<CanvasRenderer>();
        }
    }    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            var foundCanvasObjects = FindObjectsOfType<CanvasRenderer>();
            var foundTextMeshObjects = FindObjectsOfType(typeof(TextMesh));
            Debug.Log(foundCanvasObjects + " : " + foundCanvasObjects.Length);
            Debug.Log(foundTextMeshObjects + " : " + foundTextMeshObjects.Length);
        }
    }
}
```





Additional resources: [Object.FindObjectsByType](Object.FindObjectsByType.html).


            

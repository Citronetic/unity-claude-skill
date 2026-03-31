This version of Unity is unsupported.



# [Object](Object.html).FindFirstObjectByType




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










## Declaration

public static T FindFirstObjectByType();






## Declaration

public static T FindFirstObjectByType([FindObjectsInactive](FindObjectsInactive.html) findObjectsInactive);






## Declaration

public static Object FindFirstObjectByType(Type type);






## Declaration

public static Object FindFirstObjectByType(Type type,
[FindObjectsInactive](FindObjectsInactive.html) findObjectsInactive);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of object to find. |
| findObjectsInactive | Whether to include components attached to inactive GameObjects. If you don't specify this parameter, this function doesn't include inactive objects in the results. |





### Returns



**T**
        Returns the first active loaded object that matches the specified type. If no object matches the specified type, returns null.





### Description



Retrieves the first active loaded object of Type `type`.





Object.FindFirstObjectByType doesn't return Assets (for example meshes, textures, or prefabs), or inactive objects. It also doesn't return objects that have [HideFlags.DontSave](HideFlags.DontSave.html) set.

**Note**: This function is very resource intensive. It's best practice to not use this function every frame and instead, in most cases, use the singleton pattern.
Alternatively if you only need any instance of a matching object rather than the first one you can use the faster [Object.FindAnyObjectByType](Object.FindAnyObjectByType.html)

See Also: [Object.FindAnyObjectByType](Object.FindAnyObjectByType.html), [Object.FindObjectsByType](Object.FindObjectsByType.html).


              


```
using UnityEngine;
using System.Collections;// Search for the first active TextMesh and first active or inactive CanvasRenderer.
// If found print the names, else print a message saying none were found.
public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        TextMesh texture = (TextMesh)FindFirstObjectByType(typeof(TextMesh));
        if (texture)
            Debug.Log("TextMesh object found: " + texture.name);
        else
            Debug.Log("No TextMesh object could be found");
// Include inactive objects in search for CanvasRenderer
        CanvasRenderer canvas = FindFirstObjectByType<CanvasRenderer>(FindObjectsInactive.Include);
        if (canvas)
            Debug.Log("CanvasRenderer object found: " + canvas.name);
        else
            Debug.Log("No CanvasRenderer object could be found");
    }
}
```


            

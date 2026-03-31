This version of Unity is unsupported.



# [Object](Object.html).FindAnyObjectByType




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

public static T FindAnyObjectByType();






## Declaration

public static T FindAnyObjectByType([FindObjectsInactive](FindObjectsInactive.html) findObjectsInactive);






## Declaration

public static Object FindAnyObjectByType(Type type);






## Declaration

public static Object FindAnyObjectByType(Type type,
[FindObjectsInactive](FindObjectsInactive.html) findObjectsInactive);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of object to find. |
| findObjectsInactive | Whether to include components attached to inactive GameObjects. If you don't specify this parameter, this function doesn't include inactive objects in the results. |





### Returns



**T**
        Returns an arbitrary active loaded object that matches the specified type. If no object matches the specified type, returns null.





### Description



Retrieves any active loaded object of Type `type`.





`Object.FindAnyObjectByType` doesn't return Assets (for example meshes, textures, or prefabs), or inactive objects. It also doesn't return objects that have [HideFlags.DontSave](HideFlags.DontSave.html) set.

**Note**: The object that this function returns isn't guaranteed to be the same between calls, but it is always of the specified type.  This function is faster than [Object.FindFirstObjectByType](Object.FindFirstObjectByType.html) if you don't need a specific object instance.

See Also: [Object.FindFirstObjectByType](Object.FindFirstObjectByType.html), [Object.FindObjectsByType](Object.FindObjectsByType.html).


              


```
using UnityEngine;
using System.Collections;// Search for any object of Types TextMesh and CanvasRenderer,
// if found print the names, else print a message
// that says that it was not found.
public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        TextMesh texture = (TextMesh)FindAnyObjectByType(typeof(TextMesh));
        if (texture)
            Debug.Log("TextMesh object found: " + texture.name);
        else
            Debug.Log("No TextMesh object could be found");        CanvasRenderer canvas = FindAnyObjectByType<CanvasRenderer>();
        if (canvas)
            Debug.Log("CanvasRenderer object found: " + canvas.name);
        else
            Debug.Log("No CanvasRenderer object could be found");
    }
}
```


            

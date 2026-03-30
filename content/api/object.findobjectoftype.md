This version of Unity is unsupported.


                  **Method group is Obsolete**





# [Object](Object.html).FindObjectOfType




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
                        Object.FindObjectOfType has been deprecated. Use Object.FindFirstObjectByType instead or if finding any instance is acceptable the faster Object.FindAnyObjectByType.




## Declaration

public static T FindObjectOfType();




                        **Obsolete**
                        Object.FindObjectOfType has been deprecated. Use Object.FindFirstObjectByType instead or if finding any instance is acceptable the faster Object.FindAnyObjectByType.




## Declaration

public static T FindObjectOfType(bool includeInactive);




                        **Obsolete**
                        Object.FindObjectOfType has been deprecated. Use Object.FindFirstObjectByType instead or if finding any instance is acceptable the faster Object.FindAnyObjectByType.




## Declaration

public static Object FindObjectOfType(Type type);




                        **Obsolete**
                        Object.FindObjectOfType has been deprecated. Use Object.FindFirstObjectByType instead or if finding any instance is acceptable the faster Object.FindAnyObjectByType.




## Declaration

public static Object FindObjectOfType(Type type,
bool includeInactive);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of object to find. |





### Returns



**T**

          **Object** The first active loaded object that matches the specified type. It returns null if no Object matches the type.





### Description



Returns the first active loaded object of Type `type`.





Object.FindObjectOfType will not return Assets (meshes, textures, prefabs, ...) or inactive objects. It will not return an object that has [HideFlags.DontSave](HideFlags.DontSave.html) set.

Please note that this function is very slow. It is not recommended to use this function every frame. In most cases you can use the singleton pattern instead.

**Obsolete**: This function is obsolete, use [Object.FindFirstObjectByType](Object.FindFirstObjectByType.html) as a direct replacement or the faster [Object.FindAnyObjectByType](Object.FindAnyObjectByType.html) if any object of the specified type is acceptable.

See Also: [Object.FindFirstObjectByType](Object.FindFirstObjectByType.html), [Object.FindAnyObjectByType](Object.FindAnyObjectByType.html), Object.FindObjectsOfType.


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
        TextMesh texture = (TextMesh)FindObjectOfType(typeof(TextMesh));
        if (texture)
            Debug.Log("TextMesh object found: " + texture.name);
        else
            Debug.Log("No TextMesh object could be found");        CanvasRenderer canvas = FindObjectOfType<CanvasRenderer>();
        if (canvas)
            Debug.Log("CanvasRenderer object found: " + canvas.name);
        else
            Debug.Log("No CanvasRenderer object could be found");
    }
}
```


            

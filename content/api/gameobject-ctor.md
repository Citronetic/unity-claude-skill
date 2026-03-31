This version of Unity is unsupported.



# GameObject Constructor




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

public GameObject();






## Declaration

public GameObject(string name);






## Declaration

public GameObject(string name,
params Type[] components);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the GameObject, specified as a string. The name is stored in the name property of the GameObject. |
| components | The components to attach, specified as an array of types that inherit from Component. |





### Description



Creates a new GameObject, with optional parameters to specify a name and set of components to attach.





Use the constructor with no arguments to create a GameObject with an empty `name` property and only a `Transform` component attached.

Use the constructor with `name` parameter to create a GameObject with the specified value as the name property and only a `Transform` component attached.

Use the constructor with `name` and `components` parameters to create a GameObject with the specified name and the specified components attached, in addition to the `Transform` component.

When you call the GameObject constructor from a MonoBehaviour script at runtime, the GameObject is created at the root of whichever scene is currently active at the time of the call to the constructor. The currently active scene is that returned by [SceneManager.GetActiveScene](SceneManagement.SceneManager.GetActiveScene.html). The new GameObject is visible in the Hierarchy window at the root of this scene, meaning the GameObject has no parent by default.

If you call the constructor in a context where there is no valid scene loaded, such as during static initialization, or in scripts executing in Edit mode, the GameObject may be created in the "preview scene" or an internal context and not be part of any visible scene. In this case, you can explicitly add the GameObject to a scene using [SceneManager.MoveGameObjectToScene](SceneManagement.SceneManager.MoveGameObjectToScene.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    private void Start()
    {
        GameObject exampleOne = new GameObject();
        exampleOne.name = "GameObject1";
        exampleOne.AddComponent<Rigidbody>();        GameObject exampleTwo = new GameObject("GameObject2");
        exampleTwo.AddComponent<Rigidbody>();        GameObject exampleThree = new GameObject("GameObject3", typeof(Rigidbody), typeof(BoxCollider));
    }
}
```


            

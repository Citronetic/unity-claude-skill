This version of Unity is unsupported.



# [GameObjectRecorder](Animations.GameObjectRecorder.html).BindComponentsOfType




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

public void BindComponentsOfType([GameObject](GameObject.html) target,
bool recursive);






## Declaration

public void BindComponentsOfType([GameObject](GameObject.html) target,
Type componentType,
bool recursive);






### Parameters



| Parameter | Description |
| --- | --- |
| target | root or any of its children. |
| recursive | Binds also the target's children transform properties when set to true. |
| componentType | Type of the component. |





### Description



Adds bindings for all the properties of the first component of type **T** found in **target**, and also for all the **target**'s children if **recursive** is `true`.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Animations;public class BindComponentScript : MonoBehaviour
{
    void Start()
    {
        var recorder = new GameObjectRecorder(gameObject);        // Add bindings for all the properties of the Transform and BoxCollider components.
        recorder.BindComponentsOfType<Transform>(gameObject, false);
        recorder.BindComponentsOfType<BoxCollider>(gameObject, false);
    }
}
```





It is also possible to use the non-generic method, in which case `typeof()` will get the Type of the component.

This example gets exactly the same result as the example above:


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Animations;public class BindComponentNonGenericScript : MonoBehaviour
{
    void Start()
    {
        var recorder = new GameObjectRecorder(gameObject);        recorder.BindComponentsOfType(gameObject, typeof(Transform), false);
        recorder.BindComponentsOfType(gameObject, typeof(BoxCollider), false);
    }
}
```


            

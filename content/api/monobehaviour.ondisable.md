This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnDisable()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



Called when a component itself is disabled or its parent GameObject is deactivated.





`OnDisable` is called in the following scenarios:



          - When a component of an active GameObject is disabled via code or the Inspector.

          - When an enabled component's parent GameObject is deactivated.

          - When the component or parent GameObject is destroyed by calling [Object.Destroy](Object.Destroy.html).

          - When the scene is unloaded.

          - When scripts are reloaded as part of a domain reload.





`OnDisable` cannot be a [coroutine](../Manual/Coroutines.html).

Additional resources: [MonoBehaviour.OnEnable](MonoBehaviour.OnEnable.html).


              


```
// Implement OnDisable and OnEnable script functions.
// These functions will be called when the attached GameObject
// is activated/deactivated or the script component is enabled/disabled.
// This example also supports running in the Editor. The Update function
// will be called, for example, when the position of the
// GameObject is changed.using UnityEngine;[ExecuteInEditMode]
public class PrintOnOff : MonoBehaviour
{
    void OnDisable()
    {
        Debug.Log("PrintOnDisable: script was disabled");
    }    void OnEnable()
    {
        Debug.Log("PrintOnEnable: script was enabled");
    }    void Update()
    {
#if UNITY_EDITOR
        Debug.Log("Editor causes this Update");
#endif
    }
}
```


            

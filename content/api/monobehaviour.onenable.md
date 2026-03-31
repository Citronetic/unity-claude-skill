This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnEnable()




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



Called when a component of an active GameObject is first enabled.





`OnEnable` is called in the following scenarios:



          - When entering Play mode, if the GameObject is active ([GameObject.activeInHierarchy](GameObject-activeInHierarchy.html) == `true`) and the script component is enabled ([Behaviour.enabled](Behaviour-enabled.html) == `true`).

          - When enabling the script component at runtime (via code or the Inspector), if the GameObject is already active.

          - When activating the GameObject (or one of its inactive parent GameObjects) at runtime, if the script component is already enabled.





`OnEnable` is always called after [MonoBehaviour.Awake](MonoBehaviour.Awake.html) and before [MonoBehaviour.Start](MonoBehaviour.Start.html) on entering Play Mode.

`OnEnable` cannot be a [coroutine](../Manual/Coroutines.html).

Additional resources: [MonoBehaviour.OnDisable](MonoBehaviour.OnDisable.html).


              


```
// Implement OnDisable and OnEnable script functions.
// These functions will be called when the script component
// is enabled.
// This example also supports the Editor. The Update function
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


            

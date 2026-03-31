This version of Unity is unsupported.



# [ScriptableObject](ScriptableObject.html).OnDisable()




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




                [Switch to Manual](../Manual/class-ScriptableObject.html)














### Description



This function is called when the scriptable object goes out of scope.





`OnDisable` is called in the following scenarios:



          - On loading a scene in the [Hierarchy window](../Manual/Hierarchy.html), for any ScriptableObject that is currently loaded in memory but is not referenced in that scene.

          - On invocation of [Resources.UnloadUnusedAssets](Resources.UnloadUnusedAssets.html) for any ScriptableObject that was previously deselected in the [Project window](../Manual/ProjectView.html).

          - On [domain reload](../Manual/domain-reloading.html), for all ScriptableObjects loaded in memory. Subsequently `OnEnable` is called for these objects when they are recreated.





`OnDisable` cannot be a [coroutine](../Manual/Coroutines.html).


              


```
using UnityEngine;
using System;public class EventManager
{
    public static Action OnSomethingHappened;    public static void TriggerEvent()
    {
        OnSomethingHappened?.Invoke();
    }
}// ScriptableObject that listens to an event and unsubscribes when disabled
[CreateAssetMenu(menuName = "Example/Event Listener SO")]
public class EventListenerSO : ScriptableObject
{
    void OnEnable()
    {
        Debug.Log("ScriptableObject enabled. Subscribing to event.");
        EventManager.OnSomethingHappened += HandleEvent;
    }    void OnDisable()
    {
        Debug.Log("ScriptableObject disabled. Unsubscribing from event.");
        EventManager.OnSomethingHappened -= HandleEvent;
    }    void HandleEvent()
    {
        Debug.Log("Event received by ScriptableObject!");
    }
}
```


            

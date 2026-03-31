This version of Unity is unsupported.



# [PlayerLoop](LowLevel.PlayerLoop.html).SetPlayerLoop




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

public static void SetPlayerLoop([LowLevel.PlayerLoopSystem](LowLevel.PlayerLoopSystem.html) loop);






### Description



Set a new custom update order for all engine systems in Unity.





Use `SetPlayerLoop` to specify a custom update order for the Player loop. The [PlayerLoopSystem](LowLevel.PlayerLoopSystem.html) supplied as the `loop` parameter becomes the new current Player loop returned by [GetCurrentPlayerLoop](LowLevel.PlayerLoop.GetCurrentPlayerLoop.html). The new update order does not take effect until the next full Player loop iteration, but the changes are immediately visible in subsequent calls to [GetCurrentPlayerLoop](LowLevel.PlayerLoop.GetCurrentPlayerLoop.html).

Only systems included in the new Player loop will run. You can insert custom script entry points in the update order before setting it. For example, this allows you to add a script that runs immediately before physics, or in other places where scripts are not run by default.

The following example inserts a custom Player loop system that runs after the `PreLateUpdate` system in the Player loop. The custom system's `updateDelegate` is assigned the `CustomUpdate` method, which prints a message to the console when it runs.

Additional resources: [PlayerLoopSystem](LowLevel.PlayerLoopSystem.html).


              


```
using System.Collections.Generic;
using UnityEngine.LowLevel;
using UnityEngine.PlayerLoop;
using UnityEngine;
using System;

// Insert a custom update at a specified point (after an existing update phase) in the Unity Player Loop.

public class MyCustomUpdate { } // Empty class to use as a type identifier for the custom update

public static class InsertSystem
{
    // Event that MonoBehaviour scripts can subscribe to for custom update logic
    public static event Action AddCustomUpdate;

    //Run this method on runtime initialization
    [RuntimeInitializeOnLoadMethod]
    private static void AppStart()
    {
        // Retrieve the default Player loop system. Get the current loop instead if the default was already modified previously.
        var defaultLoop = PlayerLoop.GetDefaultPlayerLoop();

        // Create a custom update system
        var myCustomUpdate = new PlayerLoopSystem
        {
            subSystemList = null,
            updateDelegate = CustomUpdate,
            type = typeof(MyCustomUpdate)
        };
        // Add the custom update system after the PreLateUpdate phase in the Player Loop
        var loopWithCustomUpdate = InsertSystemAfter<PreLateUpdate>(in defaultLoop, myCustomUpdate);
        PlayerLoop.SetPlayerLoop(loopWithCustomUpdate);
    }

    private static PlayerLoopSystem InsertSystemAfter<T>(in PlayerLoopSystem loopSystem, PlayerLoopSystem newSystem) where T : struct
    {
        // Create a new root PlayerLoopSystem
        PlayerLoopSystem newPlayerLoop = new()
        {
            loopConditionFunction = loopSystem.loopConditionFunction,
            type = loopSystem.type,
            updateDelegate = loopSystem.updateDelegate,
            updateFunction = loopSystem.updateFunction
        };
        // Create a new list to populate with subsystems, including the custom system
        List<PlayerLoopSystem> newSubSystemList = new();

        //Iterate through the subsystems in the existing loop we passed in and add them to the new list
        if (loopSystem.subSystemList != null)
        {
            for (var i = 0; i < loopSystem.subSystemList.Length; i++)
            {
                newSubSystemList.Add(loopSystem.subSystemList[i]);
                // If the previously added subsystem is of the type to add after, add the custom system
                if (loopSystem.subSystemList[i].type == typeof(T))
                {
                    newSubSystemList.Add(newSystem);
                }
            }
        }

        newPlayerLoop.subSystemList = newSubSystemList.ToArray();
        return newPlayerLoop;
    }

    //Custom update function that will be called in the Player Loop
    private static void CustomUpdate()
    {
        // Invoke the custom update event if there are subscribers
        AddCustomUpdate?.Invoke();
        Debug.Log("Custom update inserted in the default Player loop.");
    }
}
```


            

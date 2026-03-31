This version of Unity is unsupported.



# PlayerLoop





class in
          UnityEngine.LowLevel



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Provides static methods for retrieving and modifying the Unity Player loop.





The Player loop is the full set of updates for different core systems that run on every iteration of a Unity runtime application's main execution loop. The `PlayerLoop` class can't be instantiated but is a utility class that provides static methods for retrieving and modifying the Player loop, which is represented as a [PlayerLoopSystem](LowLevel.PlayerLoopSystem.html).

Use a combination of these methods to customize the Player loop. You can use [PlayerLoop.GetDefaultPlayerLoop](LowLevel.PlayerLoop.GetDefaultPlayerLoop.html) to retrieve the default Player loop as a `PlayerLoopSystem`, under which other instances of `PlayerLoopSystem` are nested as the [PlayerLoopSystem.subSystemList](LowLevel.PlayerLoopSystem-subSystemList.html). You can modify this `PlayerLoopSystem` or create your own and supply it as the parameter to [PlayerLoop.SetPlayerLoop](LowLevel.PlayerLoop.SetPlayerLoop.html) to replace the default Player loop with a custom one. You can then use [PlayerLoop.GetCurrentPlayerLoop](LowLevel.PlayerLoop.GetCurrentPlayerLoop.html) to retrieve and make additional modifications to the current Player loop.

Additional resources: [PlayerLoopSystem](LowLevel.PlayerLoopSystem.html).


              


```
using System.Collections.Generic;
using UnityEngine.LowLevel;
using UnityEngine.PlayerLoop;
using UnityEngine;
using System.Text;// Insert a custom update at a specified point (after an existing update phase) in the Player Loop and print the result.public class MyCustomUpdate { } // Empty class to use as a type identifier for the custom updatepublic static class CustomLoop
{
    //Run this method on runtime initialization
    [RuntimeInitializeOnLoadMethod]
    private static void AppStart()
    {
        // Retrieve the default Player loop system. Get the current loop instead if the default was already modified previously.
        var defaultLoop = PlayerLoop.GetDefaultPlayerLoop();        // Create a custom update system
        var myCustomUpdate = new PlayerLoopSystem
        {
            subSystemList = null,
            updateDelegate = CustomUpdate,
            type = typeof(MyCustomUpdate)
        };

        // Add the custom update system after the PreLateUpdate phase in the Player Loop
        var loopWithCustomUpdate = InsertSystemAfter<PreLateUpdate>(in defaultLoop, myCustomUpdate);
        PlayerLoop.SetPlayerLoop(loopWithCustomUpdate);        // Print the current Player loop to verify the custom update was added
        StringBuilder sb = new();
        RecursivePlayerLoopPrint(PlayerLoop.GetCurrentPlayerLoop(), sb, 0);
        Debug.Log(sb.ToString());
    }    private static PlayerLoopSystem InsertSystemAfter<T>(in PlayerLoopSystem loopSystem, PlayerLoopSystem newSystem) where T : struct
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
        List<PlayerLoopSystem> newSubSystemList = new();        //Iterate through the subsystems in the existing loop we passed in and add them to the new list
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
        }        newPlayerLoop.subSystemList = newSubSystemList.ToArray();
        return newPlayerLoop;
    }    //Custom update function that will be called in the Player Loop
    private static void CustomUpdate()
    {
        Debug.Log("Custom update running!");
    }    private static void RecursivePlayerLoopPrint(PlayerLoopSystem playerLoopSystem, StringBuilder sb, int depth)
    {
        if (depth == 0)
        {
            sb.AppendLine("ROOT NODE");
        }
        else if (playerLoopSystem.type != null)
        {
            for (int i = 0; i < depth; i++)
            {
                sb.Append("\t");
            }
            sb.AppendLine(playerLoopSystem.type.Name);
        }
        if (playerLoopSystem.subSystemList != null)
        {
            depth++;
            foreach (var s in playerLoopSystem.subSystemList)
            {
                RecursivePlayerLoopPrint(s, sb, depth);
            }
            depth--;
        }
    }
}
```





### Static Methods



| Method | Description |
| --- | --- |
| GetCurrentPlayerLoop | Returns a Player loop system representing the current update order of all engine systems in Unity. |
| GetDefaultPlayerLoop | Returns a Player loop system representing the default update order of all engine systems in Unity. |
| SetPlayerLoop | Set a new custom update order for all engine systems in Unity. |


            

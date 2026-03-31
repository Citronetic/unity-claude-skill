This version of Unity is unsupported.



# PlayerLoopSystem





struct in
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



The representation of a single system that updates as part of the Player loop in Unity.





A Player loop system represents an engine component or subsystem that updates on each iteration of the Player loop. `PlayerLoopSystem` has a nested structure where each system contains a `subSystemList`, which is an array of other systems that update as part of the parent system.

The default loop consists of Unity's built-in native systems such as Input and Audio, but you can add new custom systems to the Player loop by using [PlayerLoop.SetPlayerLoop](LowLevel.PlayerLoop.SetPlayerLoop.html) in your C# code. Native systems can only be retrieved by calling [PlayerLoop.GetDefaultPlayerLoop](LowLevel.PlayerLoop.GetDefaultPlayerLoop.html), and their parameters must not be modified.

Additional resources: [PlayerLoop](LowLevel.PlayerLoop.html).


              


```
using System.Text;
using UnityEngine.LowLevel;
using UnityEngine;public static class PrintDefaultPlayerLoop
{
    //Retrieve the default Player loop system and iterate over its subsystems to print them.    //Run this method on runtime initialization
    [RuntimeInitializeOnLoadMethod]
    private static void AppStart()
    {
        StringBuilder sb = new();
        // Pass the default Player loop to the recursive print function
        RecursivePlayerLoopPrint(PlayerLoop.GetDefaultPlayerLoop(), sb, 0);
        Debug.Log(sb.ToString());
    }
    // Loop through the Player loop tree structure and add the names of the systems to the StringBuilder
    private static void RecursivePlayerLoopPrint(PlayerLoopSystem playerLoopSystem, StringBuilder sb, int depth)
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





### Properties



| Property | Description |
| --- | --- |
| loopConditionFunction | The loop condition for a native engine system. To get a valid value for this, you must copy it from one of the PlayerLoopSystems returned by PlayerLoop.GetDefaultPlayerLoop. |
| subSystemList | An array of sub-systems, each of which is also a PlayerLoopSystem, which run as part of this system in the Player loop. |
| type | A System.Type used to identify a Player loop system and label it in the Profiler. |
| updateDelegate | A managed delegate to which you can assign a custom update method that should run as part of this system. |
| updateFunction | A native engine system. To get a valid value for this, you must copy it from one of the PlayerLoopSystems returned by GetDefaultPlayerLoop. |


            

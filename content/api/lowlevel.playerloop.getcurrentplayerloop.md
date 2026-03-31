This version of Unity is unsupported.



# [PlayerLoop](LowLevel.PlayerLoop.html).GetCurrentPlayerLoop




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

public static [LowLevel.PlayerLoopSystem](LowLevel.PlayerLoopSystem.html) GetCurrentPlayerLoop();






### Description



Returns a Player loop system representing the current update order of all engine systems in Unity.





The [PlayerLoopSystem](LowLevel.PlayerLoopSystem.html) returned by this method can be modified to create a custom update order which you can set using [SetPlayerLoop](LowLevel.PlayerLoop.SetPlayerLoop.html). If no custom loop has been set with [SetPlayerLoop](LowLevel.PlayerLoop.SetPlayerLoop.html), then `GetCurrentPlayerLoop` returns the same result as [GetDefaultPlayerLoop](LowLevel.PlayerLoop.GetDefaultPlayerLoop.html).

                    Additional resources: [PlayerLoopSystem](LowLevel.PlayerLoopSystem.html)


              


```
using System.Text;
using UnityEngine.LowLevel;
using UnityEngine;public static class PrintCurrentPlayerLoop
{
    //Retrieve the current Player loop system and iterate over its subsystems to print them.    //Run this method on runtime initialization
    [RuntimeInitializeOnLoadMethod]
    private static void AppStart()
    {
        StringBuilder sb = new();
        // Pass the current Player loop to the recursive print function
        RecursivePlayerLoopPrint(PlayerLoop.GetCurrentPlayerLoop(), sb, 0);
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


            

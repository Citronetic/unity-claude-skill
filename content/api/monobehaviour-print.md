This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).print




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










## Declaration

public static void print(object message);






### Parameters



| Parameter | Description |
| --- | --- |
| message | The message to display in the console. |





### Description



Logs a message to the Unity Console. Functionally equivalent to Debug.Log.





The `print` method is a functionally equivalent alternative to [Debug.Log](Debug.Log.html) when used in a Monobehaviour script. Refer to [Debug.Log](Debug.Log.html) for more information.

Additional resources: [Debug.Log](Debug.Log.html), [Debug.LogWarning](Debug.LogWarning.html), [Debug.LogError](Debug.LogError.html).


              


```
using UnityEngine;public class PrintExample : MonoBehaviour
{
    public int playerHealth = 85;
    public int maxHealth = 100;    void Start()
    {
        // Simply print a message in the console
        print("The Start method has been called.");        // Log variables using string interpolation
        print($"Initial player health: {playerHealth}");        // Log a variable using formatting
        float healthPercentage = playerHealth / (float)maxHealth;
        print($"The player's total score is: {healthPercentage:F2}");
    }
}
```


            

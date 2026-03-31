This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).FixedUpdate()




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



Update called at regular, fixed intervals as part of Unity's physics update loop.





The interval between calls is determined by the value of [Time.fixedDeltaTime](Time-fixedDeltaTime.html). You can modify this value from code or by updating the **Fixed Timestep** value in the Unity Editor's [Time settings](../Manual/class-TimeManager.html). The default is 0.02 seconds (50 calls per second).

Use `FixedUpdate` to perform physics system calculations. For example, use `FixedUpdate` when applying a force to a [Rigidbody](Rigidbody.html).

Unlike [MonoBehaviour.Update](MonoBehaviour.Update.html), which is called once per rendered frame, `FixedUpdate` may be called zero, one, or multiple times per frame depending on the frame rate and simulation needs. This ensures that physics calculations remain consistent and deterministic, regardless of how fast the game renders frames. Use [Application.targetFrameRate](Application-targetFrameRate.html) to set a target frame rate. For more information on managing frame rate variation, refer to [Handling variation in time](../Manual/time-handling-variations.html).

The following example compares the number of `Update` calls against the number of `FixedUpdate` calls.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;// GameObject.FixedUpdate example.
//
// Measure frame rate comparing FixedUpdate against Update.
// Show the rates every second.public class ExampleScript : MonoBehaviour
{
    private float updateCount = 0;
    private float fixedUpdateCount = 0;
    private float updateUpdateCountPerSecond;
    private float updateFixedUpdateCountPerSecond;    void Awake()
    {
        // Uncommenting this will cause framerate to drop to 10 frames per second.
        // This will mean that FixedUpdate is called more often than Update.
        //Application.targetFrameRate = 10;
        StartCoroutine(Loop());
    }    // Increase the number of calls to Update.
    void Update()
    {
        updateCount += 1;
    }    // Increase the number of calls to FixedUpdate.
    void FixedUpdate()
    {
        fixedUpdateCount += 1;
    }    // Show the number of calls to both messages.
    void OnGUI()
    {
        GUIStyle fontSize = new GUIStyle(GUI.skin.GetStyle("label"));
        fontSize.fontSize = 24;
        GUI.Label(new Rect(100, 100, 200, 50), "Update: " + updateUpdateCountPerSecond.ToString(), fontSize);
        GUI.Label(new Rect(100, 150, 200, 50), "FixedUpdate: " + updateFixedUpdateCountPerSecond.ToString(), fontSize);
    }    // Update both CountsPerSecond values every second.
    IEnumerator Loop()
    {
        while (true)
        {
            yield return new WaitForSeconds(1);
            updateUpdateCountPerSecond = updateCount;
            updateFixedUpdateCountPerSecond = fixedUpdateCount;            updateCount = 0;
            fixedUpdateCount = 0;
        }
    }
}
```


            

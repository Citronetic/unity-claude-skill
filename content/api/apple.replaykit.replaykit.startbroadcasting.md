This version of Unity is unsupported.



# [ReplayKit](Apple.ReplayKit.ReplayKit.html).StartBroadcasting(BroadcastStatusDelegate, bool, bool)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| callback | A callback for getting the status of broadcast initiation. |
| enableMicrophone | Enable or disable the microphone while broadcasting. Enabling the microphone allows you to include user commentary while broadcasting. The default value is false. |
| enableCamera | Enable or disable the camera while broadcasting. Enabling camera allows you to include user camera footage while broadcasting. The default value is false. To actually include camera footage in your broadcast, you also have to call ShowCameraPreviewAt as well to position the preview view. |





### Description



Initiates and starts a new broadcast
When StartBroadcast is called, user is presented with a broadcast provider selection screen, and then a broadcast setup screen. Once it is finished, a broadcast will be started, and the callback will be invoked.
It will also be invoked in case of any error.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Apple.ReplayKit;public class CubController : MonoBehaviour
{
    // ....    void OnGUI()
    {
        GUI.Box(new Rect(2 * 10, 2 * 10, 2 * 200, 4 * 90), "Broadcasting");        if (GUI.Button(new Rect(2 * 20, 2 * 40, 2 * 180, 2 * 30), "Start Broadcasting"))
        {
            ReplayKit.StartBroadcasting((bool success, string error) => Debug.Log(string.Format("Start : {0}, error : `{1}`", success, error)));
        }
        if (GUI.Button(new Rect(2 * 20, 2 * 70, 2 * 180, 2 * 30), "Stop Broadcasting"))
        {
            ReplayKit.StopBroadcasting();
        }        GUI.Label(new Rect(2 * 20, 2 * 100, 2 * 180, 2 * 10), "broadcastingAPIAvailable : " + (ReplayKit.broadcastingAPIAvailable ? "true" : "false"));
        GUI.Label(new Rect(2 * 20, 2 * 120, 2 * 180, 2 * 10), "isBroadcasting : " + (ReplayKit.isBroadcasting ? "true" : "false"));
        GUI.Label(new Rect(2 * 20, 2 * 140, 2 * 180, 2 * 10), "broadcastURL : " + ReplayKit.broadcastURL);
        GUI.Label(new Rect(2 * 20, 2 * 160, 2 * 180, 2 * 10), "lastError : " + ReplayKit.lastError);
    }
}
```


            

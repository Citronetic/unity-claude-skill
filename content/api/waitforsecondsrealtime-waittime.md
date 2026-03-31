This version of Unity is unsupported.



# [WaitForSecondsRealtime](WaitForSecondsRealtime.html).waitTime




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












                    public float waitTime;






### Description



The given amount of seconds that the yield instruction will wait for.


              


```
using System.Collections;
using UnityEngine;public class WaitForSecondsRealtimeExample : MonoBehaviour
{
    public float waitTime = 3;    WaitForSecondsRealtime waitForSecondsRealtime;    IEnumerator DoWaitTest()
    {
        Debug.Log("Start waiting: " + Time.realtimeSinceStartup);        if (waitForSecondsRealtime == null)
            waitForSecondsRealtime = new WaitForSecondsRealtime(waitTime);
        else
            waitForSecondsRealtime.waitTime = waitTime;
        yield return waitForSecondsRealtime;        Debug.Log("End waiting: " + Time.realtimeSinceStartup);
    }    void OnGUI()
    {
        if (GUILayout.Button("Start Waiting"))
        {
            StartCoroutine(DoWaitTest());
        }
    }
}
```


            

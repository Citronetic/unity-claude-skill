This version of Unity is unsupported.



# [Handheld](Handheld.html).StartActivityIndicator




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

public static void StartActivityIndicator();






### Description



Starts os activity indicator.





Please be warned that this informs os ui system to start.
For actual animation to take effect you usually need to wait till the end of this frame.
So if you want activity indicator to be animated during synced operation, please use coroutines.
Note: You can't move the activity indicator invoked by this method.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;public class Example2 : MonoBehaviour
{
    IEnumerator Load()
    {
        #if UNITY_IPHONE
        Handheld.SetActivityIndicatorStyle(iOS.ActivityIndicatorStyle.Gray);
        #elif UNITY_ANDROID
        Handheld.SetActivityIndicatorStyle(AndroidActivityIndicatorStyle.Small);
        #endif        Handheld.StartActivityIndicator();
        yield return new WaitForSeconds(0);
        SceneManager.LoadScene("My Next Scene");
    }    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 10, 200, 200), "Load!"))
            StartCoroutine(Load());
    }
}
```


            

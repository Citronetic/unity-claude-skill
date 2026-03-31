This version of Unity is unsupported.



# [Logger](Logger.html).logEnabled




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












                    public bool logEnabled;






### Description



To runtime toggle debug logging [ON/OFF].


              


```
using UnityEngine;
using System.Collections;public class MyGameClass : MonoBehaviour
{
    private static ILogger logger = Debug.unityLogger;
    private static string kTAG = "MyGameTag";    void Start()
    {
        logger.logEnabled = Debug.isDebugBuild;        logger.Log(kTAG, "This log will be displayed only in debug build");
    }
}
```


            

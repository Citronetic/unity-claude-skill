This version of Unity is unsupported.



# [Application](Application.html).RequestAdvertisingIdentifierAsync




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

public static bool RequestAdvertisingIdentifierAsync([Application.AdvertisingIdentifierCallback](Application.AdvertisingIdentifierCallback.html) delegateMethod);






### Parameters



| Parameter | Description |
| --- | --- |
| delegateMethod | Delegate method. |





### Returns



**bool**
        Returns true if successful, and false for platforms which do not support Advertising Identifiers. In this case, the delegate method is not invoked.





### Description



Request an advertising ID for iOS and UWP.


              


```
using System;
using UnityEngine;public class SampleBehaviour : MonoBehaviour
{
    public void Start()
    {
        Application.RequestAdvertisingIdentifierAsync(
            (string advertisingId, bool trackingEnabled, string error) =>
            { Debug.Log("advertisingId " + advertisingId + " " + trackingEnabled + " " + error); }
        );
    }
}
```


            

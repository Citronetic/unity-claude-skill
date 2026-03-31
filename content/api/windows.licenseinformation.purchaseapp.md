This version of Unity is unsupported.



# [LicenseInformation](Windows.LicenseInformation.html).PurchaseApp




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

public static string PurchaseApp();






### Returns



**string**
        Purchase receipt.





### Description



Attempts to purchase the app if it is in installed in trial mode.





Calling this pops up a dialog for the user asking whether they want to buy the application. If the user buys the application, returns a valid purchase receipt string. Otherwise, returns an empty string.


              


```
using UnityEngine;
using UnityEngine.Windows;class MyMonoBehaviour : MonoBehaviour
{
    string m_Receipt;    void OnGUI()
    {
        if (LicenseInformation.isOnAppTrial)
        {
            if (GUI.Button(new Rect(10, 10, 100, 40), "Buy full version"))
            {
                m_Receipt = LicenseInformation.PurchaseApp();
            }
        }
        else
        {
            GUI.Label(new Rect(10, 10, 100, 40), "You have full application version installed");
        }
    }
}
```


            

This version of Unity is unsupported.



# NetworkReachability





enumeration


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



Describes network reachability options.





Describes which options are available for connecting to the Internet on the device if there are any.


              


```
//Attach this script to a GameObject
//This script checks the device’s ability to reach the internet and outputs it to the console windowusing UnityEngine;public class Example : MonoBehaviour
{
    string m_ReachabilityText;    void Update()
    {
//Output the network reachability to the console window
        Debug.Log("Internet : " + m_ReachabilityText);
        //Check if the device cannot reach the internet
        if (Application.internetReachability == NetworkReachability.NotReachable)
        {
            //Change the Text
            m_ReachabilityText = "Not Reachable.";
        }
        //Check if the device can reach the internet via a carrier data network
        else if (Application.internetReachability == NetworkReachability.ReachableViaCarrierDataNetwork)
        {
            m_ReachabilityText = "Reachable via carrier data network.";
        }
        //Check if the device can reach the internet via a LAN
        else if (Application.internetReachability == NetworkReachability.ReachableViaLocalAreaNetwork)
        {
            m_ReachabilityText = "Reachable via Local Area Network.";
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| NotReachable | Network is not reachable. |
| ReachableViaCarrierDataNetwork | Network is reachable via carrier data network. |
| ReachableViaLocalAreaNetwork | Network is reachable via WiFi or cable. |


            

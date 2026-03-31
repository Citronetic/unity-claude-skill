This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).productName




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static string productName;






### Description



The name of your product.





Define the name of your application. The product name appears as the application title in various places, such as the home screen on mobile, window titles on desktop, and system UIs.  `PlayerSettings.productName` is also used to locate the preferences file and define file names for the built Player.


              


```
// Save this code in the Editor folder of your Project. When you save, Unity compiles this script and changes the settings. using UnityEditor;[InitializeOnLoad]
public static class SetProductNameAutomatically
{
    static SetProductNameAutomatically()
    {
// Replace with your desired product name.
        PlayerSettings.productName = "My New Game";
        UnityEngine.Debug.Log("Product name set to: " + PlayerSettings.productName);
    }
}
```


            

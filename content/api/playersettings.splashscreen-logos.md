This version of Unity is unsupported.



# [PlayerSettings.SplashScreen](PlayerSettings.SplashScreen.html).logos




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







                    public static SplashScreenLogo[] logos;






### Description



The collection of logos that is shown during the splash screen. Logos are drawn in ascending order, starting from index 0, followed by 1, etc etc.


              


```
using UnityEngine;
using UnityEditor;public class ExampleScript
{
    [MenuItem("SplashScreen/AssignLogos")]
    public static void AssignLogos()
    {
        var logos = new PlayerSettings.SplashScreenLogo[2];        // Company logo
        Sprite companyLogo = (Sprite)AssetDatabase.LoadAssetAtPath("Assets/SplashScreen/company logo.jpg", typeof(Sprite));
        logos[0] = PlayerSettings.SplashScreenLogo.Create(2.5f, companyLogo);        // Set the Unity logo to be drawn after the company logo.
        logos[1] = PlayerSettings.SplashScreenLogo.CreateWithUnityLogo();        PlayerSettings.SplashScreen.logos = logos;
    }
}
```


            

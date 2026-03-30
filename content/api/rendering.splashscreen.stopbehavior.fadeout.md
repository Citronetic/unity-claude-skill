This version of Unity is unsupported.



# [SplashScreen.StopBehavior](Rendering.SplashScreen.StopBehavior.html).FadeOut




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



Jumps to the final stage of the Splash Screen and performs a fade from the background to the game.


              


```
using System.Collections;
using UnityEngine;
using UnityEngine.Rendering;// This example shows how the Splash Screen can be canceled early via the user pressing any key.
public class Example : MonoBehaviour
{
    public SplashScreen.StopBehavior stopBehavior;    void Start()
    {
        StartCoroutine(SplashScreenController());
    }    IEnumerator SplashScreenController()
    {
        SplashScreen.Begin();
        while (!SplashScreen.isFinished)
        {
            // Fade to the background if the user presses any key during the Splash Screen rendering.
            if (Input.anyKeyDown)
            {
                SplashScreen.Stop(stopBehavior);
                break;
            }
            yield return null;
        }
    }
}
```


            

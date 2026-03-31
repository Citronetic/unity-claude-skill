This version of Unity is unsupported.



# [Application](Application.html).platform




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












                    public static [RuntimePlatform](RuntimePlatform.html) platform;






### Description



Returns the platform the game is running on (Read Only).





Use this property if you need to do some platform dependent work.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        if (Application.platform == RuntimePlatform.WindowsPlayer)
            Debug.Log("Do something special here");
    }
}
```





Additional resources: [RuntimePlatform](RuntimePlatform.html) enum, [SystemInfo](SystemInfo.html) class.


            

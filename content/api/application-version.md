This version of Unity is unsupported.



# [Application](Application.html).version




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












                    public static string version;






### Description



Returns application version number (Read Only).





This function returns the current version of the application. This is read-only. To set the version number in Unity, go to **Edit**>**Project Settings**>**Player**.

This is the same as [PlayerSettings.bundleVersion](PlayerSettings-bundleVersion.html).


              


```
using UnityEngine;public class ApplicationVersionExample : MonoBehaviour
{
    void Start()
    {
        //This will print whatever is in Edit>Project Settings>Player>Version (by default 0.1)
        Debug.Log("Application Version : " + Application.version);
    }
}
```


            

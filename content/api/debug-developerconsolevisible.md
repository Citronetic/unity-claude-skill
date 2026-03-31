This version of Unity is unsupported.



# [Debug](Debug.html).developerConsoleVisible




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




                [Switch to Manual](../Manual/class-Debug.html)







                    public static bool developerConsoleVisible;






### Description



Controls whether the development console is visible.





The developer console is a window that can appear when a development build of your project is running. It is similar to the Console window in the Editor, but appears at runtime. The development console automatically appears when an error has been logged, and [Debug.developerConsoleEnabled](Debug-developerConsoleEnabled.html) is true. For example:


              


```
using UnityEngine;public class LogErrorScript : MonoBehaviour
{
    void Start()
    {
        Debug.LogError("I am an Error");
    }
}
```





You can close the development console when opened by using:


              


```
using UnityEngine;public class CloseDevConsoleScript : MonoBehaviour
{
    void Start()
    {
        Debug.developerConsoleVisible = false;
    }
}
```





You can reopen the development console if at least one entry exists in the console by using:


              


```
using UnityEngine;public class OpenDevConsoleScript : MonoBehaviour
{
    void Start()
    {
        Debug.developerConsoleVisible = true;
    }
}
```


            

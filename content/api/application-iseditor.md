This version of Unity is unsupported.



# [Application](Application.html).isEditor




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












                    public static bool isEditor;






### Description



Whether the game is running inside the Unity Editor (Read Only).





Returns true if the game is being run from the Unity Editor; false if run from any deployment target.


              


```
using UnityEngine;class Example : MonoBehaviour
{
    void Start()
    {
        if (Application.isEditor)
        {
            print("We are running this from inside of the editor!");
        }
    }
}
```


            

This version of Unity is unsupported.



# [SystemLanguage](SystemLanguage.html).Lithuanian




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



Indicates that the operating system's language is Lithuanian.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        //This checks if your computer's operating system is in the Lithuanian language
        if (Application.systemLanguage == SystemLanguage.Lithuanian)
        {
            //Outputs into console that the system is Lithuanian
            Debug.Log("This system is in Lithuanian. ");
        }
    }
}
```


            

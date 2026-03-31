This version of Unity is unsupported.



# [SystemLanguage](SystemLanguage.html).Unknown




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



Indicates that the operating system's language is unknown.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        //This checks if your computer's operating system is in an unknown language
        if (Application.systemLanguage == SystemLanguage.Unknown)
        {
            //Outputs into console that the system language is unknown
            Debug.Log("This system is in an unknown language. ");
        }
    }
}
```


            

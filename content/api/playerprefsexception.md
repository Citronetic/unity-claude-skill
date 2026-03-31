This version of Unity is unsupported.



# PlayerPrefsException





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



An exception thrown by the [PlayerPrefs](PlayerPrefs.html) class in a  web player build.





The exception is thrown when writing to a preference file exceeds the allotted storage space.  This exception is not thrown on other platforms.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        // create a one megabyte character string
        string s16 = "0123456789abcdef";
        string s1024 = "";
        for (int j = 0; j < 64; j++)
            s1024 += s16;
        string s1024x1024 = "";
        for (int i  = 0; i < 1024; i++)
            s1024x1024 += s1024;        // try to save the string
        try
        {
            PlayerPrefs.SetString("fail", s1024x1024);
        }
        // handle the error
        catch (System.Exception err)
        {
            Debug.Log("Got: " + err);
        }
    }
}
```





Note that web player is not supported from 5.4.0 onwards.


            

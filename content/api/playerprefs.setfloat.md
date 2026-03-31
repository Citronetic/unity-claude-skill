This version of Unity is unsupported.



# [PlayerPrefs](PlayerPrefs.html).SetFloat




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















## Declaration

public static void SetFloat(string key,
float value);






### Description



Sets the float value of the preference identified by the given key. You can use [PlayerPrefs.GetFloat](PlayerPrefs.GetFloat.html) to retrieve this value.





The following example passes the `KeyName` and `Value` variables to a function called `SetFloat`. The function uses the `KeyName` variable in `PlayerPrefs.SetFloat` as an identifier, and `Value` as the contents to store. For example, you could use `PlayerPrefs.SetFloat` to store the user’s current health, like this: /PlayerPrefs.SetFloat(“CharacterHealth”, 60.5f)/.
The GetFloat function then uses the same `KeyName` variable to retrieve the value stored in `PlayerPrefs`. See [PlayerPrefs.GetFloat](PlayerPrefs.GetFloat.html) for more information.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public void SetFloat(string KeyName, float Value)
    {
        PlayerPrefs.SetFloat(KeyName, Value);
    }    public float GetFloat(string KeyName)
    {
        return PlayerPrefs.GetFloat(KeyName);
    }
}
```


            

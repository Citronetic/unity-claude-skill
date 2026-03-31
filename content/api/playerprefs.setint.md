This version of Unity is unsupported.



# [PlayerPrefs](PlayerPrefs.html).SetInt




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

public static void SetInt(string key,
int value);






### Description



Sets a single integer value for the preference identified by the given key. You can use [PlayerPrefs.GetInt](PlayerPrefs.GetInt.html) to retrieve this value.





The following example passes the `KeyName` and `Value` variables to a function called `SetInt`. The function uses the `KeyName` variable in `PlayerPrefs.SetInt` as an identifier, and `Value` as the contents to store. For example, you could use `PlayerPrefs.SetInt` to store the user’s currency, like this: /PlayerPrefs.SetInt(“CharacterMoney”, 123)/.

The GetInt function then uses the same `KeyName` variable to retrieve the value stored in the `PlayerPrefs` data.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public void SetInt(string KeyName, int Value)
    {
        PlayerPrefs.SetInt(KeyName, Value);
    }    public int Getint(string KeyName)
    {
        return PlayerPrefs.GetInt(KeyName);
    }
}
```


            

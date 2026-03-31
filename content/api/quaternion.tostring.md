This version of Unity is unsupported.



# [Quaternion](Quaternion.html).ToString




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




                [Switch to Manual](../Manual/class-Quaternion.html)










## Declaration

public string ToString();






## Declaration

public string ToString(string format);






## Declaration

public string ToString(string format,
IFormatProvider formatProvider);






### Parameters



| Parameter | Description |
| --- | --- |
| format | A numeric format string. |
| formatProvider | An object that specifies culture-specific formatting. |





### Description



Returns a formatted string for this quaternion.





Defaults to five digits displayed (format="F5"). For more information, see Microsoft's documentation on [Standard numeric format strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings#FFormatString).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Quaternion quaternion = new Quaternion(1.0f, 2.0f, 3.0f, 4.0f);
        Debug.Log(quaternion.ToString()); // output displayed as: "(1.00000, 2.00000, 3.00000, 4.00000)"
    }
}
```


            

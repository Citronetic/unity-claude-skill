This version of Unity is unsupported.



# [Color](Color.html).ToString




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



Returns a formatted string of this color.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Color color = Color.magenta;        // Print "RGBA(1.000, 0.000, 1.000, 1.000)"
        print(color.ToString());        color = new Color(Random.value, Random.value, Random.value, 1.0f);        // Print for example "RGBA(0.36183, 0.49653, 0.04036, 1.00000)"
        // "F5" sets the format to 5 floating point digits
        print(color.ToString("F5"));
    }
}
```


            

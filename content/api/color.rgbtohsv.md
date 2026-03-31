This version of Unity is unsupported.



# [Color](Color.html).RGBToHSV




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

public static void RGBToHSV([Color](Color.html) rgbColor,
out float H,
out float S,
out float V);






### Parameters



| Parameter | Description |
| --- | --- |
| rgbColor | An input color. |
| H | Output variable for hue. |
| S | Output variable for saturation. |
| V | Output variable for value. |





### Description



Calculates the hue, saturation and value of an RGB input color.





The H, S, and V are output in the range 0.0 to 1.0.


              


```
using UnityEngine;// Display an RGBA as an HSVpublic class ExampleScript : MonoBehaviour
{
    void Start()
    {
        float H, S, V;        Color.RGBToHSV(new Color(0.9f, 0.7f, 0.1f, 1.0F), out H, out S, out V);
        Debug.Log("H: " + H + " S: " + S + " V: " + V);
    }
}
```


            

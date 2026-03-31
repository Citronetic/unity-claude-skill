This version of Unity is unsupported.



# [Color32](Color32.html).this[int]




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












                    public byte this[int];






### Description



Access the red (r), green (g), blue (b), and alpha (a) color components using [0], [1], [2], [3] respectively.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Color32 color = new Color32(0, 0, 0, 0);
    void Start()
    {
        //The same as color.g = 255
        color[1] = 255;
    }
}
```


            

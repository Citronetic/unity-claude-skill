This version of Unity is unsupported.



# [Color](Color.html).this[int]




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












                    public float this[int];






### Description



Access the r, g, b,a components using [0], [1], [2], [3] respectively.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Color color = Color.white;
    void Start()
    {
        //The same as color.g = 5
        color[1] = 5;
    }
}
```


            

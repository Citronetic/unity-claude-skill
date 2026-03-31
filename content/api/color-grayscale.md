This version of Unity is unsupported.



# [Color](Color.html).grayscale




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












                    public float grayscale;






### Description



The grayscale value of the color. (Read Only)





Unity uses the following formula to calculate the grayscale value: `(0.299f * Color.r) + (0.587f * Color.g) + (0.114f * Color.b)`.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Color newColor = new Color(0.3f, 0.4f, 0.6f);
        print(newColor.grayscale);
    }
}
```


            

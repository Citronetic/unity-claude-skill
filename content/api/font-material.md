This version of Unity is unsupported.



# [Font](Font.html).material




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












                    public [Material](Material.html) material;






### Description



The material used for the font display.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Swap 3D Text font color each second
    // Add this script to a text mesh object
    bool flag = false;
    float rate = 1f;
    TextMesh t;    void Update()
    {
        t = transform.GetComponent<TextMesh>();
        if (Time.time > rate)
        {
            if (flag)
            {
                t.font.material.color = Color.yellow;
                flag = false;
            }
            else
            {
                t.font.material.color = Color.red;
                flag = true;
            }
            rate += 1;
        }
        t.text = "This is a 3D text changing colors!";
    }
}
```


            

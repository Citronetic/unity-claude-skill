This version of Unity is unsupported.



# [Color](Color.html).operator *




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












                    public static [Color](Color.html) operator *([Color](Color.html) a,
[Color](Color.html) b);






### Description



Multiplies two colors together. Each component is multiplied separately.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Color grayColor = Color.gray * Color.white;
    }
}
```




---





                    public static [Color](Color.html) operator *([Color](Color.html) a,
float b);






### Description



Multiplies color `a` by the float `b`. Each color component is scaled separately.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Color whiteColor = Color.gray * 2;
    }
}
```




---





                    public static [Color](Color.html) operator *(float b,
[Color](Color.html) a);






### Description



Multiplies color `a` by the float `b`. Each color component is scaled separately.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Color whiteColor = 2 * Color.gray;
    }
}
```


            

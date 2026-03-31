This version of Unity is unsupported.



# [PropertyAttribute](PropertyAttribute.html).order




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












                    public int order;






### Description



Optional field to specify the order that multiple DecorationDrawers should be drawn in.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    [Space(10, order = 0)]
    [Header("Header with some space around it", order = 1)]
    [Space(40, order = 2)]    public string playerName = "Unnamed";
}
```


            

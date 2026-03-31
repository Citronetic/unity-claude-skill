This version of Unity is unsupported.



# [TextMesh](TextMesh.html).fontSize




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




                [Switch to Manual](../Manual/class-TextMesh.html)







                    public int fontSize;






### Description



The font size to use (for [dynamic fonts](Font-dynamic.html)).





If this is set to a non-zero value, the font size specified in the font importer is overriden with a custom size.
This is only supported for fonts set to use dynamic font rendering. Other fonts will always use the default font size.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        GetComponent<TextMesh>().fontSize = 12;
    }
}
```


            

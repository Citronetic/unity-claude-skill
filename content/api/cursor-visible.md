This version of Unity is unsupported.



# [Cursor](Cursor.html).visible




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












                    public static bool visible;






### Description



Determines whether the hardware pointer is visible or not.





Set this to true to reveal the cursor. Set it to false to hide the cursor. Note that in [CursorLockMode.Locked](CursorLockMode.Locked.html) mode, the cursor is invisible regardless of the value of this property.


              


```
using UnityEngine;
using System.Collections;public class CursorScript : MonoBehaviour
{
    // Use this for initialization
    void Start()
    {
        //Set Cursor to not be visible
        Cursor.visible = false;
    }
}
```


            
